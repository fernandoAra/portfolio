---
projectId: graph-hides
locale: pt-BR
slug: what-the-graph-hides
title: O Que o Grafo Esconde
eyebrow: Visualização crítica · Redes interativas
summary: Uma exposição de rede interativa que torna layout, omissão, incerteza e ênfase visíveis como escolhas editoriais.
year: "2026"
role: Design e desenvolvimento
contribution: Enquadramento crítico, interação, controles do grafo, modelo de dados e publicação estática.
disciplines: [Visualização de dados, Design de interação, Humanidades digitais]
tools: [React, Cytoscape, Vite]
traits: [Systems, Interaction, Visuals, Code]
cost: 2
featured: true
detailed: true
repository: https://github.com/fernandoAra/IL181_Interactive_network
liveUrl: https://fernandoara.github.io/IL181_Interactive_network/
accent: coral
order: 3
draft: false
---

## A premissa

Diagramas de rede costumam parecer objetivos, embora limites, rótulos, layouts e ênfases alterem a interpretação. Este projeto de humanidades digitais transforma essas escolhas em controles, em vez de escondê-las em um único grafo final.

## Modelo de interação

Presets demonstram enquadramentos distintos: contexto completo, contexto removido, diagrama limpo de propriedade, hierarquia ordenada, atores centrais e evidência incompleta. Depois, a pessoa pode alterar filtros e layouts; a interface então identifica o resultado como uma visão personalizada.

## Restrições responsáveis

O conjunto de dados é pequeno e pedagógico. Os pesos de centralidade são descritos como manuais, não como uma descoberta calculada. Nós e relações incertos permanecem visíveis por meio de estilo e notas dedicadas.

## Estrutura técnica

Um contrato JSON local controla nós, relações, contexto, status da evidência e incerteza. O navegador executa filtros e mudanças de layout sem backend.

## Reflexão

A interface funciona melhor quando explicita a própria retórica. Uma próxima etapa deve observar quais transições ajudam participantes a reconhecer o enquadramento e onde os controles adicionam complexidade desnecessária.
