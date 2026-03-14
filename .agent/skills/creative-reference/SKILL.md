---
description: creative-reference
---

# Referência Criativa Extensiva

Este arquivo contém TODAS as possibilidades de layout, composição, movimento e interação da web moderna. Use como catálogo para variar seus designs.

---

## ARQUÉTIPOS DE COMPOSIÇÃO

### Baseados em Grade e Densidade Acrobática
- **Bento Box Dinâmico** → Células assimétricas que se rearranjam no resize, quebrando o scroll padrão.
- **Broken Grid / Brutalismo** → Elementos que intencionalmente se atropelam e quebram a grade (Textos sobre fotos, overlays sujos).
- **Responsive Typography Grid** → Onde o tamanho massivo da Tipografia decta o fluxo de leitura, forçando as margens ao limite.
- **Micro-Grid Fragmentado** → Layout dividido em dezenas de colunas minúsculas visíveis via bordas 1px, preenchidas caoticamente.
- **Overlapping Floating Grid** → Grids soltos que navegam na tela independentemente do scroll principal.
- **Golden Ratio Escalável** → Proporção áurea matemática que dá zoom "infinito" ao invés de descer a página na vertical.
- **Modular Fluid Compartments** → Blocos de interface que crescem (flex-grow) empurrando os outros quando o cursor passa por eles.
- **Editorial Asymmetry** → Revistas high-end onde grandes vazios horizontais esmagam textos finos contra a borda apostada.
- **Z-Axis Grid Layout** → Grid não mais alinhado horizontalmente, mas organizado visualmente simulando profundidade 3D pesada via transform.
- **Swiss Poster Grid** → Organização matemática restrita imitando cartazes suíços de 1960 com alinhamentos matematicamente calculados ao limite.
- **Chaotic Stacking** → Container central onde todos os elementos nascem empilhados como z-indexes sobrepostos jogados na mesa.
- **Collapsing Margin Box** → Containers que "respiram" e diminuem a própria largura quando sofrem over-scroll.
- **Stark Geometric Framing** → Caixas retangulares rigorosas com padding zero e borders agressivas segurando mídia pesada.
- **Typographic Boundary Grid** → A própria tipografia se torna a "linha" geométrica do Grid dividindo as colunas usando CSS writing-modes.
- **Off-Kilter Alignment** → Uma quebra intencional onde o container principal do side A desafia propositalmente a baseline do side B criando tensão de escorregamento.

### Baseados em Camadas (Depth & Layers)
- **Glassmorphism Imersivo** → Múltiplas camadas translúcidas iterando com blur backdrop dinâmico, revelando Shapes de CSS abaixo.
- **Parallax Layers em Canvas** → Camadas que processam scroll parallax não no DOM nativo, mas pintadas em `<canvas>` pra rodar a 120fps.
- **Z-Index Traps** → Elementos revelados agressivamente "atrás" do container que rola por cima, usando clip-paths em scroll.
- **Depth Map Displacement** → Shaders WebGL que distorcem as camadas com base numa imagem escondida de mapa de profundidade, gerando pseudo-3D falso ao mover o mouse.
- **Framed Abstraction** → O site inteiro rodando "dentro" de uma margem preta global sólida, onde as camadas fluem como se fossem um visor.
- **Stacked Cards Friction** → Cards em posições fixed absolutas que são engolidos (deck stack) uns pelos outros sob grande fricção (ease denso).
- **Atmospheric Perspective** → Camadas distantes usam contraste/saturação desbotada extrema e escala massiva, igual visão de montanhas naturais.
- **Floating Shadow Cast** → Elementos de ponta criam sombras coloridas (drop-shadow filter colorido de amplo spectro) realistas que mudam de ângulo conforme scroll/gyroscope.
- **Liquid Depth Transitions** → Camadas SVG com filtros `feColorMatrix` e `feGaussianBlur` agindo com blur pesado que "mela" e separa a ui interativa.
- **Foreground Silhouettes** → Shapes pretas vetoriais enormes no z-index 99 que o usuário precisa espiar ou interagir para ver o real site por trás.
- **Matte Opacity Overlays** → Textos pretos que sofrem overlap por imagens foscas semitransparentes gerando blends impossíveis no native web.
- **Tectonic Plate Scrolling** → Containers que agem como crostas, revelando "magma" colorido ou texturas intensas pelas "rachaduras" marginais do DOM.
- **Refraction Surface** → Um filtro blur em um canvas topo de funil distorcendo brutalmente qualquer texto passado por debaixo dele, emulando espelho torcido.
- **Suspended Geometry** → Layout inteiro flutuando invisível 20vh acima do container raiz.

