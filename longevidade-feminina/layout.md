# Layout Specification: O Despertar da Longevidade Feminina

## Diretriz de Arte Global
**Conceito:** Elegancia Feminina, Natureza e Ciencia Intuitiva (Lotus & DNA)
**Paleta:** #fffcfb (bg), #4a1b38 (plum/text), #d18c83 (rose gold/accent), #b56358 (accent dark), #8e657f (muted), #fbeae8 (blush), #f0cdc7 (lotus mid)
**Font Pairing:** Gilda Display (headings, Regular 400) + Libre Franklin (body, 300/400/500/600)
**Estetica:** Glassmorphism + Ambient Organic Motion + Light Mode quente
**Tom:** Sofisticado, feminino, cientifico sem frieza clinica

---

## Secao 1: Hero (A Promessa Principal)

> JA IMPLEMENTADA NO index.html E style.css APROVADOS. Manter integralmente.

### Arquetipo e Constraints
- Arquetipo: Glassmorphism Imersivo
- Constraints: Ambient Motion (Radial Blobs Animados), Bleed Right, Fade Up
- Referencia aprovada: editorial split layout 1fr 1fr com imagem organica (border-radius assimetrico Lotus) + blobs animados de fundo

### Conteudo
- Eyebrow: "Imersao Presencial . 28 de Marco"
- Titulo: "O Despertar da Longevidade" (com "Longevidade" em serif-elegant, cor accent-dark)
- Descricao: "Vou passar um dia inteiro ao seu lado para identificarmos a causa raiz das suas queixas de saude. Vamos desenhar um protocolo medico e fisiologico para devolver a sua qualidade de vida utilizando recursos naturais e reduzindo drasticamente a dependencia de medicamentos."
- CTA: "Garantir meu ingresso"
- Notas: "60% do lote 01 preenchido" + "Compra 100% segura"
- Scroll Indicator: "Explorar" + line-drop animada

### Layout
Ja aprovado. Grid 1fr 1fr, max-width 1300px, gap spacing-lg, min-height 100vh, padding-top para caber logo.

### Elementos Visuais
Ja implementados: imagem botanical-spa.jpg com parallax, blobs organicos, noise overlay, lotus-overlay-graphic com color-burn.

### Animacoes
- Hero aparece em T=0, SEM opacity:0 inicial (regra do projeto)
- Lenis Smooth Scroll com duracao 1.5
- Parallax na imagem hero via GSAP ScrollTrigger scrub
- Line-drop pulsando yoyo infinito

---

## Secao 2: O Agravamento do Problema (A Falsa Culpa da Idade)

> JA IMPLEMENTADA NO index.html E style.css APROVADOS. Manter integralmente.

### Arquetipo e Constraints
- Arquetipo: Editorial Asymmetry
- Constraints: Glassmorphism Agressivo, Sticky Element, Fade Up
- Referencia aprovada: glass-panel com split-editorial 4.5fr/5.5fr, coluna esquerda sticky

### Conteudo
Ja implementado com titulo "A Falsa Culpa da Idade", subtitulo, body texts, highlight-box com accent-line DNA, imagem editorial.

### Layout
Glass-panel com backdrop-filter blur(24px), border-radius 40px, split editorial com pin-element sticky.

---

## Secao 3: A Metodologia (A Ciencia da Recuperacao)

### Arquetipo e Constraints
- Arquetipo: Stacked Cards Friction
- Constraints: Scroll Progress, Selective Color, Hover Lift
- Justificativa: Os 3 pilares do protocolo sao apresentados como cards empilhados em profundidade que se revelam sequencialmente no scroll. A fricao entre os cards cria tensao e peso cientifico. A cor seletiva destaca cada pilar com um matiz unico dentro da paleta rose/plum.

### Conteudo

**Headline:**
"A Ciencia a Favor da sua Liberdade: O Tripe do Protocolo Borges"

**Subtitulo contextual:**
"Neste Workshop, nao havera espaco para debates teoricos distantes da realidade. Nos vamos reconfigurar o seu estilo de vida fundamentados em tres pilares medicos e naturais absolutamente inegociaveis para a verdadeira longevidade feminina:"

**Pilar 1 - Oleos Essenciais (A Modulacao e o Escudo):**
"Acessaremos a mais pura farmacologia da natureza. Vou demonstrar como moleculas aromaticas especificas possuem a capacidade fisica de atravessar a barreira hematoencefalica em questao de segundos. Essa via de acesso direto regula o seu sistema limbico, despenca a producao de cortisol e resgata, quase instantaneamente, a sua clareza mental e o seu estado de tranquilidade."

**Pilar 2 - Dieta FMD (O Reset Celular):**
"Esqueca a restricao severa e o sofrimento alimentar. A nossa abordagem e baseada em sinalizacao genetica. Voce aprendera a ativar o mecanismo de autofagia -- um processo de faxina biologica onde o seu corpo elimina as celulas senescentes e inflamadas. E o estopim essencial que forca as suas mitocondrias a voltarem a produzir energia duradoura."

**Pilar 3 - Modulacao Hormonal Bioidentica (A Chave Mestra):**
"O refinamento absoluto do seu metabolismo. A queda da taxa hormonal arrasta consigo a protecao cardiovascular, a densidade ossea e a plasticidade cerebral. Vou apresentar a conduta segura para repor a dosagem exata que o seu corpo exige, devolvendo a sua libido, estabilizando o seu humor e injetando vitalidade renovada para o seu ritmo diario."

**CTA:** "Garantir meu ingresso"

