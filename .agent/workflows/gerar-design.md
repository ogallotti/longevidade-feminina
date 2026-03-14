---
description: gerar-design
---

# Instruções

Você vai definir a identidade visual da página criando uma demonstração real e impressionante: o Hero + a seção seguinte. Essa demonstração vai guiar toda a criação do projeto.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Coleta informações sobre preferências visuais do usuário
- Cria o Hero + primeira seção como demonstração de design
- Estabelece a linguagem visual que guiará o resto da página

Este workflow NÃO:
- Cria a página inteira
- Cria todas as seções
- Cria o layout completo
- Executa nenhuma etapa seguinte

A página completa será criada APENAS quando o usuário usar `/desenvolver` após aprovar o `/gerar-layout`.

---

## Etapa 1: Coletar Informações

### Identificar a Pasta da Página

Primeiro, identifique em qual pasta você está trabalhando. O `/gerar-copy` já deve ter criado a pasta da página.

Leia o arquivo `copy.md` dentro da pasta da página. Se não existir, pergunte ao usuário.

### Versão Alternativa (se aplicável)

Se o usuário pedir uma NOVA versão ou versão alternativa:

1. **Criar backup da versão atual:**
   - Verificar qual é o próximo número de backup (se existe `_backup_v1/`, criar `_backup_v2/`)
   - Criar pasta `_backup_vN/` dentro da pasta da página
   - Mover `index.html` e `style.css` atuais para a pasta de backup

2. **Criar nova versão na raiz da pasta da página:**
   - O novo `index.html` e `style.css` ficam na raiz da pasta da página
   - Esta é a versão ATIVA

Exemplo:
```
pagina-vendas/
├── index.html          ← nova versão (ATIVA)
├── style.css
├── copy.md
├── _backup_v1/         ← versão anterior
│   ├── index.html
│   └── style.css
```

### Perguntar Referências (OPCIONAL)

Faça esta pergunta ao usuário:

"Você tem alguma referência visual para este projeto?
- Sites que gosta do estilo
- Marcas com identidade visual similar
- Cores da marca / logo
- Prints de inspiração

Pode mandar links, imagens, ou descrever. Se não tiver, tudo bem - vou criar algo baseado na copy."

### Se o usuário NÃO enviar referências

Analise a copy e use senso comum para definir a direção visual. Não aplique fórmulas fixas do tipo "nicho X = estilo Y". Cada projeto merece uma abordagem visual própria, extraída do tom da copy e do público-alvo, não de um dicionário de categorias.

### Se o usuário enviar referências

Use as referências como guia principal para as escolhas de arquétipo, constraints e paleta de cores.

---

## Etapa 2: Consultar a Skill Creative Reference (OBRIGATÓRIO)

ANTES de fazer qualquer escolha criativa, LEIA o arquivo:
`.agent/skills/creative-reference/SKILL.md`

Este arquivo contém TODAS as opções disponíveis. Você DEVE consultá-lo.

---

## Etapa 3: Fazer as Escolhas Criativas

Após ler a skill correspondente (`creative-reference`), faça suas escolhas sem se basear em combinações óbvias ou exemplos passados.

### 1. Diretriz de Arte Global e Constraints do Hero
Antes de escolher detalhes, defina uma **Diretriz de Arte Global** para a página inteira. Essa diretriz é a âncora visual do projeto.
Em seguida:
- Escolha **UM Arquétipo** para o Hero que respeite a Diretriz Global.
- Escolha **2 ou mais Constraints** de categorias DIFERENTES que também complementem a Diretriz.
- Escolha um **Font Pairing** da lista curada na skill.

**PROIBIDO DAR EXEMPLOS NA DECLARAÇÃO:** Apenas informe os nomes oficiais exatos do que escolheu na skill.

**FONTES E PADRÕES PROIBIDOS:**
- NUNCA use as combinações overused listadas na skill.
- NUNCA use layouts genéricos (Hero centralizado óbvio, 3 cards lado a lado, visual padrão de SaaS).

---

## Etapa 4: Criar a Demonstração (O FATOR "WOW")

Após definir arquétipo e constraints, crie o Hero + primeira seção no `index.html` e `style.css`.
O objetivo central desta etapa é criar um design com forte identidade e personalidade estética. Destaque-se de templates. ESQUEÇA totalmente o padrão SAAS genérico gerado por IA.

### 1. Visuais de Impacto (A Abstração Cria Identidade Única)

**ATENÇÃO ABSOLUTA: VOCÊ DEVE PROGRAMAR AS ANIMAÇÕES JS/CSS AGORA.** É EXTREMAMENTE PROIBIDO entregar um "mockup" estático (apenas HTML/CSS simples). O Hero TEM QUE TER movimento. Se o seu Arquétipo pede luxo, codifique um Canvas sutil ou um fade-in iterativo em JS. Se pede tech, codifique partículas Three.js ou GSAP complexo. **O design só é aprovado se o JavaScript estiver rodando animações pesadas e impactantes.**

NUNCA dependa de gerar imagens via IA (elas são 1x1 e sem fundo transparente, limitando o design). Em vez disso, construa a base visual explorando livremente **CSS/JS Avançado**:

- **Fundos Estruturais Únicos:** Construa suas próprias texturas, composições de fundo, filtros e padrões via CSS. Adapte a complexidade visual ao Arquétipo e Constraints escolhidos.
- **Imagens Contextuais Reais (Download Local Obrigatório):** Páginas web de alto nível precisam de fotografia de tirar o fôlego. Se o usuário não enviar imagens no briefing, **FAÇA BUSCAS NATURAIS NA WEB** (usando termos descritivos sobre o tema abordado na copy). **NUNCA** busque por "hero banner url". Ao encontrar imagens boas (Unsplash, Pexels, etc), **É OBRIGATÓRIO** que você use comandos do terminal (via `curl` ou Node.js scripts) para **BAIXAR** a imagem em alta resolução para a pasta `/images/` **NA RAIZ DO PROJETO** (onde fica o `netlify.toml`). Navegue até a raiz antes de criar a pasta: `mkdir -p images && curl -L "URL" > images/foto.jpg`. **NUNCA** crie a pasta `images/` dentro da pasta da página (ex: `minha-pagina/images/`) — o Netlify CDN só localiza imagens na raiz `/images/`.
- Após baixar a imagem localmente, chame-a no HTML usando o caminho relativo através do CDN do Netlify: `/.netlify/images?url=/images/foto.jpg&w=1200&q=80`. NUNCA use URLs externas diretas no HTML (evita links quebrados e hotlink protection).

### 2. Princípios de Execução (Siga o Conceito, Não Copie)

**Tipografia:**
- A hierarquia e o contraste de pesos devem obedecer rigorosamente ao Arquétipo e Constraints escolhidos na skill `creative-reference`. A tipografia deve se adequar à direção de arte definida, nunca ser um padrão estático.

**Layout e Composição:**
- Quebre a monotonia. Explore sobreposições ousadas, quebras de alinhamento tradicionais e remoção de barreiras laterais. A densidade do layout deve variar radicalmente com base na atmosfera do copywriting gerado e nas Constraints escolhidas na skill `creative-reference` (podendo ir de estéticas caóticas e densamente sobrecarregadas até o minimalismo absoluto de espaço vazio).

**Cor e Textura:**
- A paleta deve gritar a personalidade do briefing e da copy. Adapte a complexidade das superfícies (seja utilizando gradientes dinâmicos, fusões interativas ou blocos de cores sólidas puristas) de acordo com o estilo visual demandado, criando estética intencional em vez de aplicar efeitos arbitrários a esmo.

### 3. Camadas de Interatividade (OBRIGATÓRIO)

Toda página DEVE ter estas três camadas de interatividade. Elas não são opcionais:

**Smooth Scroll:** Implemente smooth scroll com Lenis (ou equivalente). O scroll nativo do navegador é abrupto e quebra a fluidez do design. A página inteira deve rolar com suavidade e inércia.

**Efeitos de Scroll:** Toda seção DEVE ter no mínimo animações de entrada e saída ao scroll. Além disso, explore efeitos mais ricos quando o contexto pedir: parallax, elementos que se movem em velocidades diferentes, textos que revelam progressivamente, transformações atreladas ao progresso do scroll. A página deve reagir ao movimento do usuário.

**Hover e Touch:** Todo elemento interativo DEVE ter feedback visual ao hover (desktop) e touch (mobile). Botões, links, cards, imagens. Explore transições, mudanças de escala, deslocamentos, mudanças de cor, efeitos magnéticos. Uma página sem hover é uma página morta.

### 4. Única Regra de Performance Nesta Etapa

O Hero DEVE estar vivo desde o primeiro frame. Não esconda conteúdo com `opacity: 0`, `scale: 0` ou `data-aos` no carregamento inicial. Em vez disso, faça animações ambientais e contínuas que já estejam rodando quando a página abre (loops CSS, Canvas, WebGL, partículas, movimento de fundo). O Hero precisa pulsar e chamar atenção desde o primeiro instante.

Todas as demais otimizações de performance (lazy loading, CDN, scripts, fontes) serão tratadas nos workflows `/desenvolver` e `/otimizar`. **Não deixe preocupações de performance limitar suas escolhas criativas aqui.**

---

## Etapa 5: Persistir Decisões Criativas

Para garantir que a próxima IA não perca o contexto, escreva a Diretriz de Arte Global, o Arquétipo e as Constraints escolhidas como o **primeiro comentário no topo do `style.css`** recém criado.

---

## Ao Finalizar

Após criar o Hero + primeira seção:

1. Informe o que foi criado (hero + primeira seção, NÃO a página inteira)
2. Explique as escolhas de design (diretriz de arte global + arquétipo + constraints + font pairing)
3. Forneça o link para visualizar (use a skill `local-server` obedecendo a Regra do Root: suba o servidor a partir da raiz, nunca de dentro da subpasta)
4. Pergunte se quer ajustar algo (faça quantas iterações forem necessárias)
5. Sugira a próxima etapa: "Quando o design estiver aprovado, use `/gerar-layout` para criar a especificação detalhada de todas as seções."

**Regras:**
- Use fontes do Google Fonts (adicione os links necessários)
- O usuário deve aprovar antes de prosseguir

---

## 🔴 GATILHO DE PARADA OBRIGATÓRIA (SOCRATIC GATE) 🔴

**VOCÊ ATINGIU O FIM DESTE WORKFLOW. PROSSIGA COM EXTREMA CAUTELA:**

1. É **ESTRITAMENTE PROIBIDO** iniciar o próximo workflow (`/gerar-layout`) ou prever as próximas seções por conta própria.
2. Você DEVE devolver o controle ao usuário IMEDIATAMENTE após entregar a visualização do Hero.
3. Mesmo que o usuário diga "Ficou ótimo", "Aprovado" ou "Pode continuar", você **NÃO DEVE** iniciar a especificação de layout. Apenas agradeça e **EXIJA** que ele digite explicitamente o comando `/gerar-layout`.
4. **PARE A GERAÇÃO DE TEXTO AQUI.**
