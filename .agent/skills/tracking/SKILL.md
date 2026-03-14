---
name: tracking
description: Use when the user wants to add tracking, analytics, pixels, GTM, Google Tag Manager, Meta Pixel, Facebook Pixel, conversion tracking, or event tracking to their page.
---

# Skill: Tracking

Google Tag Manager (GTM) e Meta Pixel (Facebook/Instagram) para páginas web.

---

## Cenários de Uso

| Cenário | Solução |
|---------|---------|
| Apenas anúncios Meta (Facebook/Instagram) | Meta Pixel direto |
| Apenas Google Ads / GA4 | GTM |
| Meta + Google Ads / GA4 | GTM + Meta Pixel direto |
| Multi-plataforma (Meta, Google, TikTok, etc.) | GTM gerenciando tudo |

**Recomendação padrão:** GTM + Meta Pixel direto. GTM cuida de GA4 e Google Ads. Pixel direto é mais simples e confiável para Meta.

---

## 1. Google Tag Manager (GTM)

### Snippet no HTML

Adicionar em TODAS as páginas (index.html e obrigado.html):

```html
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
  <!-- End Google Tag Manager -->

  <!-- ... resto do head ... -->
</head>
<body>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->

  <!-- ... resto do body ... -->
```

**IMPORTANTE:**
- Substituir `GTM-XXXXXXX` pelo ID real do container
- O snippet do `<head>` deve ficar o MAIS ALTO possível (antes de qualquer outro script)
- O `<noscript>` deve ficar IMEDIATAMENTE após abrir `<body>`

### dataLayer - Eventos Customizados

O `script.js` do template já envia `generate_lead` no submit do formulário. Para eventos adicionais:

```javascript
// Evento customizado genérico
dataLayer.push({
  event: 'nome_do_evento',
  parametro1: 'valor1',
  parametro2: 'valor2'
});
```

### Eventos já enviados automaticamente pelo template

| Evento | Quando | Dados |
|--------|--------|-------|
| `generate_lead` | Form submit com sucesso | `form_name`, `method: 'netlify_form'` |

### Eventos recomendados para configurar no GTM Dashboard

**Triggers (Acionadores):**

| Trigger | Tipo | Configuração |
|---------|------|-------------|
| Page View - Todas | Page View | Disparar em todas as páginas |
| Page View - Obrigado | Page View | URL contém `/obrigado` |
| Form Submit | Custom Event | Event name = `generate_lead` |
| Scroll 50% | Scroll Depth | Vertical, 50% |
| Scroll 90% | Scroll Depth | Vertical, 90% |
| CTA Click | Click - All Elements | Click Classes contém `btn` |

**Tags sugeridas:**

| Tag | Tipo | Trigger | Uso |
|-----|------|---------|-----|
| GA4 - Config | Google Analytics: GA4 Configuration | All Pages | Tracking básico |
| GA4 - Conversão Lead | GA4 Event | Form Submit | Marcar conversão |
| GA4 - Scroll Depth | GA4 Event | Scroll 50%, 90% | Engajamento |
| Google Ads - Conversão | Google Ads Conversion Tracking | Page View - Obrigado | Conversão de anúncio |
| Google Ads - Remarketing | Google Ads Remarketing | All Pages | Listas de remarketing |

---

## 2. Meta Pixel (Facebook/Instagram)

### Código Base

Adicionar no `<head>` de TODAS as páginas:

```html
<head>
  <!-- Meta Pixel Code -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID_AQUI');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=PIXEL_ID_AQUI&ev=PageView&noscript=1"/></noscript>
  <!-- End Meta Pixel Code -->
</head>
```

**IMPORTANTE:** Substituir `PIXEL_ID_AQUI` pelo ID numérico do Pixel.

### Onde encontrar o Pixel ID

1. Abrir **Meta Events Manager**: https://business.facebook.com/events_manager
2. Selecionar o Pixel
3. O ID numérico aparece abaixo do nome (ex: `123456789012345`)

### Eventos Padrão do Meta Pixel

O template já dispara `Lead` automaticamente no submit do formulário.

| Evento | Quando | Quem dispara |
|--------|--------|-------------|
| `PageView` | Carregamento da página | Código base (automático) |
| `Lead` | Form submit com sucesso | `script.js` (automático) |

### Eventos adicionais (se necessário)

```javascript
// Na página de obrigado
fbq('track', 'CompleteRegistration');

// Clique em botão de WhatsApp
fbq('track', 'Contact');

// Visualização de vídeo
fbq('track', 'ViewContent', {
  content_name: 'Vídeo depoimento',
  content_type: 'video'
});
```

### Página de Obrigado

A página de obrigado deve ter o **mesmo Pixel com PageView**, mas NÃO precisa de `Lead` (já foi disparado no submit):

```html
<head>
  <!-- Meta Pixel Code (MESMO código base, MESMO Pixel ID) -->
  <script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID_AQUI');
  fbq('track', 'PageView');
  </script>
  <noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=PIXEL_ID_AQUI&ev=PageView&noscript=1"/></noscript>
  <!-- End Meta Pixel Code -->
</head>
```

### Conversions API (CAPI) - Opcional Avançado

Para tracking server-side (mais preciso com bloqueadores):
- Configurar no Meta Events Manager
- Requer backend (Netlify Functions ou Zapier/Make)
- Fora do escopo deste template (HTML estático)

---

## 3. Ordem dos Scripts no `<head>`

