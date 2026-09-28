---
projectId: graph-hides
locale: en
slug: what-the-graph-hides
title: What the Graph Hides
eyebrow: Critical visualization · Interactive networks
summary: An interactive network exhibit that makes layout, omission, uncertainty, and emphasis visible as editorial choices.
year: "2026"
role: Design and development
contribution: Critical framing, interaction design, graph controls, data model, and static deployment.
disciplines: [Data visualization, Interaction design, Digital humanities]
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

## The premise

Network diagrams often look objective even though boundaries, labels, layouts, and emphasis all influence interpretation. This classroom digital-humanities project turns those choices into controls rather than hiding them behind a single finished graph.

## Interaction model

Story presets demonstrate distinct framings: full context, context stripped, a clean ownership diagram, ordered hierarchy, central actors, and incomplete evidence. Visitors can then change filters and layouts themselves, at which point the interface labels the result as a custom view.

## Responsible constraints

The dataset is deliberately small and pedagogical. Centrality weights are described as manual rather than presented as a computed discovery. Uncertain nodes and edges remain visible through dedicated styling and notes.

## Technical shape

A local JSON contract drives nodes, edges, context flags, evidence status, and uncertainty. The browser handles filtering and layout changes without a backend, keeping the project portable and inspectable.

## Reflection

The interface works best when it makes its own rhetoric explicit. Future work should observe which layout transitions help participants recognize framing most quickly and where controls add unnecessary complexity.