### Baseados em Fluxo e Cinemática
- **GSAP Pinned Sections** → O scroll para, a tela se divide lateralmente guiada pelo wheel (ScrollTrigger).
- **Horizontal Scroll Hijack** → Transformar 3 seções do site em um corredor lateral brutal, quebrando a rolagem vertical monótona.
- **Scroll Animado por Clip-Path** → Em vez de "deslizar" ou fazer "fade-in", o container se desenrola como uma cortina usando `clip-path` sincronizado na timeline CSS.
- **Endless Loop Cinematics** → Scroll wheel faz a viewport avançar 'câmera adentro' sem borda, igual uma introdução de streaming de cinema.
- **Lenis Smooth Inertia** → Uma aplicação impiedosa de desaceleração de inércia via JS (Lenis), mudando fundamentalmente o feeling do hardware do usuário.
- **Sticky Typography Masks** → O texto gigante de fundo fica colado na tela, enquanto o de forma sobrepõe preenchendo as letras por cor de contraste (mix-blend-mode difference + sticky).
- **Velocity-based Skewing** → Quanto mais rápido o usuário scrolla, mais as imagens e textos inclinam (Skew) horizontal ou verticalmente evidenciando a fricção física.
- **Scrubbing Video Sequences** → Um header construído em um vídeo HD em loop que só toca (frame by frame scrub) em conjunção absoluta com a rodinha do mouse.
- **Elastic Scroll Snapping** → Ao invés de simplesmente colar, a seção snap possui bounce agressivo overshoot gerando a sensação física de mola elástica.
- **Reverse Gravitational Tearing** → Scroll pra baixo move o foreground pra CIMA enquanto os layers traseiros são rasgados no sentido da física CSS transform.
- **Wormhole Zoom Mapping** → Cada scrolldown atua apenas na `scale()` de elementos SVG iterativos gigantescos revelando pequenos textos invisíveis nas camadas.
- **Progressive Disintegration** → O scroll decompõe (usando filter e opacidade fracionada) as letras em pequenos pedaços flutuantes via manipulação DOM letra por letra.
- **Temporal Dilation** → A velocidade da engine de scroll acelera / desacelera exponencialmente perto de zonas textuais centrais forçando paradas abruptas.
- **Frame-by-Frame Sprite Rotation** → Emulação 3d pobre, mas carismática amarrada no frame-sheet da roda do scroll.
- **Lenis Smooth Inertia** → Uma aplicação impiedosa de desaceleração de inércia via JS (Lenis), mudando fundamentalmente o feeling do hardware do usuário.
- **Sticky Typography Masks** → O texto gigante de fundo fica colado na tela, enquanto o de forma sobrepõe preenchendo as letras por cor de contraste (mix-blend-mode difference + sticky).
- **Velocity-based Skewing** → Quanto mais rápido o usuário scrolla, mais as imagens e textos inclinam (Skew) horizontal ou verticalmente evidenciando a fricção física.
- **Scrubbing Video Sequences** → Um header construído em um vídeo HD em loop que só toca (frame by frame scrub) em conjunção absoluta com a rodinha do mouse.

