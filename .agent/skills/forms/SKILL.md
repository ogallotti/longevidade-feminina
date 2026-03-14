---
name: forms
description: Use when creating or modifying contact forms, lead capture forms, or any form with a phone field. Includes intl-tel-input with masks, email validation, Netlify Forms integration with AJAX submit, redirect with URL params forwarding, and thank you page.
---

# Skill: Forms

Formulários com Netlify Forms, validação internacional de telefone, submit via AJAX e redirect com repasse de parâmetros.

---

## Estrutura HTML Completa

```html
<form
  name="contato"
  method="POST"
  action="/obrigado.html"
  data-netlify="true"
  netlify-honeypot="bot-field"
  data-form
>
  <!-- OBRIGATÓRIO para AJAX: hidden input com form-name -->
  <input type="hidden" name="form-name" value="contato">

  <!-- Honeypot anti-spam -->
  <p hidden><label>Não preencha: <input name="bot-field"></label></p>

  <div class="form-group">
    <label class="form-label" for="nome">Nome</label>
    <input type="text" id="nome" name="nome" class="form-input" required autocomplete="name">
  </div>

  <div class="form-group">
    <label class="form-label" for="email">E-mail</label>
    <input type="email" id="email" name="email" class="form-input" required autocomplete="email">
  </div>

  <div class="form-group">
    <label class="form-label" for="telefone">WhatsApp</label>
    <input type="tel" id="telefone" name="telefone" class="form-input" required autocomplete="tel">
  </div>

  <div class="form-feedback"></div>
  <button type="submit" class="btn">Enviar</button>
</form>
```

---

## Atributos Obrigatórios do Form

- `name` = Nome único → Identificador no dashboard Netlify
- `method` = `POST` → Método de envio
- `action` = `/pagina-obrigado.html` → Redirect após sucesso (com repasse de parâmetros)
- `data-netlify` = `true` → Ativa Netlify Forms
- `netlify-honeypot` = `bot-field` → Anti-spam
- `data-form` (sem valor) → Seletor para JavaScript

### Hidden Input OBRIGATÓRIO

```html
<input type="hidden" name="form-name" value="contato">
```

**CRÍTICO:** O `value` DEVE ser EXATAMENTE igual ao atributo `name` do `<form>`. Sem isso, o submit via AJAX não funciona.

---

## JavaScript para Submit via AJAX

O script.js do template já inclui tudo. Abaixo a referência do que ele faz:

### Validação de Email

Bloqueia domínios de email temporário:

```javascript
const tempEmailDomains = [
  'tempmail', 'guerrillamail', '10minutemail', 'mailinator',
  'throwaway', 'fakeinbox', 'yopmail', 'trashmail', 'temp-mail',
  'disposable', 'sharklasers'
];
```

### Validação de Telefone

Usa `input._iti.isValidNumber()` para validar o número no formato internacional (cada input tel tem sua própria instância).

### Submit e Redirect

Fluxo após submit bem-sucedido:

1. Dispara `fbq('track', 'Lead')` se Meta Pixel estiver configurado
2. Se o form tem `action`, redireciona com TODOS os parâmetros:
   - Repassa parâmetros da URL atual (utm_source, utm_medium, fbclid, gclid, etc)
   - Adiciona `nome` e `email` do formulário como parâmetros
3. Se o form NÃO tem `action`, mostra mensagem de sucesso in-page

**Exemplo de redirect:**

URL de acesso: `https://site.com/?utm_source=google&fbclid=abc123`
Form preenchido: nome="João", email="joao@email.com"
Redirect final: `/obrigado.html?utm_source=google&fbclid=abc123&nome=João&email=joao%40email.com`

### Pontos CRÍTICOS do JavaScript

- URL do fetch → `form.getAttribute('action')` (NUNCA `'/'`)
- Content-Type → `application/x-www-form-urlencoded` (NUNCA `application/json`)
- Body → `new URLSearchParams(formData).toString()` (NUNCA `JSON.stringify`)
- FormData → `new FormData(form)` (NUNCA montar objeto manualmente)
- Capturar nome e email ANTES do fetch (form.reset limpa os campos)