### Layout
- Background: var(--color-bg) com sutil gradiente radial rose gold (#d18c83 a 3% opacidade) no canto inferior esquerdo
- Container max-width: 1300px, centrado
- Headline e subtitulo: centrados, max-width 800px, margin 0 auto
- Abaixo, 3 cards empilhados verticalmente com leve overlap: cada card desloca -40px em relacao ao anterior via margin-top negativa
- Card width: 100%, max-width: 900px, margin: 0 auto
- Card padding: 60px 50px
- Card border-radius: 30px
- Card background: var(--color-surface) com backdrop-filter blur(20px)
- Card border: 1px solid rgba(255,255,255,0.7)
- Card box-shadow: 0 30px 60px rgba(74,27,56,0.06)
- Cada card tem uma barra lateral esquerda colorida de 4px de largura e border-radius 4px:
  - Pilar 1: linear-gradient(to bottom, #d18c83, #b56358) — Rose Gold
  - Pilar 2: linear-gradient(to bottom, #8e657f, #4a1b38) — Plum
  - Pilar 3: linear-gradient(to bottom, #f0cdc7, #d18c83) — Blush para Rose
- Spacing entre secao headline e cards: var(--spacing-lg)
- CTA centrado abaixo dos cards, margin-top: var(--spacing-md)

### Tipografia
- Headline secao: font-family Gilda Display, font-size clamp(2.2rem, 4vw, 3.8rem), line-height 1.1, color var(--color-text), text-align center
- Subtitulo: Libre Franklin 300, font-size clamp(1.05rem, 1.3vw, 1.2rem), line-height 1.7, color var(--color-text-muted), text-align center, max-width 750px, margin 0 auto 0
- Card titulo pilar: Gilda Display, font-size clamp(1.4rem, 2vw, 1.8rem), line-height 1.3, color var(--color-accent-dark), margin-bottom 1.5rem
- Card body: Libre Franklin 300, font-size 1.1rem, line-height 1.8, color var(--color-text-muted)
- Palavras em negrito na copy (autofagia): font-weight 500, color var(--color-text)

### Cores
- Background secao: var(--color-bg)
- Cards: rgba(255,255,255,0.6) com backdrop blur
- Card hover: rgba(255,255,255,0.85)
- Texto titulo: var(--color-accent-dark) #b56358
- Texto body: var(--color-text-muted) #8e657f
- Palavras enfatizadas: var(--color-text) #4a1b38

### Elementos Visuais
- Nenhuma imagem fotografica. A forca esta na tipografia e nos cards glassmorphic.
- Decoracao: pseudo-elemento circular (radial-gradient, rose gold a 5% opacidade, 400px diameter) posicionado absolute no canto superior direito do container, z-index -1, blur 80px. Funciona como aura decorativa sutil.
- Cada card tem um numero de pilar (01, 02, 03) exibido como pseudo-elemento ::before do card: Gilda Display, font-size 5rem, color rgba(209,140,131,0.08), position absolute, top -10px, right 30px, pointer-events none.

### Animacoes de Scroll
- Headline e subtitulo: data-aos="fade-up", duracao 800ms, ease-out, trigger 20% viewport
- Cards: stagger reveal — cada card aparece com data-aos="fade-up", delay de 150ms entre eles (card 1: 0ms, card 2: 150ms, card 3: 300ms)
- Ao scroll, cards ganham leve parallax diferencial: card 1 translateY normal, card 2 translateY a 0.95x speed, card 3 a 0.9x speed. Isso via GSAP ScrollTrigger scrub com valores y: "5%", "10%", "15%" respectivos.
- CTA: data-aos="fade-up" com delay 450ms

### Hover e Touch
- Card hover: transform translateY(-6px), box-shadow 0 40px 80px rgba(74,27,56,0.10), background rgba(255,255,255,0.85), transition all 0.5s var(--ease-elegant)
- Card barra lateral hover: largura de 4px para 6px, transition width 0.4s ease
- CTA: mesmo comportamento do btn-primary do hero (scaleX fill + translateY(-2px))

### Responsividade
- 1024px: cards max-width 100%, padding 40px 30px, margin-top negativo reduz para -20px
- 768px: cards padding 30px 20px, numero decorativo font-size 3.5rem, headline clamp ajusta para menor

---

## Secao 4: Acao Imediata (Preparacao e Entregaveis)

### Arquetipo e Constraints
- Arquetipo: Editorial Asymmetry
- Constraints: Overlap Elements, Hover Glow, Counter Animation
- Justificativa: A assimetria editorial cria distinção entre o texto explicativo da Fase de Preparação e a lista de entregáveis. O overlap parcial de uma caixa decorativa sobre a area de borda cria profundidade. Os numeros dos entregaveis usam counter animation para impacto visual.

### Conteudo

**Headline:**
"A sua transformacao nao comeca no dia do evento. Comeca HOJE."

**Paragrafo contexto:**
"O nosso dia de imersao exigira capacidade de absorcao, e eu nao quero que voce inicie o Workshop com um corpo inflamado e deficiente em energia. Para colhermos todos os resultados do nosso encontro, precisamos pavimentar o seu terreno biologico."

**Paragrafo Fase de Preparacao:**
"Ao confirmar a sua inscricao agora, voce e imediatamente inserida na nossa Fase de Preparacao. Teremos atividades semanais guiadas ate a data do evento -- passos praticos, apoiados em nutricao funcional e aromaterapia, voltados para dissolver o seu grau de inflamacao antes do primeiro minuto oficial do Workshop."

**Paragrafo transicao:**
"Alem desse acompanhamento tecnico continuado, a sua entrada imediata libera o acesso integral ao nosso acervo de embasamento:"

**Lista de entregaveis:**
- 01 | O Workshop Ao Vivo, via Zoom (com interacao e analise tecnica)
- 02 | Livro Digital: Fisiopatologia das Infeccoes Fungicas Vaginais
- 03 | Livro Digital: Fisiologia Hormonal na Saude da Mulher
- 04 | Livro Digital: Beneficios da Progesterona na Saude da Mulher
- 05 | Livro Digital: Oleos Essenciais na Fase Folicular do Ciclo Menstrual
- 06 | Manual Pratico: Formas de Administracao dos Oleos Essenciais
- 07 | Compendio: Receitas de Blends de Oleos Essenciais para o Alivio da Menopausa
- 08 | Banco de Materiais Complementares Exclusivos

### Layout
- Secao padding: var(--spacing-xl) var(--spacing-md)
- Container max-width: 1300px, centrado
- Grid de 2 colunas: grid-template-columns 5fr 5fr, gap var(--spacing-lg)
- Coluna esquerda: headline + paragrafos contextuais
- Coluna direita: lista de entregaveis em stack vertical
- Background da secao: var(--color-lotus-light) #fbeae8 com border-radius 0 (full-bleed)
- Decoracao: pseudo-elemento retangular abstrato de 200px x 300px, position absolute, top -60px, left 50%, background linear-gradient(135deg, var(--color-accent) 0%, transparent 70%), border-radius 100px 30px, opacity 0.08, z-index 0, blur 40px. Flutua sobre a divisao das colunas.

### Tipografia
- Headline: Gilda Display, font-size clamp(2rem, 3.5vw, 3.2rem), line-height 1.15, color var(--color-text)
- A palavra "HOJE" deve ser enfatizada: font-style italic, color var(--color-accent-dark)
- Paragrafos: Libre Franklin 300, font-size 1.1rem, line-height 1.8, color var(--color-text-muted)
- "Fase de Preparacao" em negrito: font-weight 500, color var(--color-text)
- Numero do entregavel (01, 02...): Gilda Display, font-size 1rem, color var(--color-accent), letter-spacing 0.05em, margin-right 12px, display inline-block, min-width 40px
- Nome do entregavel: Libre Franklin 400, font-size 1.05rem, color var(--color-text), line-height 1.6
- Separador "|": color var(--color-accent), opacity 0.5, margin 0 8px

### Cores
- Background secao: #fbeae8 (lotus-light)
- Texto headline: #4a1b38
- Texto body: #8e657f
- Numeros: #d18c83
- Entregaveis nome: #4a1b38
- Hover entregavel: background rgba(255,255,255,0.5), border-radius 12px

### Elementos Visuais
- Cada entregavel e um bloco horizontal com padding 16px 20px, border-bottom 1px solid rgba(74,27,56,0.06)
- O primeiro entregavel (Workshop Ao Vivo) recebe um badge destaque: pseudo-elemento com texto "Destaque", background var(--color-text), color #fff, font-size 0.65rem, uppercase, letter-spacing 0.1em, padding 4px 12px, border-radius 100px, position relative, display inline-block, margin-left 12px, vertical-align middle

### Animacoes de Scroll
- Coluna esquerda (headline + paragrafos): data-aos="fade-up", duracao 800ms, ease-out
- Entregaveis: stagger com data-aos="fade-up", delay incremental de 80ms cada (item 1: 0ms, item 2: 80ms, ... item 8: 560ms)
- Numeros dos entregaveis: Counter Animation ao entrar no viewport — numeros animam de 00 para o valor final em 400ms via IntersectionObserver + requestAnimationFrame

### Hover e Touch
- Entregavel hover: background rgba(255,255,255,0.5), transform translateX(8px), transition all 0.3s var(--ease-elegant)
- Numero hover: color var(--color-accent-dark), transition color 0.3s ease

### Responsividade
- 1024px: grid muda para 1 coluna, gap reduz para var(--spacing-md)
- 768px: headline font-size clamp ajusta menores, entregaveis padding 12px 16px

---

## Secao 5: Atendimento Clinico (O Diagnostico Feito ao Vivo)

### Arquetipo e Constraints
- Arquetipo: Vast Negative Space
- Constraints: Vignette Cinematografico Nativo, High Contrast, Scale In
- Justificativa: O grande espaco vazio cria reverencia e importancia ao redor da mensagem do atendimento clinico ao vivo. O vignette cinematografico escurece as bordas numa secao escura, focando o olhar no centro. O alto contraste (dark mode localizado) distingue esta secao como momento especial.

### Conteudo

**Headline:**
"A chance de ter o seu quadro de saude examinado diretamente por mim, ao vivo."

**Paragrafo 1:**
"A teoria medica se solidifica quando aplicada na pratica. Durante o avanco do nosso cronograma, selecionarei pessoalmente de um a dois casos entre as participantes para um atendimento clinico real e ao vivo."

**Paragrafo destaque:**
"Essa nao e uma simulacao. Ao garantir a sua vaga hoje, voce conquista automaticamente a chance de participar desse sorteio. Se for o seu nome, dissecaremos os seus exames, analisaremos o seu historico e desenharemos o seu raciocinio de tratamento estruturado de forma milimetrica, conduzindo todo o grupo pelo processo de avaliacao que aplico na minha propria clinica."

**CTA:** "Garantir meu ingresso"

### Layout
- INVERSAO DE FUNDO: Esta secao usa dark mode localizado — background #4a1b38 (plum escuro)
- Secao padding: var(--spacing-xl) var(--spacing-md), min-height 80vh, display flex, align-items center, justify-content center
- Container interno: max-width 800px, text-align center
- Enorme respiro: padding vertical interno de 120px 0
- Vignette: pseudo-elemento ::after da secao, position absolute, inset 0, box-shadow inset 0 0 200px 60px rgba(0,0,0,0.4), pointer-events none, z-index 1
- Conteudo fica em z-index 2

### Tipografia
- Headline: Gilda Display, font-size clamp(2.2rem, 4vw, 3.5rem), line-height 1.2, color #fbeae8 (blush claro), text-align center, margin-bottom var(--spacing-md)
- Paragrafos: Libre Franklin 300, font-size 1.15rem, line-height 1.8, color rgba(251,234,232,0.7), text-align center
- "atendimento clinico real e ao vivo" em destaque: font-weight 500, color #d18c83 (rose gold)
- "Essa nao e uma simulacao." em destaque: font-family Gilda Display, font-size 1.4rem, color #fbeae8, display block, margin-bottom 1.5rem

### Cores
- Background: #4a1b38 (plum)
- Headline: #fbeae8 (blush)
- Body text: rgba(251,234,232,0.7)
- Destaques: #d18c83 (rose gold)
- CTA: invertido — background #d18c83, color #4a1b38, hover background #fbeae8

### Elementos Visuais
- Nenhuma imagem. Pura tipografia com atmosfera.
- Decoracao ambiental: 2 divs circulares absolutas de fundo, blur 120px, opacity 0.15:
  - Circulo 1: 400px, background radial-gradient(#d18c83, transparent), top -10%, right -5%
  - Circulo 2: 300px, background radial-gradient(#8e657f, transparent), bottom -10%, left -5%
- Linha decorativa horizontal fina: width 80px, height 1px, background #d18c83, opacity 0.4, margin 0 auto var(--spacing-md), depois da headline

### Animacoes de Scroll
- Headline: data-aos="fade-up", duracao 1000ms, ease-out
- Frase destaque "Essa nao e uma simulacao": data-aos="fade-up", delay 200ms
- Paragrafos: data-aos="fade-up", delay 300ms
- CTA: data-aos="fade-up", delay 400ms
- Os circulos decorativos fazem leve parallax via GSAP ScrollTrigger: translateY -30px ao longo do scroll da secao, scrub true

### Hover e Touch
- CTA: transform translateY(-3px), box-shadow 0 20px 50px rgba(0,0,0,0.3), background muda para #fbeae8, transition all 0.5s ease

### Responsividade
- 1024px: min-height auto, padding vertical 80px
- 768px: headline font-size reduz, vignette box-shadow reduz para 100px 30px

---

## Secao 6: O Cronograma do Dia

### Arquetipo e Constraints
- Arquetipo: Swiss Poster Grid
- Constraints: Monocromatico, Container Narrow, Hover Underline
- Justificativa: Organizacao suica matematica restrita para comunicar a ordem do dia com clareza e rigor. O container estreito foca a atencao. A monocromia em tons de plum reforca a sobriedade medica.

### Conteudo

**Headline:**
"A Ordem de Exposicao do Workshop"

**Bloco 01:**
"Bloco 01 -- Analise e Fundamentos: Das 09h as 12h30"

**Intervalo:**
"Intervalo para o Almoco Rapido"

**Bloco 02:**
"Bloco 02 -- Pratica Legal, Estrategia e Prescricao: Das 14h as 18h"

### Layout
- Background: var(--color-bg) #fffcfb
- Secao padding: var(--spacing-lg) var(--spacing-md)
- Container ESTREITO: max-width 700px, margin 0 auto, text-align left
- Headline centrada
- 2 blocos de cronograma dispostos verticalmente, separados por uma linha horizontal decorativa que tambem representa o intervalo
- Cada bloco: padding 40px 0, border-bottom 1px solid rgba(74,27,56,0.08)
- O intervalo fica como texto small entre os dois blocos, centrado, com estilo diferenciado

### Tipografia
- Headline: Gilda Display, font-size clamp(1.8rem, 3vw, 2.8rem), line-height 1.2, color var(--color-text), text-align center, margin-bottom var(--spacing-lg)
- "Bloco 01", "Bloco 02": Libre Franklin 600, font-size 0.8rem, text-transform uppercase, letter-spacing 0.2em, color var(--color-accent-dark), margin-bottom 0.5rem
- Descricao do bloco: Libre Franklin 300, font-size clamp(1.2rem, 1.5vw, 1.4rem), line-height 1.5, color var(--color-text)
- Horario: Gilda Display italic, font-size 1.1rem, color var(--color-text-muted), margin-top 0.5rem
- Intervalo: Libre Franklin 300 italic, font-size 0.9rem, color var(--color-text-muted), text-align center, padding 20px 0

### Cores
- Tons monocromaticos de plum: #4a1b38, #8e657f, #b56358 para acentos
- Linhas divisorias: rgba(74,27,56,0.08)

### Elementos Visuais
- Linha decorativa horizontal entre headline e blocos: width 40px, height 1px, background var(--color-accent), margin 0 auto var(--spacing-md)
- Decoracao minima. O estilo suico exige pureza.

### Animacoes de Scroll
- Headline: data-aos="fade-up"
- Bloco 01: data-aos="fade-up", delay 150ms
- Intervalo: data-aos="fade-up", delay 250ms
- Bloco 02: data-aos="fade-up", delay 350ms

### Hover e Touch
- Blocos nao sao interativos (nao sao links)
- Hover na secao inteira: nao aplicavel

### Responsividade
- 768px: padding lateral reduz, font-sizes se ajustam via clamp

---

## Secao 7: O Novo Padrao de Reacao (Ruptura)

### Arquetipo e Constraints
- Arquetipo: Progressive Dimming Focus
- Constraints: Volumetric Light Leaks, Fade Up, Sticky Element
- Justificativa: A secao escurece progressivamente para focar a atencao na mensagem de ruptura. Volume de luz rose gold varre o fundo em blend screen, como se a propria natureza iluminasse a saida do ciclo farmaceutico. O sticky title mantem ancoragem emocional.

### Conteudo

**Headline:**
"Chegou a hora de abandonar os compostos farmaceuticos que camuflam a doenca e comecar a extrair o maximo do seu potencial biologico."

**Paragrafo 1:**
"A progressao tem sido cruel: a cada ano, as mesas de cabeceira se enchem com mais frascos, mas o nivel de disposicao afunda. Sabe a mecanica desse declinio? Ao ingerir repetidamente agentes quimicos sinteticos que bloqueiam respostas nervosas em vez de tratar a raiz anatomica da dor, voce se condiciona a dependencia medica perpetua. O desgaste biologico continua operando sob a superficie medicada."

**Paragrafo 2:**
"E exatamente esse ciclo destrutivo que quebraremos dentro deste workshop. Vou te guiar pelo arsenal de condutas terapeuticas validadas pela ciencia. Entraremos fundo no potencial farmacologico dos oleos essenciais, na correcao da cronobiologia e na reorganizacao dos habitos de resposta do seu organismo. Voce possui plenas condicoes clinicas de viver uma rotina carregada de vigor, metabolismo eficiente e estabilidade mental absoluta."

### Layout
- Secao com gradiente de fundo: linear-gradient(to bottom, var(--color-bg) 0%, #f0e4e0 50%, #ede0db 100%) — sutil escurecimento rosado
- Padding: var(--spacing-xl) var(--spacing-md)
- Container: max-width 900px, margin 0 auto, text-align left
- Headline: margin-bottom var(--spacing-lg)
- 2 paragrafos stacked, gap 2.5rem

### Tipografia
- Headline: Gilda Display, font-size clamp(2rem, 3.5vw, 3rem), line-height 1.2, color var(--color-text)
- Paragrafos: Libre Franklin 300, font-size 1.15rem, line-height 1.8, color var(--color-text-muted)

### Cores
- Background gradiente sutil: #fffcfb para #ede0db
- Headline: #4a1b38
- Body: #8e657f

### Elementos Visuais
- Volumetric Light Leak: div position absolute, width 500px, height 200px, background linear-gradient(90deg, transparent, rgba(209,140,131,0.12), transparent), transform rotate(-15deg), top 30%, right -10%, mix-blend-mode screen, pointer-events none, z-index 0
- Segundo light leak menor: 300px x 150px, mesma logica, bottom 20%, left -5%, rotate(10deg), opacity 0.08

### Animacoes de Scroll
- Headline: data-aos="fade-up", duracao 1000ms
- Paragrafos: data-aos="fade-up", stagger delay 200ms
- Light leaks: GSAP ScrollTrigger scrub, translateX de -100px ate 100px ao longo do scroll da secao, criando varredura lenta

### Hover e Touch
- Nenhum elemento interativo alem do texto

### Responsividade
- 768px: light leaks reduzem em escala para 60% do tamanho, headline font-size ajusta

---

## Secao 8: O Impacto Clinico Replicado (Prova Social)

### Arquetipo e Constraints
- Arquetipo: Balanced
- Constraints: Glassmorphism Agressivo, Stagger, Hover Scale
- Justificativa: Equilibrio visual para nao competir com o conteudo emocional dos depoimentos. Glassmorphism mantem coerencia com o hero e secao 2. Stagger anima a entrada sequencial dos depoimentos.

### Conteudo

**Headline:**
"Participantes que aplicaram a logica clinica deste Workshop relatam as suas transicoes de saude."

**Depoimentos (placeholder para depoimentos reais):**
- Depoimento 1: "Falar sobre o aumento de energia..."
- Depoimento 2: "A melhora brutal no humor e no foco..."
- Depoimento 3: "Dores eliminadas, ciclo regularizado..."

*Nota para o desenvolvedor: estes textos sao placeholders. Substituir por depoimentos reais quando fornecidos.*

### Layout
- Background: var(--color-bg)
- Padding: var(--spacing-xl) var(--spacing-md)
- Container: max-width 1300px, margin 0 auto
- Headline centrada: max-width 800px, margin 0 auto, margin-bottom var(--spacing-lg)
- Grid de depoimentos: grid-template-columns repeat(3, 1fr), gap 2rem
- Cada card de depoimento: padding 40px 30px, background var(--color-surface) com backdrop-filter blur(20px), border 1px solid rgba(255,255,255,0.7), border-radius 24px, box-shadow 0 20px 50px rgba(74,27,56,0.04)

### Tipografia
- Headline: Gilda Display, font-size clamp(1.8rem, 3vw, 2.8rem), line-height 1.3, color var(--color-text), text-align center
- Depoimento texto: Gilda Display italic, font-size 1.2rem, line-height 1.6, color var(--color-text-muted)
- Nome da pessoa (quando fornecido): Libre Franklin 500, font-size 0.85rem, text-transform uppercase, letter-spacing 0.1em, color var(--color-accent-dark), margin-top 1.5rem
- Aspas decorativas: pseudo-elemento ::before, content open-quote unicode ("), Gilda Display, font-size 4rem, color var(--color-accent), opacity 0.2, position absolute, top 15px, left 20px

### Cores
- Cards: rgba(255,255,255,0.6) com backdrop blur
- Aspas: #d18c83 a 20% opacidade
- Texto depoimento: #8e657f
- Nome: #b56358

### Elementos Visuais
- Aspas decorativas gigantes em cada card (ver tipografia)
- Nenhuma imagem fotografica — respeitando a indicacao de depoimentos textuais

### Animacoes de Scroll
- Headline: data-aos="fade-up"
- Cards: stagger com data-aos="fade-up", delay 150ms entre cada (0, 150, 300ms)

### Hover e Touch
- Card hover: transform scale(1.03), box-shadow 0 30px 60px rgba(74,27,56,0.08), transition all 0.5s var(--ease-elegant)
- Touch: active state — transform scale(0.98), transition 0.2s

### Responsividade
- 1024px: grid-template-columns repeat(2, 1fr)
- 768px: grid-template-columns 1fr, cards max-width 500px margin 0 auto

---

## Secao 9: O Pacote de Resolucao (A Oferta)

### Arquetipo e Constraints
- Arquetipo: Framed Abstraction
- Constraints: High Contrast, Hover Glow, Breathing
- Justificativa: O "frame" visual emoldura a oferta inteira como uma peca de alta costura. O alto contraste (dark mode novamente) marca esta como a secao de conversao principal. O breathing no preco cria urgencia sutil. O glow no CTA maximiza a taxa de clique.

### Conteudo

**Headline:**
"O acervo total de intervencao clinica em condicao de entrada acessivel."

**Paragrafo:**
"O compromisso de hoje garante a imersao completa, mais o arsenal de estudo, para que a execucao do tratamento seja infalivel no seu dia a dia."

**Lista do Acervo:**
1. Entrada Nominal para a sala de transmissao dia 28 de marco (09h as 18h)
2. Metodo completo documentado do Protocolo Borges Funcional
3. Os 5 Livros Digitais Tecnicos
4. Acesso Total as Aulas Restritas da Fase de Preparacao
5. Materiais e Fichas Complementares
6. Tempo Reservado para a Secao de Tira-Duvidas Direto Comigo

**Preco:**
"O Custo de Acesso ao Pacote Completo:"
"Tudo isso requer apenas um investimento de R$ 47,00."

**CTA:** "Garantir meu ingresso"

### Layout
- Dark mode localizado: background #4a1b38
- Padding: var(--spacing-xl) var(--spacing-md)
- Container: max-width 900px, centrado
- "Frame" visual: border 1px solid rgba(209,140,131,0.2), border-radius 40px, padding var(--spacing-lg), margin 0 auto, position relative
- Dentro do frame: tudo centrado
- Headline + paragrafo no topo
- Lista do acervo: display flex, flex-direction column, gap 1rem, text-align left, max-width 600px, margin 0 auto, margin-top var(--spacing-md)
- Preco: separado por linha decorativa, grande destaque
- CTA abaixo do preco

### Tipografia
- Headline: Gilda Display, font-size clamp(2rem, 3.5vw, 3rem), line-height 1.2, color #fbeae8, text-align center
- Paragrafo: Libre Franklin 300, font-size 1.1rem, line-height 1.7, color rgba(251,234,232,0.65), text-align center
- Numero do item: Gilda Display, font-size 1rem, color #d18c83, margin-right 10px
- Texto do item: Libre Franklin 400, font-size 1.05rem, color rgba(251,234,232,0.85), line-height 1.5
- Label preco: Libre Franklin 300, font-size 0.9rem, uppercase, letter-spacing 0.15em, color rgba(251,234,232,0.5)
- Valor R$ 47,00: Gilda Display, font-size clamp(3rem, 5vw, 5rem), color #d18c83, line-height 1

### Cores
- Background: #4a1b38
- Frame border: rgba(209,140,131,0.2)
- Headline: #fbeae8
- Body: rgba(251,234,232,0.65)
- Items lista: rgba(251,234,232,0.85)
- Numeros: #d18c83
- Preco: #d18c83
- CTA: background #d18c83, color #4a1b38, hover background #fbeae8

### Elementos Visuais
- Frame com cantos (pseudo-elementos nos 4 cantos): 4 divs absolutas de 30px x 30px, border nas arestas externas de 1px solid rgba(209,140,131,0.3), posicionadas nos 4 cantos do frame interior (top-left: border-top + border-left, top-right: border-top + border-right, etc.)
- Linha divisoria antes do preco: width 60px, height 1px, background #d18c83, opacity 0.4, margin 40px auto 30px
- Aura ambiental: 1 blob circular, 350px, background radial-gradient(#d18c83 a 8%, transparent), position absolute, bottom -100px, right -100px, blur 100px

### Animacoes de Scroll
- Frame inteiro: data-aos="fade-up", duracao 1200ms, ease-out
- Itens da lista: stagger data-aos="fade-up", delay 100ms cada
- Preco: data-aos="fade-up", delay 800ms
- CTA: data-aos="fade-up", delay 1000ms
- Preco: animacao de breathing — CSS keyframe que faz scale de 1 para 1.03 e volta, duracao 3s, infinite, ease-in-out, sutil

### Hover e Touch
- CTA hover: transform translateY(-4px) scale(1.02), box-shadow 0 0 40px rgba(209,140,131,0.4) (glow rose gold), transition all 0.5s ease
- Items da lista hover: nenhum — nao sao interativos
- Frame hover: border-color intensifica para rgba(209,140,131,0.4), transition border-color 0.5s ease

### Responsividade
- 1024px: padding frame reduz para var(--spacing-md)
- 768px: preco font-size 3rem, items font-size 1rem, frame padding 40px 20px, border-radius 30px

---

## Secao 10: O Diretor Clinico (A Autoridade Medica)

### Arquetipo e Constraints
- Arquetipo: Photo Essay
- Constraints: Asymmetric Padding, Bleed Left, Fade Left
- Justificativa: A secao de autoridade medica exige presenca visual do doutor. O layout assimetrico com sangria na esquerda para a foto e padding exagerado na direita para a bio cria a sensacao de portfolio profissional editorial.

### Conteudo

**Headline:**
"Conheca o Dr. Demian Borges"

**Bio completa:**
"A ciencia medica nao aceita meias verdades. Com graduacao na Universidade Federal do Maranhao e Residencia Medica consolidada, Demian Borges e um Especialista em Cirurgia Geral, carregando sobre as costas a responsabilidade de terapias de alta complexidade. Possui Especializacao em Terapia Intensiva pela AMIB, aprofundamento constante em Endocrinologia e Metabologia e atua como Mestrando em Gestao em Saude diretamente nos Estados Unidos, pais onde tambem firmou a sua base de Pesquisa e Especialidade Clinica no uso farmacologico de Oleos Essenciais."

"Foi a lideranca e Diretor Tecnico de multiplos complexos hospitalares, tomando a frente como Diretor Medico de diversas Unidades de Terapia Intensiva (UTI), conduzindo casos criticos onde o erro nao e uma opcao."

"No comando do Workshop Saude da Mulher, o Dr. Demian converte toda a sua bagagem cirurgica e de suporte avancado para desenhar as bases do restabelecimento preventivo. Ele vai guiar a sua rota de saida da inflamacao cronica utilizando o cruzamento clinico perfeito entre hormonios bioidenticos, nutricao funcional e a ciencia pura aplicavel dos oleos essenciais."

### Layout
- Background: var(--color-bg)
- Padding: var(--spacing-xl) 0 var(--spacing-xl) var(--spacing-md)
- Container: max-width 1300px, margin 0 auto
- Grid assimetrico: grid-template-columns 5fr 5fr, gap 0 (sem gap, as colunas se abutam)
- Coluna esquerda: imagem do doutor — sangra na borda esquerda (padding-left 0, imagem vai ate a borda da viewport)
  - Container da foto: height 700px, border-radius 0 200px 200px 0 (cantos arredondados organicos so na direita), overflow hidden
  - Foto: object-fit cover, width 100%, height 120% (para parallax), transform translateY(-10%)
- Coluna direita: padding-left var(--spacing-lg), padding-right var(--spacing-md), display flex, flex-direction column, justify-content center
- Headline acima da bio, linha decorativa abaixo

### Tipografia
- Headline: Gilda Display, font-size clamp(2rem, 3.5vw, 3.2rem), line-height 1.2, color var(--color-text), margin-bottom 1rem
- Bio paragrafos: Libre Franklin 300, font-size 1.1rem, line-height 1.8, color var(--color-text-muted), margin-bottom 2rem
- Titulos/cargos em destaque dentro da bio (Especialista, Diretor Medico, etc.): font-weight 500, color var(--color-text)

### Cores
- Background: #fffcfb
- Headline: #4a1b38
- Body: #8e657f
- Destaques: #4a1b38

### Elementos Visuais
- **Imagem real do Dr. Demian Borges.** Se nao disponivel no projeto, instruir o desenvolvedor a solicitar ao cliente uma foto profissional em alta resolucao. Como placeholder, buscar:
  - Buscar em Unsplash: https://unsplash.com/s/photos/doctor-professional-portrait — selecionar foto de medico masculino com pose profissional, iluminacao cinematografica, fundo simples
  - **Baixar para /images/dr-demian.jpg e servir via CDN: /.netlify/images?url=/images/dr-demian.jpg&w=1200&q=80**
- Overlay na foto: linear-gradient(to right, transparent 60%, var(--color-bg) 100%) — fade suave para integrar com a coluna de texto
- Linha decorativa abaixo da headline: width 60px, height 1px, background var(--color-accent), margin-bottom var(--spacing-md)

### Animacoes de Scroll
- Foto: data-aos="fade-right", duracao 1200ms, ease-out
- Headline: data-aos="fade-up", delay 200ms
- Bio paragrafos: data-aos="fade-up", stagger delay 200ms
- Parallax na foto: GSAP ScrollTrigger scrub, translateY de -10% a 5%

### Hover e Touch
- Nenhum elemento interativo principal
- Foto: sutil zoom no hover — transform scale(1.03), transition transform 1.2s var(--ease-elegant), overflow hidden no container

### Responsividade
- 1024px: grid 1 coluna, foto carrega primeiro com height 500px, border-radius 0 0 30px 30px, coluna texto padding normal
- 768px: foto height 400px

---

## Secao 11: Perguntas Frequentes do Paciente (FAQ)

### Arquetipo e Constraints
- Arquetipo: Reveal on Demand
- Constraints: Container Narrow, Hover Underline, Fade Up
- Justificativa: O reveal on demand permite manter a pagina limpa mostrando apenas as perguntas, expandindo as respostas com clique. O container estreito maximiza a legibilidade. O hover underline nos titulos das perguntas cria affordance de interatividade.

### Conteudo

**Headline:**
"Perguntas Frequentes"

**Pergunta 1: "O Workshop sera registrado para estudo posterior?"**
"O ingresso fundamental confere acesso prioritario para a transmissao e aos exercicios realizados ao vivo -- o cenario onde de fato conduziremos os diagnosticos e onde o aprendizado alcanca sua forca maxima. Caso voce queira garantir tambem o acesso definitivo as gravacoes organizadas para estudar os pormenores na velocidade que desejar, um passe adicional exclusivo sera oferecido como escolha assim que chegar a etapa de pagamento."

**Pergunta 2: "Terei acesso imediato a todas as apostilas e livros citados?"**
"Sim. No instante em que o sistema aprova a sua compra, o seu acesso para a nossa Fase de Preparacao e disparado para o seu e-mail junto de toda a prateleira de livros digitais. Porem, preste atencao: alguns materiais e principalmente o Template Base de Intervencao Oficial do Protocolo Borges requerem, para destravamento, uma chave codificada. Eu entregarei essa chave apenas no chat fechado do ambiente de transmissao ao vivo. A sua presenca e indispensavel para compor a espinha dorsal do metodo."

**Pergunta 3: "Como funciona a mecanica para garantir a consulta guiada ao vivo?"**
"O seu registro de participacao ja embute o seu nome e os seus dados no banco de concorrentes aptos. Durante a evolucao tecnica do nosso evento, realizaremos um sorteio nominal. O requisito obrigatorio e estar on-line dentro da sala no momento exato dessa chamada, respondendo afirmativo: desta forma assumimos os seus dados medicos anonimizados e estruturamos ao vivo o protocolo base da sua resolucao particular."

**Pergunta 4: "Preciso adquirir frascos de Oleos Essenciais antes de iniciar o Workshop?"**
"Absolutamente nao. A maior arma de instrucao do Workshop e calibrar o seu julgamento analitico antes de qualquer intervencao de farmacia natural ou consumo precipitado. Entregaremos a prescricao precisa e exata direcionada as suas necessidades organicas; evite queimar recursos adquirindo suprimentos errados. Espere pelo metodo."

### Layout
- Background: var(--color-lotus-light) #fbeae8
- Padding: var(--spacing-xl) var(--spacing-md)
- Container ESTREITO: max-width 750px, margin 0 auto
- Headline centrada, margin-bottom var(--spacing-lg)
- Cada FAQ item: border-bottom 1px solid rgba(74,27,56,0.08), padding 30px 0
- Pergunta: cursor pointer, display flex, justify-content space-between, align-items center
- Resposta: max-height 0, overflow hidden, transition max-height 0.5s var(--ease-elegant), padding 0. Quando aberta: max-height 500px, padding-top 1.5rem
- Icone toggle: pseudo-elemento "+" que rotaciona para "x" quando aberto. Width 20px, height 20px, position relative, flexshrink 0. Linhas de 1px formando + via ::before e ::after, transition transform 0.4s ease

### Tipografia
- Headline: Gilda Display, font-size clamp(1.8rem, 3vw, 2.8rem), line-height 1.2, color var(--color-text), text-align center
- Pergunta: Libre Franklin 500, font-size clamp(1rem, 1.2vw, 1.15rem), line-height 1.4, color var(--color-text)
- Resposta: Libre Franklin 300, font-size 1.05rem, line-height 1.8, color var(--color-text-muted)
- Palavras enfatizadas nas respostas (Fase de Preparacao, etc.): font-weight 500, color var(--color-text)

### Cores
- Background: #fbeae8
- Pergunta text: #4a1b38
- Pergunta hover: #b56358
- Resposta text: #8e657f
- Icone +: #d18c83
- Border: rgba(74,27,56,0.08)

### Elementos Visuais
- Zero decoracao visual. Pureza maxima. O fundo blush e suficiente.
- Icone + composto por 2 linhas CSS (::before e ::after do toggle element)

### Animacoes de Scroll
- Headline: data-aos="fade-up"
- FAQ items: stagger data-aos="fade-up", delay 100ms entre cada
- Abertura da resposta: max-height transition 0.5s ease, com opacity de 0 para 1 em 0.3s delay 0.1s

### Hover e Touch
- Pergunta hover: color muda para var(--color-accent-dark), underline animado via pseudo-elemento ::after — width de 0% para 100%, height 1px, background var(--color-accent), transition width 0.4s ease, bottom -2px
- Icone + hover: color var(--color-accent-dark)
- Touch: active state com opacity 0.8

### Responsividade
- 768px: padding FAQ items 20px 0, font sizes levemente reduzidos

---

## Secao Footer / CTA Final

### Arquetipo e Constraints
- Arquetipo: Isolamento de Mascara
- Constraints: Dark Mode, Breathing, Hover Glow
- Justificativa: O footer funciona como ultimo CTA antes de o usuario sair. O dark mode retoma o plum. O breathing no botao final cria urgencia. O isolamento foca toda a atencao no CTA.

### Conteudo
- CTA final: "Garantir meu ingresso" (ultimo push)
- Nota: "R$ 47,00 . Compra 100% segura"
- Copyright: "Dr. Demian Borges . Todos os direitos reservados"

### Layout
- Background: #4a1b38
- Padding: 80px var(--spacing-md) 40px
- Container: max-width 600px, margin 0 auto, text-align center
- CTA grande e centrado
- Nota abaixo do CTA
- Copyright no fundo, separado por linha fina

### Tipografia
- CTA: botao grande — padding 1.5rem 4rem, font-size 1rem, uppercase, letter-spacing 0.15em
- Nota: Libre Franklin 300, font-size 0.85rem, color rgba(251,234,232,0.5)
- Copyright: Libre Franklin 300, font-size 0.75rem, color rgba(251,234,232,0.3), margin-top 60px

### Cores
- Background: #4a1b38
- CTA: background #d18c83, color #4a1b38
- CTA hover: background #fbeae8, box-shadow glow
- Nota: rgba(251,234,232,0.5)
- Copyright: rgba(251,234,232,0.3)
- Linha copyright: rgba(251,234,232,0.06)

### Elementos Visuais
- Linha separadora antes copyright: width 40px, height 1px, opacity 0.2, background #fbeae8, margin auto
- CTA com breathing sutil: keyframe scale 1 a 1.02 em 3s, infinite, ease-in-out

### Animacoes de Scroll
- CTA: data-aos="fade-up"

### Hover e Touch
- CTA hover: transform translateY(-4px), box-shadow 0 0 50px rgba(209,140,131,0.5), transition all 0.5s ease
- CTA active: transform scale(0.97)

### Responsividade
- 768px: padding 60px 20px 30px, CTA padding reduz

---

## Notas Tecnicas Gerais

### Scripts Pesados
- Lenis e GSAP ja carregam no head (aprovado). Manter.
- AOS.js: carregar via CDN para as animacoes data-aos. Inicializar com `disableMutationObserver: true`.
- Nenhuma biblioteca adicional necessaria. Tudo via CSS puro + GSAP + AOS.
- FAQ accordion: JavaScript vanilla puro (querySelectorAll, addEventListener click, toggle class).

### Imagens
- Hero: botanical-spa.jpg (ja existe em /images/)
- Secao 2: women_wellness_abstract.png (ja existe em /images/)
- Secao 10 (Doutor): solicitar foto real do cliente. Placeholder via Unsplash se necessario.
- Todas servidas via CDN: /.netlify/images?url=/images/NOME&w=LARGURA&q=QUALIDADE
- Todas com width e height numericos no HTML
- Hero image: loading="eager", demais: loading="lazy"

### Performance
- CSS principal sincrono (bloqueante) durante desenvolvimento
- Fontes com preconnect + display=swap (ja implementado)
- Hero sem opacity:0 inicial, sem data-aos, sem transform escondendo
- Container hero com min-height fixo (100vh)
