---
name: optimize
description: Use when the user wants to optimize performance, improve PageSpeed score, check if the site is optimized, or before deploying to production. Covers loading (images, CSS, fonts, scripts, resource hints) AND runtime (animations, RAF, scroll).
---

# Skill: Optimize

Referência rápida para otimizações de performance.

**Metas:**
- PageSpeed: **90+** (Desktop e Mobile)
- Runtime: **60 FPS**
- CLS: **< 0.1**
- TBT: **< 200ms**
- LCP: **< 2.5s**

Para instruções detalhadas, use o workflow `/otimizar`.

---

# REGRA DE OURO

**Medir ANTES, medir DEPOIS. Se piorou, reverter.**

NUNCA aplique otimizações "porque são boas práticas". Cada mudança deve ser verificável. Se a nota caiu, a mudança foi errada.

---

# AUDITORIA PRIMEIRO (OBRIGATÓRIO)

**NUNCA corrija antes de auditar.** Leia TODOS os arquivos e liste TODOS os problemas.

## Checklist de Auditoria

Para CADA `<img>`:
- [ ] Usa CDN? width numérico? height numérico? loading correto?

Para CADA `<script>`:
- [ ] Tem defer? Pode ser removido?
- [ ] **Está linkado no HTML mas deveria ser Dynamic Import?**

Para CADA `import` estático no JS:
- [ ] Biblioteca pesada? (Three.js, GSAP, etc.) Usar Dynamic Import!

Para CADA biblioteca:
- [ ] CSS E JS podem ser removidos? (ambos, não só um)

Hero/LCP (Obrigatório Checar Primeiro!):
- [ ] O hero *DEVE* estar visível no first paint. Ele usa opacity:0 inicial? (Se sim, reprove imediatamente e reverta).
- [ ] Ele usa data-aos ou transform no elemento pai/hero? (Se sim, reprove e reverta).
- [ ] Possui animação de entrada que bloqueia visualização imediata da headline ou C2A? (Se sim, reverta).
- [ ] Hero container tem min-height fixo estruturado em CSS crítico?

Fonts:
- [ ] Quantos weights? (max 3) display=swap na URL?
- [ ] preconnect para fonts.googleapis.com e fonts.gstatic.com?

AOS:
- [ ] `disableMutationObserver: true`? `once: true`?

Runtime (se houver animações JS):
- [ ] Quantos RAF loops? (deve ser 1) Throttle no scroll?

Three.js (se houver):
- [ ] GLB > 500KB? Usa Draco? Luzes? (max 3)
- [ ] Usa import estático? (ERRADO - usar Dynamic Import)

**Apresente relatório completo antes de corrigir.**

---

# OTIMIZAÇÕES SEGURAS (SEMPRE aplicar)

Estas mudanças SEMPRE melhoram ou são neutras. Nunca pioram a nota.

## 1. Imagens

```html
<!-- ERRADO -->
<img src="..." width="600" height="auto">

<!-- CORRETO -->
<img
  src="/.netlify/images?url=/images/foto.jpg&w=600&q=80"
  width="600"
  height="400"
  loading="lazy"
  alt="Descrição"
>
```

- [ ] Netlify CDN com `q=80`
- [ ] **width + height NUMÉRICOS** (NUNCA "auto" ou "100%")
- [ ] Hero: `loading="eager"` + `fetchpriority="high"`
- [ ] Demais: `loading="lazy"`

## 2. Hero (LCP) - CRÍTICO E INEGOCIÁVEL

- [ ] **SEM NENHUMA animação de ENTRADA** (fade, slide, scale) que obstrua o texto no segundo zero.
- [ ] **NÃO PERMITA `opacity: 0` inicial sob nenhuma hipótese no Hero.**
- [ ] **SEM `data-aos`** em nenhum elemento acima da primeira dobra (Hero).
- [ ] **SEM `transform` inicial** (scale, translate) nos botões primários do Hero.
- [ ] Texto visível INTEGRALMENTE no PRIMEIRO frame de renderização.
- [ ] Container com min-height fixo absoluto no CSS.