---

## Página de Agradecimento

Crie uma página separada para o redirect após sucesso. Os parâmetros `nome` e `email` ficam disponíveis via URL para personalização.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obrigado!</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <section class="thank-you">
    <h1>Inscrição Confirmada!</h1>
    <p>Você será redirecionado em <span id="countdown">10</span> segundos...</p>
    <a href="https://link-do-grupo" class="btn" id="btn-action">Entrar no Grupo</a>
  </section>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // Parâmetros disponíveis via URL (nome, email, utms, etc)
      const params = new URLSearchParams(window.location.search);
      const nome = params.get('nome');

      // Personalizar saudação (opcional)
      if (nome) {
        document.querySelector('h1').textContent = nome + ', Inscrição Confirmada!';
      }

      // Countdown e redirect
      let count = 10;
      const countdownEl = document.getElementById('countdown');
      const linkDestino = document.getElementById('btn-action').href;

      const timer = setInterval(() => {
        count--;
        if (countdownEl) countdownEl.textContent = count;
        if (count <= 0) {
          clearInterval(timer);
          window.location.href = linkDestino;
        }
      }, 1000);
    });
  </script>
</body>
</html>
```

---

## Formulário em Modal

Quando o form abre em popup/modal ao invés de estar direto na página.

### Regras CRÍTICAS

1. **O HTML do form DEVE existir no HTML estático** (dentro do `<body>`, pode estar com `display:none`). Netlify detecta forms no build time - se o form for criado via JavaScript, Netlify NÃO o detecta e os envios falham silenciosamente.

2. **NÃO usar `action`** no form do modal. Sem `action`, o script.js mostra mensagem de sucesso in-page ao invés de redirecionar (redirecionar com modal aberto é confuso).

3. **IDs únicos** - Se já existe outro form na página, TODOS os IDs devem ser diferentes (ex: `id="nome"` no form principal → `id="modal-nome"` no modal).

4. **`name` único no form** - Cada form precisa de um `name` diferente para Netlify distinguir (ex: `name="contato"` vs `name="contato-modal"`). O hidden `form-name` deve ter o MESMO valor.

### Template Modal Completo

```html
<!-- Botão que abre o modal (colocar onde quiser) -->
<button type="button" class="btn" data-modal="contato-modal">Contato</button>

<!-- Modal (DEVE estar no HTML estático, NÃO criado via JS) -->
<div class="modal-overlay" id="contato-modal" role="dialog" aria-modal="true" aria-label="Formulário de contato">
  <div class="modal-content">
    <button type="button" class="modal-close" aria-label="Fechar">&times;</button>

    <h2>Entre em contato</h2>

    <form name="contato-modal" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-form>
      <input type="hidden" name="form-name" value="contato-modal">
      <p hidden><label>Não preencha: <input name="bot-field"></label></p>

      <div class="form-group">
        <label class="form-label" for="modal-nome">Nome</label>
        <input type="text" id="modal-nome" name="nome" class="form-input" required autocomplete="name">
      </div>

      <div class="form-group">
        <label class="form-label" for="modal-email">E-mail</label>
        <input type="email" id="modal-email" name="email" class="form-input" required autocomplete="email">
      </div>

      <div class="form-group">
        <label class="form-label" for="modal-telefone">WhatsApp</label>
        <input type="tel" id="modal-telefone" name="telefone" class="form-input" required autocomplete="tel">
      </div>

      <div class="form-group">
        <label class="form-label" for="modal-mensagem">Mensagem</label>
        <textarea id="modal-mensagem" name="mensagem" class="form-input" rows="4" required></textarea>
      </div>

      <div class="form-feedback"></div>
      <button type="submit" class="btn">Enviar</button>
    </form>
  </div>
