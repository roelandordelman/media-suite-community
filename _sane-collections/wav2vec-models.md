---
title: "Wav2vec 2.0 Models — Dutch Archival Broadcast"
description: "Self-supervised speech foundation models pre-trained on 55,000 hours of Dutch archival television broadcast data from the NISV collection."
type: Speech models
language: Dutch
status: Available on request
data_source: "NISV archival television broadcast data — 55,000 hours"
paper_url: "https://www.isca-archive.org/interspeech_2025/vaessen25_interspeech.html"
paper_citation: "Vaessen et al. (2025). Self-supervised learning of speech foundation models from Dutch archival broadcast data. Interspeech 2025."
models:
  - name: "base / large"
    description: "Base and large wav2vec 2.0 models pre-trained from scratch on Dutch archival television broadcast data."
    download_url:
  - name: "xls-r-300m"
    description: "Large model — continued pre-training of a wav2vec 2.0 XLS-R checkpoint on the 55k-hour archival dataset. Achieves state-of-the-art performance for Dutch speech recognition."
    download_url:
---

## Summary

This work explores the use of Dutch archival television broadcast data for self-supervised learning of speech foundation models, specifically wav2vec 2.0.

Key findings:

- **Data quality matters for SSL.** Music, noise, and speaker overlap all affect convergence and downstream fine-tuning performance — understanding these effects is essential when working with broadcast archives.
- **Pre-processing makes the difference.** Using Whisper and WhisperX to filter and clean the noisy broadcast dataset substantially improves pre-training quality.
- **Mono-lingual pre-training is more robust.** Compared with multi-lingual pre-training on equivalent amounts of data, mono-lingual pre-training generalises better to out-of-domain speech.
- **State-of-the-art Dutch ASR.** Continued pre-training of a wav2vec 2.0 XLS-R checkpoint on the 55k-hour NISV dataset yields a state-of-the-art large model for the Dutch language.
