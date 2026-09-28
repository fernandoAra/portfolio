---
projectId: tiny-fdn
locale: en
slug: tiny-fdn-reverb
title: Tiny FDN Reverb
eyebrow: C++ audio plug-in · DSP research
summary: A small-order feedback-delay-network reverb designed to reduce metallic ringing through echo-density targets and safe unitary modulation.
year: "2026"
role: Creator and developer
contribution: DSP design, C++ plug-in implementation, offline optimization, evaluation, and listening-demo tooling.
disciplines: [Audio programming, DSP, Technical research]
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

## The problem

Small feedback delay networks are computationally attractive, but they can produce audible metallic ringing before their echo density becomes convincing. The project explores how a compact network can sound smoother without becoming heavy or unstable.

## System design

The plug-in supports small network orders and multiple native audio formats through the DISTRHO Plugin Framework. Delay choices, lossless feedback mixing, RT60 control, and amplitude-modulation-safe unitary changes are treated as parts of one system rather than isolated effects.

Offline PyTorch experiments optimize configurations against echo-density targets. Generated presets are exported into C++ headers, keeping the real-time plug-in free of a machine-learning runtime.

## Verification

- Fixed and learned configurations are compared with loudness-matched listening files.
- Reproducible scripts export impulse responses, decay curves, diffusion measures, tables, and multiseed results.
- The build produces LV2, VST2, VST3, and CLAP formats.
- A Godot playground supports spatial listening and mode comparison.

## Tradeoffs

The design deliberately favors a small, explainable structure over a larger black-box model. Learned presets are generated offline so the audio thread remains deterministic and lightweight.

## Reflection

The project connects perception, numerical evaluation, and production code. The next engineering milestone is tighter integration between the native plug-in and the Godot listening environment.
