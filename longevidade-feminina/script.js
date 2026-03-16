// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP Initialization
gsap.registerPlugin(ScrollTrigger);

// Header Entrance
gsap.fromTo('.fade-up-nav',
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
);

// Hero Entrance
const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });

heroTl.fromTo('.fade-up',
    { y: 60, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.8, stagger: 0.15, clearProps: 'all' },
    "-=1"
);

// Image Parallax Effect (Hero)
gsap.to('.parallax-img', {
    y: "15%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero-image-column",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

// Section 2 Glass Panel Reveal
gsap.fromTo('.gsap-reveal .glass-panel',
    { y: 80, opacity: 0, scale: 0.98 },
    {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '#section-2',
            start: 'top 80%',
        }
    }
);

// Scroll Indicator Line Drop
gsap.to('.line-drop', {
    height: "100%",
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
});

// Parallax suave na imagem editorial da seção 2
gsap.to('.editorial-img', {
    y: "10%",
    ease: "none",
    scrollTrigger: {
        trigger: ".editorial-image-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

/* Seção 3: Methodology Cards Parallax */
gsap.to('.card-1', {
    y: "5%",
    ease: "none",
    scrollTrigger: {
        trigger: ".methodology-cards-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
gsap.to('.card-2', {
    y: "10%",
    ease: "none",
    scrollTrigger: {
        trigger: ".methodology-cards-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
gsap.to('.card-3', {
    y: "15%",
    ease: "none",
    scrollTrigger: {
        trigger: ".methodology-cards-wrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

/* Seção 4: Counter Animation */
function createCounterAnimation(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 400; // ms
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        const currentValue = Math.floor(progress * target);
        element.textContent = currentValue.toString().padStart(2, '0');

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toString().padStart(2, '0');
        }
    }

    requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            createCounterAnimation(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.counter-number').forEach(el => {
    counterObserver.observe(el);
});

/* Seção 5: Clinical Background Parallax */
gsap.to('.clinical-bg-circle', {
    y: -30,
    ease: "none",
    scrollTrigger: {
        trigger: ".section-clinical",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

/* Seção 7: Light Leaks Parallax */
gsap.to('.leak-1', {
    x: 100,
    ease: "none",
    scrollTrigger: {
        trigger: ".section-rupture",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
gsap.to('.leak-2', {
    x: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".section-rupture",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

/* Seção 10: Author Parallax */
gsap.to('.parallax-author', {
    y: "5%",
    ease: "none",
    scrollTrigger: {
        trigger: ".author-image-column",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

/* Seção 11: FAQ Accordion Toggle */
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            document.querySelectorAll('.faq-question').forEach(btn => btn.classList.remove('active'));
            if (!isActive) button.classList.add('active');
        });
    });
}

/* ============================================
   PRE-CHECKOUT MODAL & FORM
   ============================================ */

const CHECKOUT_URL = 'https://pay.hotmart.com/B104892964H?checkoutMode=10';

// Temp email domains blocklist
const tempEmailDomains = [
    'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
    'throwaway', 'fakeinbox', 'yopmail', 'trashmail', 'temp-mail',
    'disposable', 'sharklasers'
];

function isValidEmail(email) {
    const domain = email.split('@')[1] || '';
    return !tempEmailDomains.some(t => domain.includes(t));
}

/* --- Modal --- */
function initModals() {
    const modalButtons = document.querySelectorAll('[data-modal]');
    console.log(`[Modal] Encontrados ${modalButtons.length} botões de modal`);

    modalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Evita conflitos com outros listeners (Lenis/GSAP)

            const modalId = btn.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            console.log(`[Modal] Ativando modal: ${modalId}`, modal);

            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                if (window.lenis) window.lenis.stop(); // Para o scroll se o Lenis estiver ativo

                const firstInput = modal.querySelector('input:not([type="hidden"])');
                if (firstInput) setTimeout(() => firstInput.focus(), 100);
            }
        });
    });

    // Fechar (X, overlay, Escape)
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.addEventListener('click', () => closeModal(modal));
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const active = document.querySelector('.modal-overlay.active');
            if (active) closeModal(active);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start(); // Reinicia o scroll
}

/* --- Phone Input --- */
function initPhoneInput() {
    document.querySelectorAll('input[type="tel"]').forEach(input => {
        if (typeof intlTelInput !== 'undefined') {
            input._iti = intlTelInput(input, {
                initialCountry: 'br',
                preferredCountries: ['br', 'us', 'pt'],
                separateDialCode: true,
                strictMode: true,
                loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
            });
        }
    });
}

/* --- Form Submit --- */
const PRECHECKOUT_API = 'https://vstlmwrbevcdprrsntac.supabase.co/functions/v1/precheckout-form';

function initForms() {
    document.querySelectorAll('form[data-form]').forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const feedback = form.querySelector('.form-feedback');
            const submitBtn = form.querySelector('button[type="submit"]');
            const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
            const originalText = btnText ? btnText.textContent : '';

            if (submitBtn) submitBtn.disabled = true;
            if (btnText) btnText.textContent = 'Processando...';

            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value && !isValidEmail(emailInput.value)) {
                showFeedback(feedback, 'Por favor, use um e-mail válido.', 'error');
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.textContent = originalText;
                return;
            }

            const telInput = form.querySelector('input[type="tel"]');
            if (telInput && telInput._iti && !telInput._iti.isValidNumber()) {
                showFeedback(feedback, 'Por favor, informe um número de WhatsApp válido.', 'error');
                if (submitBtn) submitBtn.disabled = false;
                if (btnText) btnText.textContent = originalText;
                return;
            }

            const nome = form.querySelector('input[name="nome"]')?.value || '';
            const email = emailInput?.value || '';
            const telefone = telInput?._iti ? telInput._iti.getNumber() : (telInput?.value || '');

            try {
                const res = await fetch(PRECHECKOUT_API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        product_id: '7378745',
                        name: nome,
                        phone: telefone,
                        email: email || undefined
                    })
                });

                const data = await res.json();

                if (!res.ok || !data.ok) {
                    showFeedback(feedback, data.error || 'Erro ao processar. Tente novamente.', 'error');
                    if (submitBtn) submitBtn.disabled = false;
                    if (btnText) btnText.textContent = originalText;
                    return;
                }

                if (typeof fbq !== 'undefined') fbq('track', 'Lead');
                if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'generate_lead' });

                const params = new URLSearchParams(window.location.search);
                params.set('nome', nome);
                params.set('email', email);

                const separator = CHECKOUT_URL.includes('?') ? '&' : '?';
                window.location.href = CHECKOUT_URL + separator + params.toString();

            } catch (error) {
                console.error('Form submit error:', error);
                window.location.href = CHECKOUT_URL;
            }
        });
    });
}

function showFeedback(el, message, type) {
    if (!el) return;
    el.textContent = message;
    el.className = 'form-feedback ' + type;
    el.style.display = 'block';
}

/* --- Marquee Infinite Scroll --- */
function initMarquee() {
    const inner = document.querySelector('.marquee-inner');
    if (!inner) return;
    // Duplicate items for seamless loop
    const items = inner.innerHTML;
    inner.innerHTML = items + items;

    // Pause on touch (mobile)
    const track = document.querySelector('.marquee-track');
    if (track) {
        track.addEventListener('touchstart', () => inner.style.animationPlayState = 'paused', { passive: true });
        track.addEventListener('touchend', () => inner.style.animationPlayState = 'running', { passive: true });
    }
}

/* --- Smooth Scroll for CTAs --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Skip if it has a data-modal attribute (modal triggers)
            if (this.hasAttribute('data-modal')) return;

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            if (window.lenis) {
                lenis.scrollTo(target, { offset: 0, duration: 1.5 });
            } else {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            disableMutationObserver: true
        });
    }

    // 2. Modals & Forms
    initModals();
    initPhoneInput();
    initForms();
    initFAQ();

    // 3. Marquee & Smooth Scroll
    initMarquee();
    initSmoothScroll();
});