### Baseados em Foco Singular
- **Hero Dominante Absoluto** → O hero ocupa 100vh com texto massivo centralizado; Nada mais divide atenção. Zero ilustrações periféricas.
- **Single Spotlight Magnético** → Tipografia banhada num SVG radial blur que persegue o cursor ou o scrollY.
- **Isolamento de Máscara** → O resto da tela mergulha no escuro total (mix-blend-mode: exclusion) focando num único CTA no centro.
- **Progressive Dimming Focus** → A tela esvazia cor e luz periférica à medida que a seção central do conteúdo vai escalando pra 102% (`scale(1.02)` com ease pesado).
- **Vast Negative Space** → 80% da seção é literalmente vazia sem NADA, as micro-informações existem agrupadas nas margens de padding absurdo.
- **The Monolith** → Um elemento UI desproporcional central, rodando lenta rotação 3D pseudo WebGL CSS, monopolizando totalmente a gravidade.
- **Tunnel Vision Composition** → Várias "portas" concêntricas (divs com borders enormes abs/relativos) forçando os olhos para um CTA solitário no miolo espelhado.
- **Micro-Copy Supremacy** → A headline é minúscula (12px uppercased espaçada), jogada à beça no centro colossal, causando inversão de expectativa do cérebro.
- **Typographic Gravity Well** → O texto do título age como atrator gravitacional físico distorcendo via CSS grid as linhas parágrafais que se tentam escapar dele.
- **Monochromatic Eclipse** → Quando em hover ou focado, um SVG radial preenche todo viewport transformando as luzes invertidas pra evidenciar apenas a copy crua.
- **Sensory Deprivation Margin** → A tela literalmente cessa rendering a `70px` forçando uma prisão óptica na frase que você quer exibir, usando borda preta maciça outline `2000px`.
- **Absolute Stagnation** → Scroll nativamente travado. Você clica, não rola. Como slideshow de museu de arte conceitual pura.

### Baseados em Movimento
- Kinetic → Elementos em movimento constante
- Reactive → Elementos que reagem a ações do usuário
- Ambient Motion → Movimento sutil de fundo sempre presente
- Rhythmic → Movimento com ritmo/padrão definido
- Organic Flow → Movimento que imita natureza (água, vento)
- Mechanical → Movimento preciso, como máquina
- Chaotic → Movimento aleatório controlado
- Breathing → Elementos que "respiram" (expand/contract)

### Baseados em Tipografia
- Type Hero → Tipografia como elemento principal do hero
- Editorial → Layout de revista com colunas e tipografia elaborada
- Poster → Layout de cartaz, tipografia dramática
- Kinetic Type → Tipografia animada como protagonista
- Variable Type → Fonte variável que muda com interação
- Type as Image → Texto tratado como elemento visual/arte
- Mixed Type → Múltiplas fontes em contraste
- Monospace Editorial → Tipografia monoespaçada como design

### Baseados em Mídia
- Photo Essay → Sequência de fotos conta história
- Video Immersive → Vídeo como fundo ou protagonista
- Gallery Wall → Múltiplas imagens como galeria de arte
- Lookbook → Estilo de catálogo de moda
- Documentary → Mídia com legendas/contexto jornalístico
- Collage → Múltiplas mídias sobrepostas
- Before/After → Comparação visual de estados
- Case Study → Mídia mostrando processo/resultado

### Baseados em Interação
- Cursor Playground → Cursor é parte da experiência
- Drag Interface → Elementos arrastáveis
- Reveal on Demand → Conteúdo aparece com interação
- Gamified → Elementos de jogo na interface
- Conversational → Interface como diálogo
- Explorable → Usuário explora livremente
- Quiz/Assessment → Interação que gera resultado
- Configurator → Usuário customiza algo visualmente

### Baseados em Densidade
- Minimal → Pouquíssimos elementos, máximo respiro
- Sparse → Elementos bem espaçados
- Balanced → Equilíbrio entre cheio e vazio
- Dense → Muita informação organizada
- Maximalist → Tudo, camadas, texturas, cores
- Data Dense → Dashboard, muitos dados visíveis
- White Space Hero → Espaço vazio como protagonista
- Horror Vacui → Medo do vazio, tudo preenchido

---

