---
description: otimizar
---

# Workflow: Otimizar Performance

Meta: **Score 90+ no PageSpeed** (Desktop E Mobile) e **60 FPS constantes**.

---

# FASE 0: MEDIR ANTES (OBRIGATÓRIO)

**NUNCA pule esta fase.** Sem a nota inicial, não dá para saber se as mudanças ajudaram ou prejudicaram.

## Medição automática com Lighthouse

Garanta que o servidor local está rodando (skill `local-server`). Depois meça com `npx lighthouse` (funciona sem instalação):

```bash
# Desktop
npx lighthouse http://localhost:8888/CAMINHO --chrome-flags="--headless=new" --preset=desktop --output=json --output-path=./lighthouse-desktop-antes.json --quiet

# Mobile (padrao do Lighthouse)
npx lighthouse http://localhost:8888/CAMINHO --chrome-flags="--headless=new" --output=json --output-path=./lighthouse-mobile-antes.json --quiet
```

Extraia e apresente os scores:

```bash
node -e "
const d=require('./lighthouse-desktop-antes.json');
const m=require('./lighthouse-mobile-antes.json');
const fmt=(r,label)=>{const c=r.categories.performance.score*100;const a=r.audits;return label+': '+c.toFixed(0)+' | LCP: '+a['largest-contentful-paint'].displayValue+' | TBT: '+a['total-blocking-time'].displayValue+' | CLS: '+a['cumulative-layout-shift'].displayValue+' | FCP: '+a['first-contentful-paint'].displayValue};
console.log(fmt(d,'DESKTOP'));
console.log(fmt(m,'MOBILE'));
"
```

Apresente os resultados ao usuário antes de prosseguir.

Se o site já está publicado, substitua `http://localhost:8888/CAMINHO` pela URL de produção.

---

# FASE 1: AUDITORIA (OBRIGATÓRIA)

**NUNCA corrija antes de completar a auditoria.**

## Passo 1: Ler Todos os Arquivos

Leia COMPLETAMENTE: `index.html`, `style.css`, `script.js` e qualquer CSS/JS linkado.

## Passo 2: Identificar TODOS os Problemas

### 2.1 Imagens
Para CADA `<img>`: Netlify CDN? width/height numéricos? loading correto (eager hero, lazy resto)?

### 2.2 Hero/LCP (CRÍTICO E INEGOCIÁVEL)
O Hero tem opacidade zero inicial? (Se sim, pare agora e recomende reverter isso). Ele usa data-aos nos títulos da primeira dobra? Possui animação de entrada vertical pesada escondendo o texto real? O container principal de destaque carece de um min-height estático no header?

### 2.3 AOS
`disableMutationObserver: true`? `once: true`? Inicializa no DOMContentLoaded?

### 2.4 Fontes
Quantos weights? (max 3) `display=swap` na URL? `preconnect` para ambos domínios?

### 2.5 Resource Hints
Falta preconnect fonts? dns-prefetch analytics? preload hero image?

### 2.6 Scripts
Para CADA `<script>`: tem defer? Pode ser removido?
Para CADA módulo pesado: Usa import estático? (DEVE ser Dynamic Import) Está linkado no HTML? (NÃO deveria)

### 2.7 Third-Party
Analytics/pixels carregam imediatamente? Deveriam usar requestIdleCallback.

### 2.8 JS Runtime (se houver animações JS)
Múltiplos RAF loops? Scroll sem throttle? Não pausa off-screen/tab inativa?

### 2.9 Videos/Iframes
Videos sem poster/preload="none"? Iframes sem loading="lazy"?

## Passo 3: Classificar e Apresentar

Classifique cada problema:
- **SEGURO** = correção que SEMPRE melhora (imagens, hero, AOS config, resource hints)
- **CONDICIONAL** = correção que PODE melhorar se feita corretamente (Dynamic Import, content-visibility)

**IMPORTANTE: Verificar se alguma "otimização" perigosa JÁ foi aplicada:**
- CSS com `media="print" onload` SEM `<style>` inline crítico? -> REVERTER para síncrono OU adicionar critical CSS inline
- Google Fonts com `media="print" onload`? -> REVERTER para síncrono com preconnect
- AOS inicializado via Interaction Trigger? -> REVERTER para init normal no DOMContentLoaded
- `contain: layout paint` em seções com overflow? -> REMOVER

Apresente o relatório completo.

**Aguarde aprovação antes de corrigir.**

---

# FASE 2: CORREÇÕES SEGURAS

Estas mudanças SEMPRE melhoram a nota. Aplicar TODAS.

## Regras
1. Corrigir TODAS as imagens, não algumas
2. Remover biblioteca = CSS + JS + código + classes HTML
3. width/height = NÚMEROS (nunca "auto", "100%")
4. **NUNCA desabilitar recursos - otimizar para que funcionem**

