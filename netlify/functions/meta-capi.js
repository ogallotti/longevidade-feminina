const PIXEL_ID = '738966624417507';
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;
const API_VERSION = 'v21.0';

function hashSHA256(value) {
    if (!value) return undefined;
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' };
    }

    if (!ACCESS_TOKEN) {
        console.error('META_CAPI_TOKEN not configured');
        return { statusCode: 200, headers, body: JSON.stringify({ ok: true, warning: 'CAPI token not set' }) };
    }

    try {
        const data = JSON.parse(event.body);

        const clientIp = event.headers['x-forwarded-for']?.split(',')[0]?.trim()
            || event.headers['x-nf-client-connection-ip']
            || event.headers['client-ip']
            || '';

        const userAgent = event.headers['user-agent'] || '';

        const userData = {
            client_ip_address: clientIp,
            client_user_agent: userAgent,
        };

        if (data.email) userData.em = [hashSHA256(data.email)];
        if (data.phone) userData.ph = [hashSHA256(data.phone)];
        if (data.fbc) userData.fbc = data.fbc;
        if (data.fbp) userData.fbp = data.fbp;

        const eventData = {
            event_name: data.event_name || 'PageView',
            event_time: Math.floor(Date.now() / 1000),
            event_id: data.event_id,
            event_source_url: data.source_url || '',
            action_source: 'website',
            user_data: userData,
        };

        if (data.custom_data) {
            eventData.custom_data = data.custom_data;
        }

        const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: [eventData] }),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Meta CAPI error:', JSON.stringify(result));
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ ok: true, events_received: result.events_received }),
        };
    } catch (error) {
        console.error('CAPI function error:', error);
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ ok: true, error: 'processed with errors' }),
        };
    }
};