### Textura, Shader e Primitiva (PROIBIDO IMAGEM GERADA POR IA)
- **Fluid WebGL Distortion** → Um canvas de shader reagindo como fluido sobrepondo um gradient monocromático.
- **Noise Genérico CSS** → Filtro SVG (feTurbulence) persistente ou pseudo-element estático com opacidade 0.05 pra texturizar blocos de cor morta.
- **Radial Blobs Animados** → 2 ou 3 esferas (divs border-radius 50% e filter blur excessivo) orbitando lentamente em z-index:-1 atrás da copy.
- **SVG Morphing Paths** → Uma linha viva e elogiada rodando em path SVG interligando duas seções.
- **Glassmorphism Agressivo** → Painéis inteiros contendo backdrop-filter de blur violento sobrepondo os referidos radial blobs.
- **Ascii ou Matrix Fallback** → Tipografia pura operando como "arte" em vez de carregar um PNG tosco.
- **Mesh Gradients Procedurais** → 4 pontos dinâmicos de CSS rodando @keyframes complexos que fundem a malha num background orgânico hipnótico.
- **Vignette Cinematográfico Nativo** → Div em overlay global de `box-shadow` em inset que adiciona escurecimento elegante permanente de bordas pra fechar foco visceral.
- **Duotone / Halftone Render** → Manipulação CSS global (`filter: grayscale() sepia() hue-rotate() contrast()`) forçando todo conteúdo visual numa impressão de silkscreen restrita de 2 pontos de cor.
- **Pixel Stretch Distortion** → Elementos que, quando expostos via cursor hover, sofrem estiramento agressivo com background scale Y exagerado emulando glitch gráfico puro.
- **Scanlines CRT Animados** → Gradient-linear repetição CSS 2px transparente/preto num overlay pseudo-opacity 0.02 rodando keyframe background-position constante imitando monitor retrofuturista.
- **Volumetric Light Leaks** → Divises rotacionadas de fundo com blend-mode `screen` ou `color-dodge` varrendo a tipografia como neblina brilhante.
- **Metallic Liquid Reflection** → Conic-gradients manipulados e esticados usando background-size excessivo imitando dobras de aço líquido cromado com noise misturado.
- **Glitch Offset Blocks** → Pedaços pseudo-gerados usando `clip-path` em cópias exatas do main texto sofrendo translateX intermitente de 1ms de keyframe glitcher.
- **Holographic Iridescence** → CSS gradient sweep usando RGB extremo misturado (ciano, magenta, ouro) via pseudo-element e blurs acionados pelo gyro/mouse position.
- **SVG Pattern Brutalism** → Formas fractais densas em SVG background rodando repetition tile para criar uma estampa pseudo militar/dadaista pesando sobre uma paleta cinza escuro.
- **Analog Burn Overlay** → Efeitos the burn-in de tv de plasma em bordas com blend mode multiply para "sujar" designs modernos polidos demais.
- **Lava Lamp Viscocity** → CSS Gooey effect rodando entre 2+ blocos de interface para que se "puxem" de volta unindo seus corners como um só organismo quando dragados.
- **Chiaroscuro Fictício** → Manipulação de Box Shadows interiores duras, zero blur num ambiente todo branco maturo recriando contrastes italianos só que em DOM layout.

### Escala Tipográfica Brutalista
- **Headline Esmagadora** → Clamp brutal (Ex: `clamp(4rem, 10vw, 12rem)`), dominando a viewport. Zero medo de line breaks bizarros.
- **Texto Recortado** → O texto é máscara para CSS animations agitados (`background-clip: text` sobre vídeo ou SVG turbulento).
- **SplitType Animation** → Textos revelados LETRA POR LETRA animadas via GSAP (Sempre pós load no LCP).
- **Marquee Interminável** → Text-stroke de palavras chave rodando em CSS infinite marquee transversal no fundo.
- **Outline Font Stack** → Headline oca (só com `webkit-text-stroke`) preenchida sob demanda no :hover.
- **Tipografia Variable Atuante** → Animar via CSS o property de weight da font em milissegundos reagindo a intersecção de viewport.
- **Absurd Line-height Constriction** → Letras comprimidas usando `line-height: 0.8` cortando parte do ascendente/descendente para blocos hiper-densos.
- **Typography as Architecture** → Letras tão grandes que formam pilares delimitadores vazados onde ficam outras informações sub-pílicas.
- **Kerning Espasmódico** → Alternância controlada intensa no letter-spacing para causar tração de leitura (tension on read).
- **Word Wrapping Irreverente** → Palavras quebram "errado" de propósito criando grids textuais blocáveis (`word-break: break-all`).
- **Typography Kinetic Sand** → Ao hover, cada letra deforma com position relativo randômico de 1 a 10px usando hover delay iterativo cascata de CSS puro.
- **Hyper-Condensed Information** → Uso abusivo de fontes comprimidas (font-stretch: ultra-condensed) combinando peso 900 com uppercase impiedoso criando lajotas textuais ilegíveis mas esteticamente chocantes.
- **Vertical Japanese-style Flow** → Subversão do eixo, colocando subtextos de cópia longos empilhados via `writing-mode: vertical-rl;` caindo sobre a espinha dorsal de tela normal.
- **Negative Clipping Texts** → Headline invisível cortada fora da caixa usando clip-path em modo invertido que "rasga" o background gerado revelando o escuro natural.
- **Perspective Type Distortion** → Headings fixas transformadas em `transform: rotateX(45deg) skew(-10deg)` como scroll de starwars no horizonte visual.
- **Max-Width Overflow Banisher** → Tipografia jogada pra fora da div e contida por `overflow-x: hidden` forçando o cérebro do usuário a deduzir o fim das palavras pela silhueta do ascendedor.
- **Mono-Stack Redundancy** → Blocos de códigos monoespaçados com opacidade de 3% replicando 200 vezes o mesmo manifesto para forrar o background do hero num mosaico tech sujo.