---

### 1. Imagens

```html
<img src="/.netlify/images?url=/images/foto.jpg&w=600&q=80" width="600" height="400" loading="lazy" alt="Descricao">
<!-- Hero: loading="eager" fetchpriority="high" -->
```

### 2. Hero (LCP) E ZERO-CLS

Remover DEFINITIVAMENTE DO HERO:
- Qualquer `opacity: 0` estrutural atado ao first contentful paint.
- Qualquer tag estilo `data-aos` ou keyframes de animações de delay.
- Quaisquer transições de `transform` no título primário que causem reflow.

**O Texto e os CTAs cruciais devem estar 100% estáticos e visíveis no milissegundo 0 (primeiro frame).** As animações devem ser aplicadas apenas no rolamento e nos elementos below-the-fold ou efeitos independentes após load/idle.

### 3. AOS

```javascript
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  easing: 'ease-out-cubic',
  disableMutationObserver: true
});
```

Inicializar no DOMContentLoaded. NUNCA adiar com Interaction Trigger.

### 4. Resource Hints

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="//www.google-analytics.com">
<link rel="dns-prefetch" href="//connect.facebook.net">
<link rel="preload" href="/.netlify/images?url=/images/hero.jpg&w=1200&q=80" as="image">
```

### 5. Fontes

Manter síncronas com `preconnect` + `display=swap`. Reduzir para max 2-3 weights.

```html
<!-- CORRETO - manter assim -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Font:wght@400;700&display=swap" rel="stylesheet">
```

### 6. Scripts

```html
<script src="/script.js" defer></script>
```

Módulos pesados NÃO no HTML - só Dynamic Import.

### 7. Videos/Iframes

```html
<video poster="poster.jpg" preload="none">...</video>
<iframe src="..." loading="lazy"></iframe>
```

### 8. Acessibilidade

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# FASE 3: CORREÇÕES CONDICIONAIS

Estas mudanças PODEM ajudar, mas exigem cuidado. Aplicar uma de cada vez e verificar resultado.

### 9. Dynamic Import + IntersectionObserver (módulos pesados)

```javascript
function lazyLoadModule(selectorSecao, loadFn) {
  const section = document.querySelector(selectorSecao);
  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      observer.disconnect();
      loadFn();
    }
  }, { rootMargin: '200px' });

  observer.observe(section);
}

// Three.js
lazyLoadModule('#secao-3d', async () => {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const { DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js');
  initScene(THREE, GLTFLoader, DRACOLoader);
});

// Partículas
lazyLoadModule('#secao-particulas', async () => {
  const { initParticles } = await import('./particles.js');
  const isMobile = window.innerWidth < 768;
  initParticles({ count: isMobile ? 25 : 40 });
});
```

**NUNCA usar Interaction Trigger com fallback de 8s.** O PageSpeed não interage e o fallback carrega recursos durante a janela de medição.

### 10. Third-Party (Analytics, Pixels)

```javascript
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => { loadAnalytics(); loadPixels(); });
} else {
  setTimeout(() => { loadAnalytics(); loadPixels(); }, 3000);
}
```

### 11. Critical CSS Inline + CSS Async

Extrair CSS above-the-fold, inline no `<head>`, e carregar `style.css` async:

```html
<head>
  <!-- CSS critico inline (above-the-fold) -->
  <style>
    /* :root variáveis, reset, nav, hero, primeira seção, botões */
    /* TUDO que aparece no primeiro viewport sem scroll */
  </style>

  <!-- CSS completo async + fallback -->
  <link rel="stylesheet" href="/style.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/style.css"></noscript>
