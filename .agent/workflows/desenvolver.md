---
description: desenvolver
---

# Instruções

Você vai construir a página completa seguindo a especificação do `layout.md`. Seu trabalho é EXECUTAR fielmente o que foi planejado, sem simplificar ou omitir nada.

## Etapa 1: Carregar a Especificação

### Identificar a Pasta da Página

Identifique em qual pasta da página você está trabalhando. Os arquivos devem estar dentro da pasta criada pelo `/gerar-copy`.

**IMPORTANTE:** Pastas com prefixo `_backup_` são versões antigas - IGNORE-AS.

### Arquivos Necessários

1. Leia o arquivo `layout.md` na pasta da página
2. Leia o `index.html` e `style.css` atuais (que já têm o hero + primeira seção aprovados)

Se o `layout.md` não existir, informe ao usuário que ele precisa rodar `/gerar-layout` primeiro.

## Etapa 2: Planejar a Execução

Antes de começar a codar, liste para o usuário:

1. Quantas seções serão construídas
2. Bibliotecas externas necessárias
3. Ordem de execução

## Etapa 3: Construir Seção por Seção

### Processo para cada seção

1. **Releia a especificação da seção** no `layout.md`
2. **Implemente o HTML** seguindo a estrutura especificada
3. **Implemente o CSS** com TODOS os valores especificados
4. **Implemente interatividade** (hover, animações, etc.)
5. **Teste visualmente** antes de passar para a próxima

### Regras de Implementação

#### HTML
- Use semântica correta (section, article, figure, etc.)
- Adicione `data-aos` onde especificado
- Use classes descritivas e consistentes
- Inclua todos os atributos de acessibilidade

#### CSS
- Siga EXATAMENTE os valores do `layout.md`
- Não arredonde ou simplifique valores
- Implemente TODOS os estados (hover, active, focus)
- Implemente TODAS as animações especificadas
- Responsividade completa (mobile-first)

#### JavaScript e Efeitos Avançados (OBRIGATÓRIO)
- **Zero Simplificação:** Se o `layout.md` pedir WebGL, Shaders, GSAP ScrollTriggers ou Spline, você TEM que os implementar usando as bibliotecas corretas.
- Adicione as lógicas no `script.js` principal, criando módulos de ES6 conforme necessário para manter a sanidade do código.
- **Micro-interações:** Toda especificação de hover magnético, cursores alterados e parallax scroll MUST be strictly coded.
- Evite bibliotecas pesadas quando possível escrevendo lógicas em vanilla JS usando DOM puro.

### O que NUNCA fazer (PROIBIÇÕES CRÍTICAS DE DESIGN)

- **NUNCA simplificar um efeito** porque "é complexo", "pesado" ou exige muitas linhas de CSS/JS. Se pedir algo elaborado como um Canvas 3D ou WebGL, você deve invariavelmente programar essa complexidade adotando as práticas de `IntersectionObserver` listadas abaixo, e não cortá-la do design. Performance não significa design pobre e estático.
- **NUNCA pular um Constraint Avançado.** Se o layout especifica uma estrutura complexa (qualquer que seja o estilo), você **deve** reproduzir essas lógicas fielmente através do código em CSS ou JS, não improvisar soluções genéricas.
- NUNCA omitir uma animação de GSAP/ScrollTrigger sob a desculpa de performance (A regra é: carregue tudo lazy via `import()`, mas NÃO REMOVA o efeito visual).
- NUNCA pular a responsividade de grids assimétricos (Crie os media queries necessários para que os bento-boxes não quebrem as margins em mobile).
- NUNCA ignorar estados de hover/focus iterativos e magnéticos.
- NUNCA remover camadas de textura, ruído CSS, ou sobreposições exigidas pelas- NUNCA usar `opacity: 0` ou `transform` inicial (ou data-aos) em elementos do Hero para evitar CLS. **CONTUDO, É OBRIGATÓRIO QUE O HERO SEJA COMPLETAMENTE ANIMADO** através de JavaScript (Three.js, Particles, Canvas, GSAP) rodando loops contínuos ou ambientais iniciados no load. Entregar um Hero estático resultará em falha crítica.
- NUNCA gerar imagens usando IA (são quadradas e inadequadas). Se o layout enviou Links de Imagens Reais (Unsplash, etc), você **OBRIGATORIAMENTE DEVE** usar o terminal para baixar as imagens em alta resolução para a pasta `/images/` **NA RAIZ DO PROJETO** (onde fica o `netlify.toml`), NUNCA dentro da pasta da página. Crie a pasta a partir da raiz: `mkdir -p images` (estando na raiz) e baixe com `curl -L "URL_FORNECIDA" > images/foto1.jpg`. **APÓS BAIXAR**, aplique as imagens no código através da CDN local do Netlify: `/.netlify/images?url=/images/foto1.jpg&w=1200&q=80`. NUNCA use URLs externas diretas no `src` das imagens. NUNCA crie a pasta `images/` dentro da pasta da página (ex: `minha-pagina/images/`) — o Netlify CDN só encontra imagens na raiz `/images/`.

### Se algo não estiver claro

Se alguma especificação estiver ambígua:
1. Releia o contexto ao redor
2. Considere o design aprovado como referência
3. Se ainda estiver ambíguo, PERGUNTE ao usuário antes de assumir

## Etapa 4: Checklist de Finalização (OBRIGATÓRIO)

**A tarefa NÃO está completa até passar por TODOS os itens abaixo.**

