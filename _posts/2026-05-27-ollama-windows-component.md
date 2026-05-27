---
layout: post
title: "SANE projects can run local AI now"
date: 2026-05-27
excerpt: "A new Research Cloud Component for Windows workspaces makes it easy to run local AI models system-wide — ideal for workshops, teaching environments, and SANE research use cases."
---

From the SURF Research Cloud team: 
A new Research Cloud Component for Windows workspaces is now available: **[ollama-windows](https://gitlab.com/rsc-surf-nl/plugins/ollama-windows)**.

The component installs [Ollama](https://ollama.com/) system-wide and can automatically pull one or more specified models during deployment. Models are shared across all users on the machine, making it easier to prepare AI-enabled workspaces for workshops, teaching environments, and research use cases. **For SANE projects it enables running local AI models without an internet connection**.

## Features

- System-wide Ollama installation
- Optional version pinning through environment variables
- Automatic model pulling during deployment
- Shared machine-wide model storage
- Support for multiple models
- GPU compatible (requires the `windows-cuda` component)

## Configuration

The component is configured through two parameters:

**`OLLAMA_MODELS_TO_PULL`** — Comma-separated list of models to pull during deployment.
Example: `qwen2.5-coder:7b,llama3.2:3b`

**`OLLAMA_VERSION`** *(optional)* — Installs a specific Ollama version. Defaults to the latest release when omitted.
Example: `0.24.0`

## Usage

Add the component to a Windows catalog item and set the parameters at catalog item level. After the workspace is provisioned, users can immediately use Ollama from PowerShell or other applications:

```powershell
ollama run qwen2.5-coder:7b
```

The component targets Windows environments and uses the official Ollama GitHub release artifacts.

Feedback and improvements are welcome — reach out to the Research Cloud team.