</head>
```

**Como extrair o CSS crítico:**
1. Identificar quais elementos são visíveis no primeiro viewport (hero, nav, botões, tipografia)
2. Copiar TODAS as regras CSS que afetam esses elementos (incluindo `:root`, reset, fontes)
3. Incluir media queries relevantes para esses elementos
4. Testar: abrir a página e verificar se o above-fold renderiza idêntico com e sem o style.css

**Verificação OBRIGATÓRIA após aplicar:**
- [ ] CLS permanece < 0.1 (se subiu, o inline está incompleto)
- [ ] Above-fold renderiza idêntico com CSS inline sozinho
- [ ] `<noscript>` fallback presente
- [ ] NUNCA fazer CSS async SEM o inline crítico

### 12. content-visibility (CUIDADO)

```css
/* SOMENTE em secoes bem abaixo do fold */
.secao-longe-do-fold {
  content-visibility: auto;
  contain-intrinsic-size: 0 600px; /* DEVE ser proximo da altura REAL */
}
```

- NUNCA nas primeiras seções
- DEVE saber a altura real da seção
- Se não sabe a altura, NÃO USE

### 12. JS Runtime (se houver animações)

```javascript
// Throttle scroll
let scheduled = false;
addEventListener('scroll', () => {
  if (!scheduled) {
    requestAnimationFrame(() => { update(); scheduled = false; });
    scheduled = true;
  }
}, { passive: true });
```

- Único RAF loop
- IntersectionObserver para pausar off-screen
- visibilitychange para pausar tab inativa

---

# FASE 4: VALIDAÇÃO

## Passo 1: Verificar cada correção

Confirmar que cada problema da auditoria foi corrigido.
Relatório: CORRIGIDO / NÃO CORRIGIDO / NÃO APLICÁVEL

## Passo 2: Verificar no DevTools

**Network Tab:** Módulos pesados NÃO aparecem no carregamento inicial, SÓ após scroll até a seção.
**Console:** Zero erros.

## Passo 3: Medir DEPOIS

Rodar Lighthouse novamente (mesma URL, mesmo servidor):

```bash
# Desktop
npx lighthouse http://localhost:8888/CAMINHO --chrome-flags="--headless=new" --preset=desktop --output=json --output-path=./lighthouse-desktop-depois.json --quiet

# Mobile
npx lighthouse http://localhost:8888/CAMINHO --chrome-flags="--headless=new" --output=json --output-path=./lighthouse-mobile-depois.json --quiet
```

Comparar ANTES vs DEPOIS:

```bash
node -e "
const da=require('./lighthouse-desktop-antes.json');
const dd=require('./lighthouse-desktop-depois.json');
const ma=require('./lighthouse-mobile-antes.json');
const md=require('./lighthouse-mobile-depois.json');
const g=(r,k)=>r.audits[k].displayValue;
const s=(r)=>(r.categories.performance.score*100).toFixed(0);
console.log('            | ANTES | DEPOIS | DIFF');
console.log('Desktop     |  '+s(da)+'   |  '+s(dd)+'    | '+(s(dd)-s(da)>0?'+':'')+(s(dd)-s(da)));
console.log('Mobile      |  '+s(ma)+'   |  '+s(md)+'    | '+(s(md)-s(ma)>0?'+':'')+(s(md)-s(ma)));
console.log('LCP Desktop | '+g(da,'largest-contentful-paint')+' | '+g(dd,'largest-contentful-paint'));
console.log('LCP Mobile  | '+g(ma,'largest-contentful-paint')+' | '+g(md,'largest-contentful-paint'));
console.log('CLS Desktop | '+g(da,'cumulative-layout-shift')+' | '+g(dd,'cumulative-layout-shift'));
console.log('CLS Mobile  | '+g(ma,'cumulative-layout-shift')+' | '+g(md,'cumulative-layout-shift'));
console.log('TBT Desktop | '+g(da,'total-blocking-time')+' | '+g(dd,'total-blocking-time'));
console.log('TBT Mobile  | '+g(ma,'total-blocking-time')+' | '+g(md,'total-blocking-time'));
"
```

**Se a nota CAIU:** Identificar qual mudança causou a queda e reverter. As correções SEGURAS nunca causam queda - o problema está nas CONDICIONAIS ou em algo que entrou na lista NUNCA FAZER.

## Passo 4: Limpar arquivos temporários

```bash
rm -f lighthouse-desktop-antes.json lighthouse-desktop-depois.json lighthouse-mobile-antes.json lighthouse-mobile-depois.json
```

**PARAR E AGUARDAR. Apresentar tabela comparativa ao usuário.**

---

# REGRAS

## Processo
- **NUNCA** corrija sem auditoria completa
- **NUNCA** corrija parcialmente (todas as imagens, não algumas)
- **NUNCA** desabilite recursos - otimize para que funcionem
- **NUNCA** deploy sem comparar nota antes/depois
- **NUNCA** prossiga automaticamente - aguarde comando explícito

## Técnico
- **NUNCA** use import estático para bibliotecas pesadas
- **NUNCA** linke módulos pesados no HTML
- **NUNCA** torne fontes async (`media="print" onload` atrasa download, anula preconnect. `display=swap` já resolve)
- **NUNCA** adie AOS com Interaction Trigger (CSS aplica opacity:0 imediatamente, JS só roda após interação = conteúdo invisível)
- **NUNCA** use Interaction Trigger com fallback < 20s (recursos carregam durante janela do PageSpeed = TBT)
- **NUNCA** aplique `contain: layout paint` em todas as seções (clipa overflow, quebra layouts criativos)
- **NUNCA** torne CSS async SEM critical CSS inline (`media="print" onload` sem `<style>` inline causa CLS 0.3-0.7. COM critical inline é válido, ver FASE 3 item 11)

**Se alguma dessas já foi aplicada, REVERTER como parte da otimização.**