</div>
```

**Observe:**
- Form SEM `action` (mostra mensagem de sucesso, não redireciona)
- `name="contato-modal"` e `value="contato-modal"` idênticos
- IDs com prefixo `modal-` para evitar conflito
- O modal `id="contato-modal"` é aberto pelo botão via `data-modal="contato-modal"`

### JavaScript do Modal

Adicionar ao `script.js`:

```javascript
/* Modal */
function initModals() {
  // Abrir
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modal);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Fechar (X, overlay, Escape)
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.querySelector('.modal-close')?.addEventListener('click', () => closeModal(modal));
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
}
```

**IMPORTANTE:** Chamar `initModals()` no `DOMContentLoaded` (junto com `initForms`, `initPhoneInput`, etc.)

### CSS do Modal

```css
/* Modal */
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  align-items: center;
  justify-content: center;
}

.modal-overlay.active {
  display: flex;
}

.modal-content {
  background: var(--color-bg, #fff);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: inherit;
  line-height: 1;
}
```

### Fechar modal após sucesso

Após submit bem-sucedido, o `showFeedback` exibe a mensagem. Para fechar o modal automaticamente após a mensagem, adicionar no CSS e depois de `showFeedback`:

```javascript
// Dentro do callback de sucesso do form, após showFeedback:
const modal = form.closest('.modal-overlay');
if (modal) {
  setTimeout(() => closeModal(modal), 3000);
}
```

---

## Múltiplos Formulários

O `script.js` suporta múltiplos formulários na mesma página. Cada `form[data-form]` é tratado independentemente.

### Regras para múltiplos forms

1. **Cada form tem `name` único** → identifica no dashboard Netlify
2. **Cada hidden `form-name` tem o MESMO valor do `name` do form**
3. **IDs de campos devem ser únicos** no HTML inteiro (usar prefixos: `id="hero-nome"`, `id="modal-nome"`)
4. **Atributos `name` dos campos podem ser iguais** entre forms (ex: ambos com `name="email"`) - só o `name` do `<form>` precisa ser único

### O script.js cuida de tudo automaticamente

- `initPhoneInput()` inicializa TODOS os `input[type="tel"]` da página (cada um com sua instância)
- `handleFormSubmit` busca o telefone DAQUELE form específico (via `form.querySelector`)
- Validação, submit e feedback são por form

### Exemplo: form no hero + form no modal

```html
<!-- Form 1: no hero -->
<form name="lead-hero" method="POST" action="/obrigado.html" data-netlify="true" netlify-honeypot="bot-field" data-form>
  <input type="hidden" name="form-name" value="lead-hero">
  ...campos com id="hero-nome", id="hero-email", id="hero-tel"...
</form>

<!-- Form 2: no modal -->
<form name="contato-modal" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-form>
  <input type="hidden" name="form-name" value="contato-modal">
  ...campos com id="modal-nome", id="modal-email", id="modal-tel"...
</form>
```

- Form 1: tem `action` → redireciona com parâmetros
- Form 2: sem `action` → mostra mensagem de sucesso in-page

---

## intl-tel-input (Telefone Internacional)

Já configurado no template com:
- Strict mode (máscara obrigatória por país)
- Brasil como país padrão
- Bandeiras no dropdown
- Validação automática
- Formato internacional no envio

### CDNs necessárias

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/css/intlTelInput.css">
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/intlTelInput.min.js"></script>
```

### Inicialização (já no script.js)

O `initPhoneInput()` inicializa TODOS os `input[type="tel"]` da página. Cada input recebe sua própria instância em `input._iti`:

```javascript
document.querySelectorAll('input[type="tel"]').forEach(input => {
  input._iti = intlTelInput(input, {
    initialCountry: 'br',
    preferredCountries: ['br', 'us', 'pt'],
    separateDialCode: true,
    strictMode: true,
    loadUtilsOnInit: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
  });
});
```

No submit, o handler busca a instância do telefone DAQUELE form: `form.querySelector('input[type="tel"]')._iti`

---

## Tracking (Meta Pixel / GTM)

O `script.js` já dispara automaticamente no submit bem-sucedido:
- `fbq('track', 'Lead')` - Meta Pixel
- `dataLayer.push({ event: 'generate_lead' })` - GTM

Para configurar os snippets de tracking (GTM e/ou Meta Pixel), use `/configurar-tracking` ou consulte a skill `tracking`.

---

## Dashboard do Netlify

Após deploy, os envios aparecem em: **Site > Forms > [nome do formulário]**

Configure notificações: **Site > Forms > Form notifications** (Email, Slack, Webhook)

---

## Checklist de Verificação

### HTML
- [ ] `name="nome-único"` no `<form>`
- [ ] `method="POST"`
- [ ] `data-netlify="true"`
- [ ] `action="/pagina-obrigado.html"`
- [ ] `netlify-honeypot="bot-field"`
- [ ] `<input type="hidden" name="form-name" value="nome-único">`
- [ ] Campo honeypot dentro de elemento `hidden`

### JavaScript
- [ ] Fetch usa `form.getAttribute('action')` (NÃO usa `'/'`)
- [ ] Header `Content-Type: application/x-www-form-urlencoded`
- [ ] Body usa `new URLSearchParams(formData).toString()`
- [ ] FormData criado a partir do form
- [ ] Nome e email capturados ANTES do fetch
- [ ] Redirect repassa parâmetros da URL + nome + email

### Modal (se aplicável)
- [ ] HTML do form está no HTML estático (NÃO criado via JS)
- [ ] Form SEM `action` (mostra sucesso in-page, não redireciona)
- [ ] IDs com prefixo único (ex: `modal-nome`, `modal-email`)
- [ ] `name` do form diferente de outros forms na página
- [ ] `initModals()` chamado no DOMContentLoaded
- [ ] CSS do modal incluído no style.css

### Netlify
- [ ] Form aparece listado após deploy
- [ ] Submissões aparecem no painel

---

## Troubleshooting

### Form não aparece no painel Netlify

1. Verificar `data-netlify="true"` no `<form>`
2. Fazer novo deploy (Clear cache and deploy)
3. Verificar se form detection está habilitado em Forms > Settings

### Submissões não são registradas

1. Verificar se `form-name` hidden tem valor EXATO do `name` do form
2. Verificar se fetch NÃO está enviando para `'/'` (usar `action`)
3. Verificar console do browser por erros
4. Testar submit nativo (sem JS) para isolar problema

### Redirect após submit não funciona

1. Verificar se `action` do form está com caminho correto
2. Verificar se JavaScript redireciona após `response.ok`
3. Verificar se não há erro antes do redirect

### Parâmetros não chegam na página de obrigado

1. Verificar se `action` está definido no form (sem action = sem redirect)
2. Verificar se campos `name="nome"` e `name="email"` existem no form
3. Inspecionar a URL de redirect no DevTools Network

### Modal form não envia / Netlify não detecta

1. O HTML do form DEVE estar no HTML estático (NÃO criado via JavaScript)
2. Verificar `<input type="hidden" name="form-name" value="NOME_DO_FORM">`
3. O `value` do hidden DEVE ser EXATAMENTE igual ao `name` do `<form>`
4. Fazer novo deploy (Netlify detecta forms no build time)

### Segundo form não funciona (múltiplos forms)

1. Verificar se ambos forms têm `data-form` (seletor do JS)
2. Verificar se cada form tem `name` único
3. Verificar se IDs dos campos são únicos (usar prefixos)
4. Verificar se `initPhoneInput` está usando `querySelectorAll` (não `querySelector`)

### Telefone não valida / Bandeiras não aparecem

1. Verificar se CSS e JS do intl-tel-input v24.6.0 carregaram
2. Verificar console por erros de carregamento
3. Verificar se `loadUtilsOnInit` está com URL correta
4. Se múltiplos forms: verificar se `initPhoneInput` inicializa TODOS os `input[type="tel"]`