### Layout
- Bleed Left → Elemento sangra margem esquerda
- Bleed Right → Elemento sangra margem direita
- Bleed Both → Elemento sangra ambas margens
- Bleed Top → Elemento sangra topo
- Overlap Elements → Elementos se sobrepõem
- Negative Margin → Margens negativas puxam elementos
- Absolute Positioning → Elementos posicionados absolutamente
- Fixed Element → Elemento fixo na tela
- Sticky Element → Elemento gruda durante scroll
- Off-Grid Element → Elemento fora do grid
- Rotated Container → Container rotacionado
- Skewed Section → Seção inclinada
- Curved Section → Seção com bordas curvas
- Diagonal Divider → Divisor diagonal entre seções
- Wave Divider → Divisor ondulado
- Clip-path Section → Seção com forma recortada
- Full Height → Seção 100vh
- Beyond Viewport → Elemento maior que viewport
- Scroll Horizontal → Seção com scroll lateral
- Overflow Visible → Conteúdo vaza container
- Container Narrow → Container muito estreito centralizado
- Container Wide → Container quase fullwidth
- Asymmetric Padding → Padding diferentes em cada lado
- No Padding → Zero padding, edge to edge

### Cor
- Monocromático → Uma cor em vários tons
- Duocromático → Apenas duas cores
- Gradiente Linear → Gradiente em linha
- Gradiente Radial → Gradiente circular
- Gradiente Cônico → Gradiente em cone
- Gradiente Mesh → Gradiente com múltiplos pontos
- Gradiente Animado → Gradiente que muda
- Dark Mode → Fundo escuro, texto claro
- Light Mode → Fundo claro, texto escuro
- High Contrast → Contraste extremo
- Low Contrast → Contraste sutil
- Neon Colors → Cores vibrantes neon
- Pastel Colors → Cores suaves pastel
- Earth Tones → Tons terrosos
- Jewel Tones → Cores de joias
- Color Blocking → Blocos de cor sólida
- Color Overlay → Camada de cor sobre tudo
- Selective Color → Uma cor destaca, resto neutro
- Inverted Colors → Cores invertidas
- Transparent Background → Fundo transparente/blur

### Movimento
- Fade In → Aparece suavemente
- Fade Up → Aparece subindo
- Fade Down → Aparece descendo
- Fade Left → Aparece da direita
- Fade Right → Aparece da esquerda
- Scale In → Aparece crescendo
- Scale Out → Aparece diminuindo
- Rotate In → Aparece girando
- Flip In → Aparece virando
- Slide In → Desliza para posição
- Bounce → Movimento com quique
- Elastic → Movimento elástico
- Spring → Movimento de mola
- Float Loop → Flutua infinitamente
- Rotate Loop → Gira infinitamente
- Pulse Loop → Pulsa infinitamente
- Breathe Loop → Respira infinitamente
- Shake → Treme
- Wobble → Balança
- Swing → Balança como pêndulo
- Rubber Band → Estica e volta
- Morph Shape → Forma transforma em outra
- Path Animation → Elemento segue path
- Stagger → Elementos animam em sequência
- Wave Stagger → Sequência ondulada
- Random Delay → Delays aleatórios
- Scroll Speed → Velocidade varia com scroll
- Scroll Progress → Animação baseada em % scroll
- View Timeline → Animação CSS nativa com scroll
- Counter Animation → Números contando
- Text Reveal → Texto revelado progressivamente
- Draw SVG → SVG desenhado
- Clip Reveal → Conteúdo revelado com clip-path
- Mask Reveal → Conteúdo revelado com mask

