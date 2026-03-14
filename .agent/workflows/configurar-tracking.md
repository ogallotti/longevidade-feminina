---
description: configurar-tracking
---

# Instruções

O usuário quer configurar tracking (GTM e/ou Meta Pixel) na página. Use a skill `tracking` como referência técnica.

---

## REGRA DE OURO: Autonomia Total

**VOCÊ DEVE implementar tudo sozinho.** O usuário só precisa fornecer os IDs e dizer quais eventos quer rastrear.

---

## Etapa 1: Coletar Informações

### Identificar a Pasta da Página

Identifique em qual pasta da página você está trabalhando. Os arquivos devem estar dentro da pasta da página.

### Perguntar ao Usuário

Faça TODAS estas perguntas de uma vez:

**1. Quais plataformas de anúncio você usa?**
- Meta Ads (Facebook/Instagram)
- Google Ads
- Ambos
- Outro

**2. IDs de tracking:**
- Se Meta Ads: "Qual o ID do seu Pixel do Meta? (número com ~15 dígitos, encontrado em Meta Events Manager > Data Sources)"
- Se Google Ads/GA4: "Qual o ID do seu container GTM? (formato GTM-XXXXXXX, encontrado em tagmanager.google.com)"

**3. Além do básico (PageView + Lead no form), quer rastrear mais alguma ação?**
- Scroll depth (quanto o usuário rolou)
- Cliques em botões CTA
- Conversão na página de obrigado
- Outro

**4. Já existe uma página de obrigado?** (se sim, qual o caminho)

---

## Etapa 2: Ler a Skill de Referência

Leia `.agent/skills/tracking/SKILL.md` para ter acesso a todos os snippets e melhores práticas.

---

## Etapa 3: Implementar

### 3.1 Instalar os Snippets

Leia o `index.html` da pasta da página.

**Ordem de inserção no `<head>` (respeitar):**

1. **GTM** (se houver) - PRIMEIRO, logo após as metas iniciais
2. **Meta Pixel** (se houver) - SEGUNDO, após GTM
3. Open Graph, Favicon, Fonts, CSS - DEPOIS
4. Scripts da página - POR ÚLTIMO

**Para GTM:**
- Adicionar snippet do `<head>` na posição correta
- Adicionar `<noscript>` imediatamente após abrir `<body>`
- Substituir `GTM-XXXXXXX` pelo ID real

**Para Meta Pixel:**
- Adicionar código base no `<head>` (após GTM se houver)
- Substituir `PIXEL_ID_AQUI` pelo ID real
- Incluir `<noscript>` img tag

### 3.2 Verificar o script.js

O template já envia automaticamente:
- `fbq('track', 'Lead')` - Meta Pixel
- `dataLayer.push({ event: 'generate_lead' })` - GTM

Verificar se ambos estão presentes no `handleFormSubmit`. Se não estiverem, adicionar.

### 3.3 Página de Obrigado

Se existir uma página de obrigado:
- Adicionar os MESMOS snippets de GTM e Pixel (com os mesmos IDs)
- NÃO adicionar evento Lead aqui (já foi disparado no submit)
- Se quiser marcar conversão específica, adicionar:

```html
<script>
  // Meta Pixel - conversão na página de obrigado (OPCIONAL)
  if (typeof fbq === 'function') fbq('track', 'CompleteRegistration');

  // GTM dataLayer - conversao (OPCIONAL)
  window.dataLayer = window.dataLayer || [];
  dataLayer.push({ event: 'conversion_complete' });
</script>
```

### 3.4 Eventos Adicionais (se solicitados)

**Scroll Depth:**
- Se GTM: configurar no dashboard do GTM (Trigger tipo "Scroll Depth")
- Se sem GTM: adicionar IntersectionObserver no script.js:

```javascript
// Scroll depth tracking
function trackScrollDepth() {
  const thresholds = [25, 50, 75, 90];
  const tracked = new Set();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const pct = parseInt(entry.target.dataset.scrollDepth);
        if (!tracked.has(pct)) {
          tracked.add(pct);
          if (typeof fbq === 'function') {
            fbq('trackCustom', 'ScrollDepth', { percentage: pct });
          }
          if (typeof dataLayer !== 'undefined') {
            dataLayer.push({ event: 'scroll_depth', percentage: pct });
          }
        }
      }
    });
  });

  // Criar marcadores invisíveis no HTML
  thresholds.forEach(pct => {
    const marker = document.createElement('div');
    marker.dataset.scrollDepth = pct;
    marker.style.cssText = 'position:absolute;height:1px;width:1px;opacity:0;pointer-events:none;';
    marker.style.top = pct + '%';
    document.body.style.position = 'relative';
    document.body.appendChild(marker);
    observer.observe(marker);
  });
}
trackScrollDepth();
```

**Click em CTAs:**
- Se GTM: configurar no dashboard do GTM (Trigger tipo "Click" com filtro CSS)
- Se sem GTM: adicionar no script.js:

```javascript
// CTA click tracking
document.querySelectorAll('.btn, [data-track-click]').forEach(btn => {
  btn.addEventListener('click', () => {
    const label = btn.textContent.trim() || btn.getAttribute('aria-label') || 'CTA';
    if (typeof fbq === 'function') fbq('trackCustom', 'CTAClick', { label });
    if (typeof dataLayer !== 'undefined') dataLayer.push({ event: 'cta_click', click_label: label });
  });
});
```

---

## Etapa 4: Apresentar Resumo

Após implementar, informe ao usuário:

### O que foi instalado

```
TRACKING CONFIGURADO
====================
GTM: [Sim/Não] - Container: GTM-XXXXXXX
Meta Pixel: [Sim/Não] - ID: XXXXXXXXXXXXXXX

EVENTOS ATIVOS
==============
Página principal (index.html):
  - PageView (automático ao carregar)
  - Lead (automático no submit do form)
  [- Scroll Depth (se configurado)]
  [- CTA Click (se configurado)]

Página de obrigado (obrigado.html):
  - PageView (automático ao carregar)
  [- CompleteRegistration (se configurado)]

PRÓXIMOS PASSOS NO DASHBOARD
=============================
[Se GTM]: Configurar tags no dashboard do GTM (tagmanager.google.com)
  - GA4 Configuration tag
  - Google Ads Conversion tag (se usar Google Ads)
  - Publicar o container

[Se Meta]: Verificar eventos no Events Manager (business.facebook.com/events_manager)
  - Usar "Test Events" para validar
  - Configurar conversões nos conjuntos de anúncios
```

### Como testar

1. **Meta Pixel Helper** (extensão Chrome) - verificar se PageView e Lead disparam
2. **GTM Preview** - clicar "Preview" no dashboard GTM e navegar no site
3. **Events Manager > Test Events** - digitar URL do site e testar

---

## Etapa 5: Testar

Faça você mesmo as verificações possíveis:
- Abra o site localmente (use skill `local-server`)
- Verifique o console por erros
- Verifique se os snippets estão na posição correta no HTML
- Verifique se os IDs foram substituídos corretamente

**IMPORTANTE:** O teste completo (verificar se eventos chegam nos dashboards) só funciona com o site publicado. Informe ao usuário que após o `/publicar`, ele deve testar com as ferramentas acima.

---

## Ao Finalizar

1. Informe o que foi configurado (resumo acima)
2. Liste os próximos passos no dashboard (GTM/Meta)
3. Explique como testar
4. Sugira: "Use `/publicar` para colocar o site no ar e depois teste o tracking com as ferramentas indicadas."
5. **PARE COMPLETAMENTE E AGUARDE** o usuário digitar o próximo comando. NUNCA continue para outras etapas ou faça deploy automaticamente.
