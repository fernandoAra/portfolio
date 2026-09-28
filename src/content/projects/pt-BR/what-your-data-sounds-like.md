---
projectId: data-sound
locale: pt-BR
slug: what-your-data-sounds-like
title: O Som dos Seus Dados
eyebrow: Sonificação · Humanidades digitais
summary: Uma exposição web que transforma uma semana monitorada de desenvolvimento em uma grade rítmica e uma sonificação contida em múltiplas camadas.
year: "2026"
role: Design e desenvolvimento
contribution: Conceito, interação, mapeamento de dados, sistema visual e sonificação com Tone.js.
disciplines: [Design de som, Programação criativa, Visualização de dados]
tools: [React, Tone.js, Vite]
traits: [Sound, Interaction, Code, Visuals]
cost: 2
featured: true
detailed: true
repository: https://github.com/fernandoAra/what-your-data-sounds-like
liveUrl: https://fernandoara.github.io/what-your-data-sounds-like/
accent: cyan
order: 1
draft: false
---

## A pergunta

Telemetria de desenvolvimento consegue descrever tempo, ferramentas, mudanças de contexto e rotina sem ler o código-fonte. O projeto pergunta o que esses metadados tornam visível — e o que um “duplo de dados” quantificado ainda deixa de fora.

## A abordagem

A exposição mapeia uma semana fictícia plausível em quatro camadas sonoras simultâneas. A intensidade geral sustenta a base, a continuidade dos projetos forma uma segunda camada, as linguagens alteram o timbre e a fragmentação gera eventos percussivos esparsos.

A grade visual e o motor sonoro compartilham a mesma fonte de dados. Assim, a pessoa pode comparar o que vê com o que ouve, em vez de receber o áudio apenas como decoração.

## Restrições e decisões

- A publicação é segura: não há chave de API, OAuth, conta ou dados privados.
- O áudio começa somente após uma ação explícita.
- Uma amostra local mantém a experiência compreensível e reproduzível.
- O mapeamento favorece interpretação calma, não pontuação de produtividade.

## Evidência

O repositório contém o contrato dos dados, fallback de carregamento, grade interativa e a implementação em camadas com Tone.js, além do fluxo de publicação estática.

## Reflexão

O ponto mais forte é o modelo compartilhado entre visual e som. Uma próxima iteração deve testar os mapeamentos com mais ouvintes e oferecer comparações diretas entre as camadas.