### Interação
- Hover Scale → Cresce no hover
- Hover Lift → Levanta no hover
- Hover Glow → Brilha no hover
- Hover Color → Muda cor no hover
- Hover Reveal → Revela conteúdo no hover
- Hover Flip → Vira no hover
- Hover Slide → Desliza no hover
- Hover Underline → Sublinhado animado
- Hover Fill → Preenchimento animado
- Cursor Custom → Cursor personalizado
- Cursor Trail → Rastro do cursor
- Cursor Magnetic → Elementos atraídos pelo cursor
- Cursor Repel → Elementos fogem do cursor
- Mouse Parallax → Elementos movem com mouse
- Mouse Tilt → Inclinação 3D com mouse
- Mouse Spotlight → Luz segue mouse
- Click Ripple → Onda ao clicar
- Click Confetti → Confete ao clicar
- Click Sound → Som ao clicar
- Drag Horizontal → Arrastar lateral
- Drag Vertical → Arrastar vertical
- Drag Free → Arrastar livre
- Pinch Zoom → Zoom com pinch
- Long Press → Ação ao segurar
- Double Tap → Ação ao tocar 2x
- Swipe Gesture → Ação ao deslizar
- Scroll Snap → Scroll para em pontos
- Pull to Refresh → Puxar para atualizar
- Infinite Load → Carregar mais ao chegar ao fim

### Estrutura de Interface Avançada (Substitutos de UI Genéricas)
- **Marquee Navigacional** → Textos gigantes passando em marquee que funcionam como os links do menu invés de um header fixo aborrecido.
- **Custom Cursor como Action Point** → O cursor revela os "read more" e os links escondidos do projeto como spotlight, sem precisar de botões azuis chatos.
- **Scroll Sequence** → Sequência densa de fotos ativada por Lottie, vinculada frame-by-frame ao scroll wheel.
- **Text-Driven Accordions** → Ao invés de botões normais, gigantes linhas de headline que alteram o DOM de imagens via interações de mouse hover.
- **Hidden Fullscreen Overlays** → Um hover banal revela uma ocupação bruta visual 100vh cobrindo os Z-indexes por completo.
- **Fluid Grid Refinement** → Painéis Grid colapsando assimetricamente com transições CSS Flexbox/Grid em `1.2s cubic-bezier` lentos.
- **Typography Menu Interceptor** → O menu de navegação é composto por tipografias maciças display impact em background escuro ao invés de barrinhas pequenas.
- **Magnetic Action Nodes** → Zero botões quadrados ou pills arredondados: elementos CTAs esféricos ou orgânicos que apegam ao compasso do cursor usando JavaScript de atração magnética.
- **Drag & Throw Physics** → Botões ou formulários que podem ser agarrados num drag&drop realístico com gravidade manipulando coordenadas e física inertia DOM.
- **Cursor Repulsion Barrier** → Botão ou painel que tenta escapar passivamente do cursor, forçando um traçado do mouse rápido pra ativar "catch interativo".
- **Radial Indexing** → Dados e informações listados num loop trigonométrico via matemática no SVG path em vez da lista `<ul>` tediosa vertical.
- **Depth Scoped Modals** → O site inteiro gira brutalmente em 3d pro fundo num `translateZ(-500px)` e um modal limpo nasce flutuando intocado na frente sem sujar a vista com blur barato.
- **Form Brutalism** → Campos de inputs sem outlines, usando tipografia massiva em preto e branco 100vw que reveler placeholder em itálico por hover.
- **Progressive Reveal Slicing** → O usuário passa o mouse por uma caixa vazia que vai ser fatiando em listras de 10px em altura e relevando uma animação em looping escondida "dentro" do corte.
- **Data Glitch Loader** → Substituto para Skeleton loaders ou spinners, usando dezenas de caracteres hexadecimal randômicos que processam e estabilizam nos verbos originais reais copiados.
- **Typographic Wayfinders** → No lugar de "voltar ao topo" ou "scroll down", setas tipográficas compostas por repetição de símbolos ASCII formatando o labirinto geométrico pro footer.

