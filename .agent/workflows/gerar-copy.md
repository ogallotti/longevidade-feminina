---
description: gerar-copy
---

# Instruções

Você vai trabalhar na copy (textos) da página.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Cria ou melhora os textos da página
- Salva a copy estruturada no arquivo `copy.md` (UTF-8, sempre com acentuação correta em português do Brasil. NUNCA omita acentos, cedilhas ou til.)

Este workflow NÃO:
- Cria a página HTML
- Escreve CSS ou JavaScript
- Faz design
- Implementa nada visualmente
- Cria implementation plans
- Executa nenhuma etapa seguinte

## Antes de Começar

### Criar a Pasta da Página

Pergunte ao usuário qual será o nome desta página.

Crie uma pasta com este nome na raiz do projeto. Todos os arquivos desta página ficarão dentro desta pasta:

```
projeto/
├── pagina-vendas/      ← pasta criada
│   ├── copy.md         ← será criado agora
│   ├── index.html      ← será criado em /gerar-design
│   └── style.css       ← será criado em /gerar-design
└── .agent/
```

### Configurar Redirect da Home

Após criar a pasta, verifique no `netlify.toml` se já existe um redirect da home (um `[[redirects]]` com `from = "/"`).

Se **NÃO** existir nenhum redirect da home, adicione no `netlify.toml` ANTES dos outros redirects:

```toml
# Redirect da home para a página principal
[[redirects]]
  from = "/"
  to = "/NOME-DA-PAGINA/"
  status = 302
  force = true
```

Substitua `NOME-DA-PAGINA` pelo nome real da pasta criada.

Isso garante que ao acessar a raiz do site, o visitante seja redirecionado para a página principal. Sem isso, a raiz mostra uma página em branco.

Se já existir um redirect da home, **NÃO** altere — o usuário pode ter configurado manualmente para outra página.

### Entender o Contexto

1. Entenda o contexto do projeto (produto/serviço, público-alvo, objetivo)
2. Se já existir um `index.html` na pasta, leia para ver textos existentes

## Diretrizes de Copy

### Princípio Fundamental

Toda página gerada por este workflow tem algum um objetivo comercial. A copy deve construir desejo **e** conduzir o visitante até uma ação ou múltiplas ações concretas. Narrativa sem direcionamento é conteúdo editorial, não copy.

### Estrutura e Conversão

**VOCÊ DEVE Deduzir a Estrutura:** Analise o que o usuário quer vender/mostrar, e crie um fluxo narrativo inusitado e ideal para o contexto. O fluxo narrativo é livre, mas deve servir ao objetivo da página. A criatividade está em como você conduz o visitante até a ação, não em evitar que ele chegue lá.

O esqueleto inteiro da copy precisa ser extraído do que você entende como a melhor forma de envelopar aquele nicho (de forma extensa e desenvolvida). Você não precisa ter "FAQ" se o produto não pedir. Você não precisa ter "Depoimentos" se não houver prova social prévia. Inclua apenas as seções que fazem sentido para o contexto.

#### Princípios obrigatórios:

1. **Abertura com impacto e clareza:** O bloco de abertura deve cumprir duas funções simultâneas: causar impacto imediato e deixar claro o que está sendo oferecido e qual é o próximo passo do visitante.
2. **Pontos de ação ao longo da página:** O visitante deve encontrar pontos claros de ação nos momentos naturais de decisão ao longo da página. Não concentre a conversão apenas no final, e não a omita onde faz sentido.
3. **Variedade na estrutura textual:** Cada seção deve ter uma composição textual distinta das demais. Varie o ritmo entre seções para que a leitura não se torne monótona. Os elementos usados em cada bloco devem ser deduzidos do conteúdo, nunca replicados de uma fórmula fixa.
4. **Copy de fôlego:** Construa fios narrativos interligados, apresentando conceitos, sentimentos e utilidades com extensão de narrativa persuasiva. Proposições precisas sem esvaziar a oferta.

### Tom e Voz

Seu grande objetivo é NÃO PARECER UM TEMPLATE GERADO POR IA. Você é um Copywriter Sênior que equilibra construção de desejo com direcionamento para ação. Imersão e persuasão rica não existem separadas da conversão: o texto deve fazer o visitante sentir, entender e agir.

#### Como Você DEVE Escrever
1. **Densidade e Extensão:** Páginas web genuínas constroem desejo através de extensas argumentações, storytelling, detalhes táteis e imersões longas. NUNCA gere uma página minúscula e robótica. É proibido economizar palavras. Mergulhe na atmosfera do nicho e venda com grandiosidade narrativa.
2. **Tom Elevado, não Robótico:** Há uma diferença enorme entre escrever com "autoridade sem clichês" e escrever como um técnico de TI redigindo um laudo médico. Venda o cenário, o toque, a sensação, a vivência e o peso da oferta, fazendo isso usando um vocabulário amplo, poético quando couber, e elegante, rico em substantivos dinâmicos e livre das palavras clichês proibidas.
3. **Substância Textual:** Crie parágrafos substanciais que sustentem a narrativa. Um produto ou serviço não pode ser vendido com 3 linhas secas de texto; precisa de imersão descritiva (sem apelar para adjetivos baratos).

