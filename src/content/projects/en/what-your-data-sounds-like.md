---
projectId: data-sound
locale: en
slug: what-your-data-sounds-like
title: What Your Data Sounds Like
eyebrow: Sonification · Digital humanities
summary: A web exhibit that turns a developer's tracked week into a rhythm grid and a layered, restrained sonification.
year: "2026"
role: Design and development
contribution: Concept, interaction, data mapping, visual system, and Tone.js sonification.
disciplines: [Sound design, Creative coding, Data visualization]
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

## The question

Developer telemetry can describe time, tools, switching, and routines without ever reading source code. The project asks what that metadata makes visible—and what a quantified “data double” still leaves out.

## The approach

The exhibit maps a believable sample week into four concurrent sound layers. Overall intensity drives the foundation, project continuity shapes a second layer, language changes timbre, and fragmented activity produces sparse percussive events.

The visual rhythm grid and the sound engine share the same data source, allowing visitors to compare what they see with what they hear instead of treating the audio as decoration.

## Constraints and decisions

- The browser remains safe to publish: no API key, OAuth flow, account, or private developer data.
- Audio starts only after an explicit visitor action.
- A local sample keeps the exhibit understandable and reproducible.
- The mapping favors calm interpretation over rewards, productivity scoring, or spectacle.

## Evidence

The repository contains the sample-data contract, source-loading fallback, interactive grid, and multi-layer Tone.js implementation. It is also configured for a static GitHub Pages deployment.

## Reflection

The strongest part of the work is the shared visual and sonic data model. A future iteration should test the mappings with more listeners and provide more direct A/B controls between individual layers.