### ESTRUTURAS BANIDAS (NUNCA REPETIR ESSAS MULETAS)
- **PROIBIDO:** Carousel Standard (Slider com setinhas). As informações devem ser desenroladas via scroll, masonry, ou grid hover expansion.
- **PROIBIDO:** Accordions Básicos listados em tabela chata. Transforme expansões em blocos conceituais interativos.
- **PROIBIDO:** Popovers, tooltips ou modais intrusivos que sujam a tela sem uma experiência animada primorosa.
- **PROIBIDO:** Grids de depoimentos genéricos ou botões pílula simples sem comportamento dinâmico e sombreados pesados.

---

## FONT PAIRINGS CURADOS (A Essência do Fator WOW)

Você é TERMINANTEMENTE PROIBIDO de usar fontes clichês da "Geração Canva" para projetos que precisam ser Premium (Luxo) ou Modernos (Tech). O design será avaliado por diretores de arte reais. O uso de tipografias overused como Fraunces, Playfair Display, Montserrat, Poppins, Roboto, Lato, Raleway, ou Lora resultará em falha crítica do design.

Escolha a partir desta lista curada de fontes de alto padrão (todas disponíveis via Google Fonts API):

### Editorial & High-End Luxury (Serifas Limpas e Display)
*(Use para projetos Elegantes, Arquitetura, Moda, Advocacia, Luxo e High-End Clinics)*
- **Cormorant Garamond** (Italic 300) + **Jost** (Regular) → Uma das serifas mais esguias e editoriais disponíveis.
- **Bodoni Moda** (700) + **Satoshi** (Regular) → Contraste extremo entre a tradição do Bodoni e a frieza de uma Neo-Grotesk.
- **Cinzel Decorative** (Heading Limitado) + **Cormorant** → Luxo clássico puro (Use com extrema cautela, apenas em Heros gigantes).
- **EB Garamond** (Regular) + **Manrope** (Light) → Elegância literária com suporte digital brutalista contemporâneo.
- **Prata** + **DM Sans** (Apenas o Body) → Serif de alto contraste (Didone style) para headlines que precisam de respiração e elegância madura.
- **Spectral** (Light) + **Inter** (Regular) → Sensibilidade francesa super polida.
- **Newsreader** (Display) + **Public Sans** → Estética fina do jornalismo impresso do século XX transportada para Telas Retina.
- **Marcellus** + **Mulish** → Proporções clássicas de inscrições romanas combinadas com sans-serif geométrica minimalista.
- **Oranienbaum** + **Golos Text** → Serifa clássica russa ultra-tensa com body text contemporâneo.
- **Gilda Display** + **Libre Franklin** → Sensibilidade fina, alta costura, proporções femininas fluidas.

### Brutalist & Architectural (Neo-Grotesks Cínicas)
*(Use para Agências, SaaS Moderno, Portfólios, Eventos Tech e Design)*
- **Space Grotesk** (Heading 700) + **Inter Tight** (Body) → O cinismo do monospace unido à geometria brutal.
- **Syne** (ExtraBold 800) + **Geist** → Headlines extremamente largas ("Extended") fundadas sob uma estrutura suíça cínica. Fator WOW imediato.
- **Archivo Black** (Uppercase 900) + **Archivo** (Regular) → Brutalismo pesado ("Lajotas Textuais"), excelente combinado com Marquees intermináveis e layout grid sem margens.
- **Bricolage Grotesque** + **Mona Sans** → Tipografia "suja" e irreverente da escola francesa moderna.
- **Darker Grotesque** (Black) + **Darker Grotesque** (Regular) → Condensada, agressiva, inspirada nas neo-grotescas corporativas dos anos 60.
- **Schibsted Grotesk** + **Schibsted Grotesk** → Arquitetura jornalística moderna norueguesa, perfeita para grids de informação densa.
- **Sora** (ExtraBold) + **Inter** (Regular) → Modernismo tecnológico. Frio e calculista.
- **Epilogue** (Black) + **Epilogue** (Regular) → Peso e proporção de display moderno, ideal para hero sections monolíticas.
- **Instrument Sans** + **Instrument Sans** → Grotesca neo-modernista com proporções geométricas exatas e terminações nítidas.

