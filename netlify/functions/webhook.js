exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const data = JSON.parse(event.body);

        // Webhook URL - configure aqui ou via variável de ambiente
        const webhookUrl = process.env.WEBHOOK_URL;

        if (!webhookUrl) {
            console.log('WEBHOOK_URL not configured. Data received:', data);
            return { statusCode: 200, body: JSON.stringify({ message: 'No webhook configured' }) };
        }

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: data.nome || '',
                email: data.email || '',
                telefone: data.telefone || '',
                timestamp: new Date().toISOString(),
                source: 'longevidade-feminina'
            })
        });

        if (!response.ok) {
            console.error('Webhook error:', response.status);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Webhook dispatched' })
        };
    } catch (error) {
        console.error('Function error:', error);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Processed with errors' })
        };
    }
};