```css
/* ABSOLUTAMENTE ERRADO - Destrói o LCP e aumenta o CLS */
.hero-title, .hero-btn {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInOutBlur 1s ease forwards;
}

/* CORRETO - Visível cravado no primeiro frame */
.hero-title, .hero-btn {
  opacity: 1;
  transform: none;
}
```

## 3. AOS - Configuração Correta

```javascript
// CORRETO
AOS.init({
  duration: 800,
  once: true,
  offset: 50,
  easing: 'ease-out-cubic',
  disableMutationObserver: true
});
```

**Regras:**
- [ ] `disableMutationObserver: true` SEMPRE (previne CLS no body)
- [ ] `once: true` SEMPRE (anima apenas uma vez)
- [ ] Inicializar no DOMContentLoaded (NÃO adiar com Interaction Trigger)

## 4. Resource Hints

```html
<head>
  <!-- Preconnect para Google Fonts (OBRIGATÓRIO) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- DNS Prefetch para terceiros -->
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <link rel="dns-prefetch" href="//connect.facebook.net">

  <!-- Preload da imagem do hero (se houver) -->
  <link rel="preload" href="/.netlify/images?url=/images/hero.jpg&w=1200&q=80" as="image">
</head>
```

## 5. Fontes

A configuração padrão do template JÁ é ótima:

```html
<!-- CORRETO - Manter assim -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Font:wght@400;700&display=swap" rel="stylesheet">
```

- [ ] `preconnect` para ambos os domínios
- [ ] `display=swap` na URL
- [ ] **Max 2-3 weights** (cada weight extra = ~20-50KB)
- [ ] **NÃO tornar async** (ver seção NUNCA FAZER)

## 6. Scripts

```html
<script src="/script.js" defer></script>
```

- [ ] Scripts com `defer`
- [ ] Bibliotecas mínimas (jQuery -> Vanilla JS, Swiper -> CSS puro)
- [ ] **Módulos pesados NÃO linkados no HTML**

## 7. Vídeos

```html
<video poster="poster.jpg" preload="none">
  <source src="video.webm" type="video/webm">
</video>
```

## 8. Iframes

```html
<iframe src="..." loading="lazy"></iframe>
```

- [ ] `loading="lazy"`
- [ ] Facade pattern para YouTube

## 9. Acessibilidade

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# OTIMIZAÇÕES CONDICIONAIS (aplicar com cuidado)

Estas mudanças PODEM melhorar, mas também PODEM piorar se feitas errado. Verificar resultado após cada uma.

## 10. Dynamic Import para Módulos Pesados

**Quando usar:** Three.js, GSAP pesado, partículas, qualquer módulo >100KB.

**Padrão: Lazy Load por Visibilidade**

```javascript
// Carrega módulo quando a seção entra no viewport
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

// USO:
lazyLoadModule('#secao-3d', async () => {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  initScene(THREE, GLTFLoader);
});

lazyLoadModule('#secao-particulas', async () => {
  const { initParticles } = await import('./particles.js');
  const isMobile = window.innerWidth < 768;
  initParticles({ count: isMobile ? 25 : 40 });
});
```

**Por que IntersectionObserver e não Interaction Trigger:**
- PageSpeed NÃO interage com a página. Interaction Trigger com fallback de 8s carrega recursos durante a janela de medição do PageSpeed, gerando pico de TBT.
- IntersectionObserver só carrega quando a seção está próxima do viewport. Se a seção está abaixo do fold, não carrega durante o teste.
- Para o usuário real, carrega naturalmente ao scrollar.

### Script no Caminho Crítico (ARMADILHA)