#### O que é PROIBIDO
**É TERMINANTEMENTE PROIBIDO o uso dos seguintes vícios, muletas e estruturas em 100% do texto:**

**Estruturas Sintáticas Banais:**
- **Anáforas e Paralelismo Excessivo:** Pare de começar 3 parágrafos seguidos com a mesma palavra. Isso é óbvio e cansativo.
- **Ritmo de Hemingway Falso:** Não use ponto final onde cabe uma vírgula fluida e elegante. Alterne entre frases longas com respiração poética e frases curtas sintéticas. O texto precisa de cadência e ritmo humano.
- **O Formato "X vs Y" Clichê:** Proibido o uso da fórmula "Não é um simples [X]... é um convite para [Y]", "É mais do que [X], é [Y]", "O que era [X], agora é [Y]".
- **A Revelação Épica Pré-Fabricada:** Proibido finalizar seções com antíteses dramáticas vazias como "E aqui está a verdade", "E isso é ouro", "Isso muda tudo", ou "Talvez no fim seja isso".

**Vícios Motivacionais e Anglicismos:**
A IA frequentemente escreve um "inglês aportuguesado". NUNCA use essas palavras ou gírias traduzidas no contexto de copy:
- *O jogo*, *Gamechanger*, *Virar o jogo*.
- *Invisível*, *Ruído*.
- *Poderosas*, *Experiência*, *Presença*, *Propósito*, *Estratégia*.
- *Intenção*, *Gesto*, *Eternizar*.
- E NUNCA use termos como "Silencioso" ou "Silenciosa" pra ilustrar algo escondido.

**Cacoetes de Formatação e Estilo:**
- **Zero Adjetivação em Excesso:** Se você precisa de 3 adjetivos pra descrever um produto, você falhou. Use substantivos fortes.
- **Sem Falsas Promessas de Rapidez:** Frases como "Vou direto ao ponto", "Sem rodeios" ou "Ao fazer isso".
- **PROIBIDO EMOJIS:** Em absolutamente nenhuma hipótese.
- **PROIBIDO BULLET POINTS ESTÉREIS:** Evite listas com um único substantivo jargão. Se você for usar listas ou bullets, eles DEVEM conter descrições ricas, detalhando um cenário ou uma mecânica complexa de maneira narrativa.
- **PROIBIDO EM-DASH:** Proibido o uso de travessão (— ou -) para separar reflexões no meio das frases. Use pontuação normal.
- **Cacoetes Inflados:** Proibido "No mundo acelerado de hoje", "Na era digital", "Descubra como [X] pode...", "Cansado de [Y]?".

## Sua Tarefa

Pergunte ao usuário:
- O que precisa ser criado/melhorado na copy?
- Há algum texto específico que deve ser mantido?
- Qual é o diferencial do produto/serviço?

Então crie ou melhore a copy conforme solicitado.

## Saída

Salve a copy estruturada em um arquivo `copy.md` dentro da pasta da página criada.

**Formato do arquivo:**
A saída deve ser um Markdown limpo (`copy.md`), focado exclusivamente no texto.
**NÃO EXISTE UM MOLDE DE SEÇÕES.** Arquitete o documento usando títulos (H2, H3), blockquotes e a formatação Markdown que fizer sentido para a narrativa que você criou. Não inclua anotações de design, layout ou UI. O design será definido em uma etapa separada.
Não engesse o documento. Varie a estrutura textual entre as seções.

## Ao Finalizar

Após salvar o arquivo `copy.md`:

1. Informe ao usuário que a copy foi salva
2. Apresente um resumo das seções criadas
5. Pergunte se quer ajustar algo na copy
6. Sugira a próxima etapa: "Quando a copy estiver aprovada, use `/gerar-design` para definirmos a identidade visual."

---

## 🔴 GATILHO DE PARADA OBRIGATÓRIA (SOCRATIC GATE) 🔴

**VOCÊ ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. É **ESTRITAMENTE PROIBIDO** iniciar o próximo workflow (`/gerar-design`) ou começar a escrever código (HTML/CSS) por conta própria.
2. Você DEVE devolver o controle ao usuário IMEADIATAMENTE após a mensagem de conclusão.
3. Mesmo que o usuário diga "OK", "Aprovado" ou "Pode continuar", você **NÃO DEVE** iniciar o próximo passo. Apenas responda confirmando que está pronto e **EXIJA** que ele digite explicitamente o comando `/gerar-design`.
4. **PARE A GERAÇÃO DE TEXTO AQUI.**