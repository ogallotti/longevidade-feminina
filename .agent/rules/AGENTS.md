---
trigger: always_on
---

# Comunicação em Português Brasileiro

Todas as mensagens, explicações e respostas devem ser em Português do Brasil. Termos técnicos e código permanecem em inglês.

# AUTONOMIA TOTAL NO TERMINAL

**Este framework é para leigos. O usuário NÃO sabe usar terminal.**

VOCÊ DEVE executar TODOS os comandos sozinho. NUNCA peça para o usuário:
- "Rode este comando no terminal"
- "Execute X manualmente"
- "Abra o terminal e faça Y"

**Comandos interativos (netlify init, gh auth, etc.):**
1. Execute o comando
2. Envie os inputs necessários para cada prompt (1, Enter, nome, etc.)
3. Continue até concluir

**A única exceção:** Quando o navegador abrir para OAuth (autorização GitHub/Netlify), informe ao usuário que ele precisa clicar em "Autorizar" no navegador que abriu automaticamente.

**Se algo falhar:** Tente resolver sozinho. Só peça ajuda ao usuário em último caso, e mesmo assim, nunca peça para ele executar comandos.

# Servidor Local

Use a skill `local-server` para gerenciar o servidor de desenvolvimento. A skill cuida de:
- Verificar se já existe um servidor rodando
- Encontrar uma porta disponível se necessário
- Fornecer a URL correta

NUNCA rode múltiplas instâncias do servidor para a mesma pasta.

**NUNCA use servidores alternativos** (`python -m http.server`, `npx serve`, etc.). Se o Netlify Dev falhar (permissão, porta, erro), corrija o problema seguindo o Troubleshooting da skill `local-server`. NUNCA suba outro servidor como fallback — o CDN de imagens e redirects só funcionam com Netlify Dev.

# Imagens via Netlify CDN

Formato: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`. NUNCA use caminhos diretos para imagens. A pasta `/images/` DEVE estar na **raiz do projeto** (junto ao `netlify.toml`), NUNCA dentro da pasta da página. Ao baixar imagens, sempre navegue para a raiz do projeto antes de criar a pasta e salvar os arquivos.

# Hero sem animação de ENTRADA

NUNCA adicione animações de entrada que escondam o conteúdo (AOS, fade, opacity:0) no hero. O hero deve aparecer instantaneamente. Animações ambientais e contínuas (loops CSS, Canvas, partículas, WebGL) são OBRIGATÓRIAS e devem iniciar junto com o primeiro frame.

# Formulário

Use o formulário existente no index.html como base. Ele já tem intl-tel-input e Netlify Forms configurados.

# AOS em elementos de scroll

Use `data-aos="fade-up"` em elementos que aparecem no scroll. NUNCA no hero.
Ao inicializar AOS, SEMPRE use `disableMutationObserver: true` para evitar CLS.

# Performance Preventiva (aplicar durante desenvolvimento)

**Imagens:** Sempre com width/height numéricos e CDN. Hero com `loading="eager"`, resto com `loading="lazy"`.

**Scripts pesados (Three.js, GSAP, partículas):** NUNCA import estático. SEMPRE Dynamic Import + IntersectionObserver para carregar quando a seção ficar visível. NUNCA linkar no HTML.

**Fontes:** Manter síncronas com `preconnect` + `display=swap`. NUNCA usar `media="print" onload` (atrasa download e anula preconnect). Max 3 weights.

**Hero:** NUNCA opacity:0, transform inicial escondendo conteúdo, ou data-aos no hero. Container com min-height fixo. Hero DEVE ter animações ambientais e contínuas desde o primeiro frame.

**CSS principal:** Durante desenvolvimento, manter síncrono (bloqueante). No `/otimizar`, pode ser convertido para critical CSS inline + async (ver skill optimize seção 12). NUNCA usar `media="print" onload` SEM critical CSS inline (causa CLS massivo).

# Caminhos absolutos

Comece caminhos de arquivos com `/`. NUNCA use caminhos relativos como `./` ou `../`.

# NUNCA instalar pacotes

Este template não tem build step. NUNCA rode npm, node, ou comandos de build.

# NUNCA usar emojis

Não use emojis em nenhum lugar. A não ser se for solicitado explicitamente pelo usuário

# Socratic Gate (Perguntar Antes de Implementar)

Para tarefas complexas ou ambíguas, PERGUNTE antes de implementar:

- Requisito vago → Pergunte: "O que exatamente você quer?"
- Múltiplas abordagens possíveis → Pergunte: "Prefere A ou B?"
- Impacto em outras partes → Pergunte: "Isso vai afetar X, posso prosseguir?"
- Decisão de design → Pergunte: "Qual estilo prefere?"

**Regra:** Se houver 1% de dúvida, PERGUNTE. Não assuma.

**Exceção:** Correções óbvias de bugs ou erros de sintaxe podem ser feitas diretamente.

# NUNCA proceder automaticamente

Cada workflow tem um escopo definido. Ao finalizar um workflow:
- PARE COMPLETAMENTE
- Aguarde instrução explícita do usuário
- NUNCA inicie o próximo workflow automaticamente
- NUNCA comece a implementar código sem instrução explícita
- Mesmo se o usuário disser "ok" ou "aprovado", apenas confirme e aguarde comando para próxima ação

# Estrutura de Pastas e Versões

Cada página do site fica em sua própria pasta. A versão ATIVA sempre fica na raiz da pasta da página.

```
projeto/
├── pagina-vendas/
│   ├── index.html          ← versão ATIVA
│   ├── style.css
│   ├── copy.md
│   ├── layout.md
│   ├── _backup_v1/         ← versão anterior
│   └── _backup_v2/         ← outra versão anterior
├── pagina-obrigado/
│   ├── index.html
│   └── style.css
└── .agent/
```

**Regras:**
1. `/gerar-copy` cria a pasta da página com o nome fornecido
2. Versão ativa = SEMPRE na raiz da pasta da página
3. Ao pedir nova versão → mover arquivos atuais para `_backup_vN/` e criar nova versão na raiz
4. Pastas com prefixo `_backup_` são versões antigas (ignorar em operações normais)
5. Numeração sequencial: `_backup_v1/`, `_backup_v2/`, etc.