### Verificação de Completude
- [ ] Todas as seções do `layout.md` foram implementadas?
- [ ] Nenhuma seção foi simplificada ou omitida?
- [ ] Todos os elementos decorativos estão presentes?

### Fidelidade Criativa
- [ ] Cada seção implementa o arquétipo especificado no layout.md?
- [ ] Cada seção aplica os constraints declarados?
- [ ] O font pairing foi mantido consistente em toda a página?
- [ ] Nenhum padrão genérico foi introduzido (3 cards, grid simétrico)?

### Performance (Crítico - Bloqueante)
- [ ] Todas imagens usando Netlify CDN estruturadas (`/.netlify/images?url=URL_UNSPLASH_OU_LOCAL&w=1200&q=80`)
- [ ] Imagens com width/height numéricos definidos e object-fit coerente
- [ ] Hero SEM animação de entrada que ESCONDA conteúdo (proibido: opacity:0, fade-in, data-aos). O conteúdo deve estar visivelmente presente desde T=0. **MAS o Hero DEVE ter animações ambientais e contínuas** (loops CSS, Canvas, partículas, WebGL) que já estejam rodando no primeiro frame — um Hero estático e morto é inaceitável.
- [ ] Hero com foco explícito carregando com `loading="eager"`, o resto todo com `loading="lazy"`
- [ ] Scripts pesados obrigatórios (Three.js, GSAP webGL effects) codados COM Dynamic Import + IntersectionObserver. NUNCA coloque tags script bloqueantes no `<head>`.
- [ ] AOS inicializado com `disableMutationObserver: true` no index.js principal

### Acessibilidade
- [ ] Todos os links/botões com foco visível
- [ ] Imagens com alt text descritivo
- [ ] Contraste de cores adequado
- [ ] Hierarquia de headings correta (h1 → h2 → h3)
- [ ] Formulário com labels e atributos corretos

### Responsividade
- [ ] Testado em 375px (mobile)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1440px (desktop)
- [ ] Nenhum overflow horizontal em nenhuma resolução
- [ ] Textos legíveis em todas as resoluções

### Animações e Interatividade
- [ ] Smooth scroll implementado (Lenis ou equivalente) com inércia e fluidez
- [ ] Todas as seções com animações de entrada e saída ao scroll
- [ ] Efeitos de scroll avançados implementados conforme layout.md (parallax, revelações, transformações)
- [ ] Todos os elementos interativos com hover (desktop) e touch (mobile) funcionando
- [ ] Transições suaves em todos os estados
- [ ] Todas as animações especificadas no layout.md implementadas sem simplificação

### Validação Final
Antes de informar que está pronto:
1. **Abra o DevTools** (F12)
2. **Verifique o Console** - não deve ter erros em vermelho
3. **Verifique o Network** - não deve ter 404
4. **Teste o formulário** - deve estar configurado corretamente

## Etapa 5: Apresentar ao Usuário

Após completar toda a checklist acima, prossiga para "Ao Finalizar".

## Bibliotecas Permitidas (CDN)

Se a especificação pedir, você pode usar via CDN:

```html
<!-- Ícones (leve, pode ser CDN direto) -->
<script src="https://unpkg.com/@phosphor-icons/web" defer></script>
```

**Bibliotecas pesadas (GSAP, Three.js, partículas):** NUNCA adicionar via `<script>` no HTML. Usar Dynamic Import + IntersectionObserver no `script.js`:

```javascript
// Carrega GSAP apenas quando a seção que precisa fica visível
function lazyLoadModule(selector, loadFn) {
  const el = document.querySelector(selector);
  if (!el) return;
  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { obs.disconnect(); loadFn(); }
  }, { rootMargin: '200px' });
  obs.observe(el);
}

// GSAP + ScrollTrigger
lazyLoadModule('#secao-animada', async () => {
  const { gsap } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm');
  const { ScrollTrigger } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger/+esm');
  gsap.registerPlugin(ScrollTrigger);
  // ... usar gsap aqui
});

// Three.js
lazyLoadModule('#secao-3d', async () => {
  const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.155.0/+esm');
  // ... usar THREE aqui
});
```

Adicione apenas o que for REALMENTE necessário para a especificação.

## Lembrete Final

Você tem uma especificação detalhada em mãos. Seu trabalho é EXECUTAR com precisão, não reinventar ou simplificar. Se a especificação pede um efeito de partículas com three.js, implemente. Se pede um carrossel diagonal que ao clicar explode, implemente. A qualidade da página final depende da sua fidelidade à especificação.

---

## Ao Finalizar

Após construir todas as seções e passar pela checklist:

1. Informe que a página está pronta
2. Liste as seções construídas e destaque funcionalidades especiais
3. Forneça o link (use a skill `local-server` para obter a URL correta)
4. Pergunte se quer ajustar algo
5. Sugira próximos passos: "Quando estiver satisfeito, use `/publicar` para deploy ou `/otimizar` para melhorar performance."

---

## 🔴 GATILHO DE PARADA OBRIGATÓRIA (SOCRATIC GATE) 🔴

**VOCÊ ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. É **ESTRITAMENTE PROIBIDO** rodar os workflows `/otimizar` ou `/publicar` automaticamente.
2. Você DEVE devolver o controle ao usuário IMEDIATAMENTE após informar que a página está pronta.
3. Mesmo que o usuário diga "Show", "Aprovado" ou "Pode subir", você **NÃO DEVE** fazer deploy. Apenas agradeça e **EXIJA** que ele digite explicitamente os comandos de publicação ou otimização.
4. **PARE A GERAÇÃO DE TEXTO AQUI.**