```html
<!-- ERRADO - módulo pesado está no HTML = caminho crítico -->
<script src="/script.js" defer></script>
<script src="/module-3d.js" defer></script>  <!-- PROBLEMA! -->

<!-- CORRETO - módulo pesado SÓ carrega via Dynamic Import -->
<script src="/script.js" defer></script>
<!-- Nenhuma referência ao módulo pesado aqui -->
```

### Falso Deferimento (ARMADILHA)

```javascript
// ERRADO - import estático SEMPRE baixa imediatamente
import * as THREE from 'three';
setTimeout(() => initScene(), 5000); // THREE já foi baixado!

// CORRETO - Dynamic Import só baixa quando chamado
async function initScene() {
  const THREE = await import('three');
}
```

## 11. Third-Party (Analytics, Pixels)

```javascript
// Carregar após idle do browser
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => { loadAnalytics(); loadPixels(); });
} else {
  setTimeout(() => { loadAnalytics(); loadPixels(); }, 3000);
}
```

- [ ] `requestIdleCallback` ou delay de 3s
- [ ] `dns-prefetch` para domínios terceiros

## 12. Critical CSS Inline + CSS Async

**Quando usar:** Quando o PageSpeed reporta "Eliminate render-blocking resources" no CSS.

**Pattern correto (2 passos OBRIGATÓRIOS):**

```html
<head>
  <!-- PASSO 1: CSS crítico inline (above-the-fold) -->
  <style>
    /* Incluir: variáveis CSS, reset, fontes, nav, hero, primeira seção */
    :root { --color-primary: #...; --color-bg: #...; }
    body { margin: 0; font-family: ...; background: var(--color-bg); color: ...; }
    .nav { ... }
    .hero { min-height: 100vh; ... }
    .hero-title { ... }
    .btn { ... }
    /* TUDO que aparece no primeiro viewport sem scroll */
  </style>

  <!-- PASSO 2: CSS completo async + fallback noscript -->
  <link rel="stylesheet" href="/style.css" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="/style.css"></noscript>
</head>
```

**REGRAS CRÍTICAS:**
- [ ] O inline DEVE cobrir TUDO visível no primeiro viewport (hero, nav, botões, tipografia, cores, backgrounds)
- [ ] Incluir `:root` com variáveis, reset básico, todas as classes do hero/nav
- [ ] O `<noscript>` fallback é OBRIGATÓRIO
- [ ] **Medir CLS após a mudança** - se CLS > 0.1, o inline está incompleto → adicionar mais estilos ou reverter
- [ ] NUNCA fazer CSS async SEM o inline crítico (ver seção NUNCA FAZER)

**Por que funciona:** O browser renderiza o above-fold usando o CSS inline (sem request extra). O CSS completo carrega async e aplica estilos das seções below-fold. Como o above-fold já tem todos os estilos inline, não há layout shift.

## 13. content-visibility (CUIDADO)

```css
/* SOMENTE em seções bem abaixo do fold com altura conhecida */
.secao-longe-do-fold {
  content-visibility: auto;
  contain-intrinsic-size: 0 600px; /* DEVE ser próximo da altura REAL */
}
```

**REGRAS:**
- [ ] NUNCA usar em seções perto do topo (hero, segunda seção)
- [ ] O `contain-intrinsic-size` DEVE ser próximo da altura real da seção
- [ ] Se não sabe a altura, NÃO USE (CLS garantido)
- [ ] Testar antes e depois - se CLS subiu, remover

## 14. Three.js (CRÍTICO)

```javascript
lazyLoadModule('#secao-3d', async () => {
  const THREE = await import('three');
  const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
  const { DRACOLoader } = await import('three/addons/loaders/DRACOLoader.js');

  initScene(THREE, GLTFLoader, DRACOLoader);
});

function initScene(THREE, GLTFLoader, DRACOLoader) {
  const isMobile = window.innerWidth < 768;

  const renderer = new THREE.WebGLRenderer({
    antialias: !isMobile,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);

  // Max 3 luzes!
}
```