A ordem importa. Seguir esta sequência:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO -->
  <title>...</title>
  <meta name="description" content="...">

  <!-- 1. GTM (PRIMEIRO - precisa capturar tudo) -->
  <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

  <!-- 2. Meta Pixel (SEGUNDO - precisa do PageView cedo) -->
  <script>!function(f,b,e,v,n,t,s){...}; fbq('init','PIXEL_ID'); fbq('track','PageView');</script>
  <noscript>...</noscript>

  <!-- 3. Open Graph -->
  <meta property="og:title" content="...">

  <!-- 4. Favicon, Fonts, CSS -->
  <link rel="icon" ...>
  <link rel="preconnect" ...>
  <link rel="stylesheet" ...>

  <!-- 5. Scripts da página -->
  <script src="..." defer></script>
</head>
```

---

## 4. Performance

### Impacto no PageSpeed

GTM e Meta Pixel são scripts terceiros. Impacto típico:
- **TBT:** +50-150ms (execução do JS)
- **Score:** -3 a -8 pontos (aceitável para tracking)

### Otimização (se score for crítico)

Se o PageSpeed Score for prioridade máxima, usar carregamento adiado:

```html
<script>
// Adia GTM e Pixel para após idle do browser
function loadTracking() {
  // GTM
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-XXXXXXX');

  // Meta Pixel
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID_AQUI');
  fbq('track', 'PageView');
}

if ('requestIdleCallback' in window) {
  requestIdleCallback(loadTracking);
} else {
  setTimeout(loadTracking, 2000);
}
</script>
```

**ATENÇÃO:** O carregamento adiado pode:
- Perder PageViews de usuários que saem muito rápido (<2s)
- Causar discrepância nos dados de analytics
- **Recomendação:** SÓ usar se a nota do PageSpeed for realmente crítica. Na maioria dos casos, o carregamento normal é preferível.

---

## 5. Verificação e Debug

### Meta Pixel

1. **Meta Pixel Helper** (extensão Chrome): https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc
   - Mostra quais eventos foram disparados
   - Verifica se o Pixel está ativo

2. **Events Manager**: https://business.facebook.com/events_manager
   - Aba "Test Events" > digitar URL > clicar "Open Website"
   - Navegar no site e verificar eventos em tempo real

3. **Console do browser:**
   ```javascript
   // Verificar se fbq existe
   typeof fbq // deve retornar "function"
   ```

### GTM

1. **GTM Preview Mode**: No dashboard GTM > clicar "Preview"
   - Abre o site com painel de debug
   - Mostra quais tags dispararam e quais não
   - Mostra eventos do dataLayer

2. **Google Tag Assistant** (extensão Chrome): Verifica todas as tags Google

3. **Console do browser:**
   ```javascript
   // Ver todos os eventos do dataLayer
   dataLayer
   ```

### Checklist de Verificação

- [ ] Pixel Helper mostra PageView no carregamento
- [ ] Pixel Helper mostra Lead após submit do form
- [ ] GTM Preview mostra tags disparando corretamente
- [ ] Events Manager recebe eventos em Test Events
- [ ] Página de obrigado tem o mesmo Pixel/GTM instalado
- [ ] Não há erros no console relacionados a tracking
- [ ] PageSpeed Score não caiu mais que 10 pontos

---

## 6. Erros Comuns

### Pixel/GTM não dispara

1. Verificar se o ID está correto
2. Verificar se o snippet está no `<head>` (não no body)
3. Verificar se não há bloqueador de anúncios ativo
4. Testar em aba anônima

### Lead não é registrado

1. Verificar console após submit do form
2. Verificar se `typeof fbq === 'function'` retorna true
3. Verificar se o form submit está funcionando (Network tab)
4. O evento Lead é disparado ANTES do redirect - se o redirect for muito rápido, pode não completar. O template já cuida disso (dispara Lead, depois faz redirect).

### Eventos duplicados

1. Verificar se o Pixel NÃO está no GTM E no HTML ao mesmo tempo (exceto se intencional)
2. Verificar se Lead NÃO está sendo disparado na página de obrigado (já foi no submit)
3. Verificar se não há dois snippets do mesmo Pixel na página

### GTM não aparece no preview

1. Verificar se o container foi publicado (GTM exige publicar após fazer alterações)
2. Verificar se o ID do container está correto
3. Limpar cache do browser

---

## 7. Mapeamento de Eventos para Anúncios

### Meta Ads (Facebook/Instagram)

| Objetivo do Anúncio | Evento para Otimizar | Onde Disparar |
|---------------------|---------------------|--------------|
| Gerar leads | Lead | Submit do form |
| Tráfego | PageView | Automático |
| Conversões | CompleteRegistration | Página obrigado |
| Engajamento | ViewContent | Automático |

### Google Ads

| Objetivo | Conversão no Google Ads | Trigger no GTM |
|----------|------------------------|----------------|
| Gerar leads | Conversão "Lead" | Custom Event: `generate_lead` |
| Tráfego qualificado | Conversão "Page View Obrigado" | Page View com URL `/obrigado` |
| Engajamento | Conversão "Scroll 90%" | Scroll Depth 90% |

---

## 8. Template de Configuração

Ao configurar tracking, colete do usuário:

```
TRACKING CONFIGURATION
======================
GTM Container ID: GTM-_______
Meta Pixel ID: _______________

Eventos desejados:
[ ] PageView (automático)
[ ] Lead no form submit (automático)
[ ] Scroll depth
[ ] Click em CTAs
[ ] Conversão na página de obrigado

Plataformas de anúncio:
[ ] Meta Ads (Facebook/Instagram)
[ ] Google Ads
[ ] GA4
[ ] TikTok Ads
[ ] Outro: _______________
```