### The "Agnostic" Tech (Transparência Total)
*(Use quando o UI deve desaparecer completamente deixando o conteúdo brilhar)*
- **Plus Jakarta Sans** (Heading) + **Plus Jakarta Sans** (Body) → Super limpo, geométrico superior ao Inter.
- **Outfit** (Heading) + **Outfit** (Body) → Geometria arredondada, mas madura (evite pesos finos no header para não parecer infantil).
- **Albert Sans** + **Albert Sans** → Tipografia "Ghost". Neutra a um ponto quase cirúrgico.
- **Rethink Sans** + **Rethink Sans** → Extremamente legível, fresh, a evolução do design "Corporate Memphis" sem ser brega.
- **Onest** + **Onest** → Estética européia oriental pragmática, zero adornos, pura funcionalidade.
- **Afacad** + **Afacad** → Originalmente desenhada para a Slite, limpa e com excelente ritmo de leitura longa.

### Avant-Garde & Maximalist (Y2K / High-Impacto)
*(Use para Moda Streetwear, Festivais de Música, Web3, Campanhas Subversivas)*
- **Unbounded** (Black) + **Spline Sans** → Formas absurdas, arredondadas em locais inesperados, super display para quebras de paradigma.
- **Big Shoulders Display** + **Roboto Flex** → Condensada brutalista de Chicago, perfeita para headlines gigantes ocupando 100vw.
- **Climate Crisis** + **Inter** → Fonte variável que simula o derretimento do gelo, ultra-impacto visual (Requer uso cirúrgico).
- **Major Mono Display** + **Space Mono** → Abstração total geométrica, parecem runas alienígenas corporativas.
- **Saira Stencil One** + **Saira** → Estética industrial crua, "Workwear" digital, stencil pesado.
- **Righteous** + **Exo 2** → Retro-futurismo agressivo de pôster de corrida, curvas tubulares e rígidas.

### Cinematic & Technical Hybrid (Monospace como Gráfico)
*(Use para Dashboards Dark Mode, Ferramentas Desenvolvedor, Sci-Fi Interfaces, Arte Generativa)*
- **JetBrains Mono** + **JetBrains Mono** → Para estéticas 100% Data-Driven e UI de desenvolvedor.
- **Space Mono** + **Work Sans** → O "fofinho" tecnológico, misturando linhas retas e curvas inesperadas da tipografia sci-fi.
- **Fira Code** + **Fira Sans** → Tecnológico com ligaduras ativas (se suportadas), estética hacker limpa.
- **Inconsolata** + **Open Sans** → Terminal clássico modernizado para UI de dashboards complexos vazados.

---

## REGRAS DE USO (Obrigatório Ler Antes de Projetar)

1. **Escolha Intencional e Abstrata**: Para CADA seção, selecione itens da lista acima (1 Arquétipo + 2 Constraints).
2. **NUNCA reproduza exemplos passados ou vícios da IA:** Seu objetivo é cruzar categorias inusitadas sem repetir diretrizes prévias.
3. **Variedade Forçada:** É terminantemente **PROIBIDO** repetir o mesmo Arquétipo em seções consecutivas.
4. **DECLARE** suas escolhas antes de implementá-las no Layout:
   "Escola Criativa Seção X: [Nome exato do Arquétipo Escolhido] fundido com as Constraints [A] e [B]."

5. **Para FONTES**, escolha APENAS as recomendadas que fogem do comum. É extremamente **PROIBIDO** usar fontes overused de templates amadores (Ex: Fraunces, Playfair, Montserrat, Poppins, Roboto).
   - MANDATÓRIO: Use combos de alto contraste recomendados.
   - DECLARE a fonte: "Fonte Principal: [Heading] / Fonte Apoio: [Body]".

6. **Padrões Banidos de Arquitetura:**
   - NUNCA use 3 cards flutuantes genéricos com ícones.
   - NUNCA use grids estritamente simétricos e tediosos, a menos que o nicho exija extrema conformidade (e mesmo assim, use tipografia massiva para compensar).
   - O uso de blocos de texto alinhados ao centro embaixo de uma imagem não é web design autêntico, é template. EVITE.
