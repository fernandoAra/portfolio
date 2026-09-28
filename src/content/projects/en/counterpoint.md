---
projectId: counterpoint
locale: en
slug: counterpoint
title: Counterpoint
eyebrow: Realtime AI · Product systems
summary: A meeting-side agent concept that waits for a real conversational opening before offering a critique, alternative, or question.
year: "2026"
role: Product architecture and prototyping
contribution: Interaction boundaries, turn-taking model, system contracts, and evidence workflow.
disciplines: [AI product design, Systems design, Realtime interaction]
tools: [TypeScript, Chrome extensions, Realtime audio]
traits: [Systems, Code, Interaction, Performance]
cost: 3
featured: false
detailed: false
repository: https://github.com/F1NH4WK/counterpoint
accent: lime
order: 5
draft: false
---

## Project note

Counterpoint explores an AI participant for fast product brainstorms. A browser extension captures meeting-tab audio only after explicit consent, detects speech and silence locally, and lets a turn-taking gate decide whether a suggestion is still timely.

The MVP deliberately excludes login, persistent meeting history, autonomous messages, and write-enabled internal tools. External evidence is requested only when the team needs it, keeping interruptions and unnecessary calls out of the default loop.