**Checklist Three.js:**
- [ ] **Dynamic Import** (NUNCA import estático)
- [ ] **IntersectionObserver** para carregar quando visível
- [ ] **Módulo NÃO linkado no HTML**
- [ ] GLB com Draco (se > 500KB)
- [ ] Max 3 luzes
- [ ] Antialias OFF em mobile
- [ ] Pixel ratio 1 em mobile

---

# NUNCA FAZER (causa queda de nota)

## 1. NUNCA tornar CSS async SEM critical CSS inline

```html
<!-- PROIBIDO - página renderiza SEM estilo = CLS 0.3-0.7 -->
<link rel="stylesheet" href="/style.css" media="print" onload="this.media='all'">
<!-- Sem <style> inline = FOUC + CLS massivo -->

<!-- CORRETO opção A - CSS síncrono (padrão seguro) -->
<link rel="stylesheet" href="/style.css">

<!-- CORRETO opção B - Critical CSS inline + async (maior performance) -->
<style>/* CSS above-the-fold completo aqui */</style>
<link rel="stylesheet" href="/style.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/style.css"></noscript>
```

**Por que:** CSS async SEM critical inline faz a página renderizar sem nenhum estilo e re-renderizar quando o CSS carrega = CLS massivo. COM critical inline, o above-fold já tem estilos e não há shift. Ver seção 12 para o pattern correto.

## 2. NUNCA tornar Google Fonts async via media="print"

```html
<!-- PROIBIDO -->
<link href="https://fonts.googleapis.com/css2?..." rel="stylesheet" media="print" onload="this.media='all'">

<!-- CORRETO - manter síncrono com preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?...&display=swap" rel="stylesheet">
```

**Por que:** O CSS do Google Fonts é minúsculo (~500 bytes, só @font-face). Torná-lo async ATRASA o início do download das fontes e ANULA o preconnect. O `display=swap` na URL já garante que o texto aparece imediatamente.

## 3. NUNCA adiar AOS com Interaction Trigger

```javascript
// PROIBIDO - conteúdo fica invisível até interação
onFirstInteraction(() => {
  AOS.init({ once: true, disableMutationObserver: true });
});

// CORRETO - inicializar normalmente no DOMContentLoaded
AOS.init({
  once: true,
  disableMutationObserver: true
});
```

**Por que:** O CSS do AOS aplica `opacity: 0` nos elementos `[data-aos]` imediatamente. Se o JS só roda após interação, os elementos ficam INVISÍVEIS. Quando o AOS finalmente inicia, todos aparecem de uma vez = CLS massivo.

## 4. NUNCA usar `contain: layout paint` em seções com overflow

```css
/* PERIGOSO - pode clipar conteúdo que transborda */
.section { contain: layout paint; }

/* SÓ usar quando a seção tem altura/largura bem definidas e nenhum overflow */
```

**Por que:** `contain: paint` cria um novo contexto de pintura e CLIPA todo overflow. Elementos posicionados absolutamente, decorações que transbordam, e gradientes que saem da seção serão cortados.

## 5. NUNCA usar Interaction Trigger com fallback curto

```javascript
// PROIBIDO - 8 segundos cai na janela de medição do PageSpeed
setTimeout(() => {
  if (!interacted) { interacted = true; callbacks.forEach(cb => cb()); }
}, 8000);
```

**Por que:** PageSpeed Lighthouse mede por ~10-15 segundos e NÃO interage. Um fallback de 8s carrega recursos pesados DURANTE a medição, gerando pico de TBT que derruba a nota. Use IntersectionObserver em vez de timers.

---

# REGRAS DE CORREÇÃO

