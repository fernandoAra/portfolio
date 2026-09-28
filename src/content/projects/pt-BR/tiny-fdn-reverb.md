---
projectId: tiny-fdn
locale: pt-BR
slug: tiny-fdn-reverb
title: Tiny FDN Reverb
eyebrow: Plugin de áudio em C++ · Pesquisa em DSP
summary: Um reverb de rede de atrasos realimentados de baixa ordem, criado para reduzir ressonâncias metálicas com metas de densidade de ecos e modulação unitária segura.
year: "2026"
role: Criador e desenvolvedor
contribution: Design de DSP, implementação do plugin em C++, otimização offline, avaliação e ferramentas para demonstrações auditivas.
disciplines: [Programação de áudio, DSP, Pesquisa técnica]
tools: [C++, Python, PyTorch, DPF, Godot]
traits: [Sound, Systems, Code, Performance]
cost: 3
featured: true
detailed: true
repository: https://github.com/fernandoAra/tiny-fdn-reverb
accent: yellow
order: 2
draft: false
---

## O problema

Redes pequenas de atrasos realimentados são computacionalmente atraentes, mas podem produzir ressonâncias metálicas antes que a densidade de ecos pareça convincente. O projeto investiga como uma rede compacta pode soar mais suave sem ficar pesada ou instável.

## Design do sistema

O plugin suporta redes pequenas e diferentes formatos nativos de áudio por meio do DISTRHO Plugin Framework. A escolha dos atrasos, mistura sem perda, controle de RT60 e mudanças unitárias seguras são tratadas como partes do mesmo sistema.

Experimentos offline em PyTorch otimizam configurações para metas de densidade. Os presets gerados são exportados para headers C++, mantendo o plugin em tempo real livre de runtimes de aprendizado de máquina.

## Verificação

- Configurações fixas e aprendidas são comparadas com arquivos de audição equalizados por loudness.
- Scripts reproduzíveis exportam respostas ao impulso, curvas de decaimento, medidas, tabelas e resultados com múltiplas sementes.
- O build produz formatos LV2, VST2, VST3 e CLAP.
- Um playground em Godot apoia audição espacial e comparação de modos.

## Escolhas

O design favorece uma estrutura pequena e explicável em vez de um modelo maior e opaco. Os presets são aprendidos offline para que a thread de áudio continue determinística e leve.

## Reflexão

O projeto conecta percepção, avaliação numérica e código de produção. O próximo marco é integrar de forma mais direta o plugin nativo ao ambiente de audição em Godot.