1. **Medir antes**: Anotar nota atual do PageSpeed antes de qualquer mudança
2. **Exaustivo**: Corrigir TODAS as imagens, não apenas algumas
3. **Completo**: Remover biblioteca = remover CSS + JS + código dependente
4. **Numérico**: width/height SEMPRE números (NUNCA "auto" ou "100%")
5. **Dynamic Import**: Bibliotecas pesadas (>100KB) com IntersectionObserver
6. **Manter funcionalidade**: NUNCA desabilitar recursos - otimizar para que funcionem
7. **Medir depois**: Comparar nota final com nota inicial. Se caiu, reverter.

---

# CHECKLIST RÁPIDO

## Seguro (SEMPRE aplicar)
- [ ] Hero: sem opacity:0, sem data-aos, sem animação entrada, min-height fixo
- [ ] Imagens: CDN, width/height numérico, loading correto
- [ ] AOS: `disableMutationObserver: true`, `once: true`, init no DOMContentLoaded
- [ ] Fontes: preconnect + display=swap (manter síncrono)
- [ ] Scripts: defer
- [ ] Resource hints: preconnect, dns-prefetch, preload hero
- [ ] Reduced motion media query

## Condicional (verificar resultado)
- [ ] Critical CSS inline + CSS async (cobrir TODO o above-fold no inline)
- [ ] Scripts pesados: Dynamic Import + IntersectionObserver
- [ ] Third-party: requestIdleCallback
- [ ] content-visibility em seções BEM abaixo do fold (altura conhecida)

## NUNCA fazer
- [ ] CSS async SEM critical CSS inline
- [ ] Fontes async (media="print")
- [ ] AOS via Interaction Trigger
- [ ] contain: layout paint em seções com overflow
- [ ] Fallback timer < 20 segundos para recursos pesados

---

# ERROS COMUNS DO AGENTE

1. **CSS async sem inline**: Tornar stylesheet async SEM critical CSS inline = CLS massivo
2. **Fontes async**: Usar media="print" em Google Fonts = atrasa fontes, anula preconnect
3. **AOS adiado**: Defer AOS com Interaction Trigger = conteúdo invisível + CLS
4. **Import estático**: Usar `import THREE from 'three'` no topo (SEMPRE use Dynamic Import)
5. **Script no HTML**: Linkar módulo pesado no HTML além do Dynamic Import
6. **Corrigir parcialmente**: Verificar apenas algumas imagens, não todas
7. **Remover incompleto**: Remover JS mas esquecer CSS da biblioteca
8. **height="auto"**: Usar "auto" mesmo documentação dizendo para não usar
9. **Pular auditoria**: Ir direto para correções sem listar problemas
10. **Não medir**: Não comparar nota antes/depois

---

# PROBLEMAS COMUNS

- CLS 0.7+ no body -> AOS sem `disableMutationObserver: true`
- CLS alto -> height="auto" em imagens -> height NUMÉRICO
- CLS no hero -> Fontes causando reflow -> display=swap já resolve (NÃO tornar async)
- CLS no hero -> Container sem altura fixa -> min-height no container
- CLS botões -> transform/opacity inicial no hero -> Remover animação de entrada
- LCP alto -> opacity:0 no hero -> Hero visível no primeiro frame
- LCP alto -> imagem sem preload -> preload hero + CDN
- TBT alto -> import estático de libs pesadas -> Dynamic Import + IntersectionObserver
- Script crítico -> `<script src="modulo.js">` no HTML -> Remover do HTML, usar Dynamic Import
- FCP alto -> Muitos weights de fonte -> Reduzir para 2-3 weights
- Nota cai após otimizar -> CSS async sem critical inline OU fontes async -> Reverter ou completar o inline

---

# TESTANDO

1. **PageSpeed**: https://pagespeed.web.dev/ (testar Desktop E Mobile)
2. **DevTools Performance**: gravar 5s scroll
3. **DevTools Network**: verificar se Dynamic Imports só aparecem após scroll
4. **Meta**: 90+ Score Desktop E Mobile, 60 FPS
5. **Comparar**: nota ANTES vs nota DEPOIS de cada mudança
