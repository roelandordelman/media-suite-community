---
layout: page
title: SANE via Media Suite
subtitle: Work with sensitive audiovisual collections in a secure analysis environment — starting from your selection in the Media Suite.
permalink: /sane/
description: Researcher-facing landing page for SANE as offered via the Media Suite, scoped to NISV (Netherlands Institute for Sound and Vision) collections.
---

> **Status: beta.** SANE access via the Media Suite is currently offered on a pilot basis for CLARIAH researchers working with NISV (Netherlands Institute for Sound and Vision) collections. Details on this page will evolve as the service matures.

## What is SANE?

SANE — the Secure Analysis Environment — is a hosted environment maintained by SURF that lets researchers analyse sensitive data without the data ever leaving the protected environment. It implements the [Five Safes framework](https://en.wikipedia.org/wiki/Five_safes) and is used by multiple Dutch research infrastructures.

For CLARIAH researchers, SANE makes it possible to work with NISV collections that cannot be downloaded or taken home: you bring your code and questions into the environment, the data stays inside.

## Who is this for?

This page is aimed at researchers who want to analyse **NISV audiovisual data** that is not openly available. Through the Media Suite we can currently facilitate access to **NISV collections only**. For other CLARIAH collections, SANE is not yet a routed option — we'll update this page as that changes.

## How it works: from selection to analysis

The workflow combines two steps that may already be familiar (using the Media Suite to explore and select data) with SANE-specific steps to move that selection into a secure environment.

<figure class="my-4 text-center">
  <img src="{{ '/assets/img/sane-workflow.svg' | relative_url }}"
       alt="Diagram of the six-step SANE via Media Suite workflow"
       class="img-fluid" style="max-width: 560px;">
  <figcaption class="text-muted mt-2" style="font-size: 0.875rem;">The six-step workflow from Media Suite selection to secure analysis in SANE.</figcaption>
</figure>

### 1. Select a data set or build one in the Media Suite

Either select a data set that has already been prepared (see below: "What you can analyse") or start in the **Media Suite**, where you can search, browse, and curate a selection of NISV items relevant to your research question, and store your "personal dataset" in your [workspace](https://mediasuite.clariah.nl/workspace/projects). This is also where you document what you want to analyse and why — the selection and motivation feed directly into the access request.

If you are new to the Media Suite, the [Community site](/community/) and its working groups are a good entry point.

### 2. Submit the access request

Fill in the SANE access request form. The request includes:

- who you are and your affiliation
- the NISV data you want to work with (linked to your Media Suite selection where possible)
- your research motivation and methods
- any software or compute requirements you already know

The request goes to the **Media Suite broker**, who checks eligibility, confirms receipt, and forwards it to the data provider at NISV.

> [TBD: link to the actual request form once finalised]

### 3. Data provider approval (NISV)

NISV reviews the request and contacts you directly to arrange access. Depending on the collection, this may involve signing a confidentiality or data-use agreement. The Media Suite broker stays in the loop to help things move along.

### 4. SANE environment setup (happens in parallel)

While the access conversation with NISV is ongoing, SURF and the broker prepare the SANE environment for your project: a secure workspace with a data server, a data provider portal, and the analysis machine you'll actually work in. Setting up a basic environment takes on the order of 30 minutes once everything is ready to go.

Typical starting configuration for a pilot is a small virtual machine (1 core / 8 GB RAM); larger machines — including higher-memory or GPU options — are available for projects that need them.

### 5. Analyse

Once NISV has approved access and the environment is live, you log in and work inside SANE. R and Python are available, and additional tooling can be arranged on request. No data leaves the environment — any outputs you want to take out go through a review step with the data provider.

Practical guidance on logging in, installing libraries, and getting data and code in and out will live in a separate "Working in SANE" guide — [TBD: link once published].

### 6. Close out

At the end of the project we verify with you and with NISV that everything can be wound down, and the environment is removed.

## What you can analyse: NISV collections

Through the Media Suite, SANE access is currently scoped to **NISV collections**. We can facilitate access to these because of our working relationship with Sound and Vision; we do not broker access to other collections via this route.

Besides building your own selection in the Media Suite, you can also request access to one of the default collections listed below. New default collections can be added by dropping an additional markdown file alongside this page.

{% assign sane_items = site.sane-collections %}
{% if sane_items.size > 0 %}
  {% for item in sane_items %}
  <div class="post-card mb-3">
    <div class="d-flex flex-wrap gap-2 mb-2">
      {% if item.type %}<span class="category-badge"><i class="bi bi-cpu me-1"></i>{{ item.type }}</span>{% endif %}
      {% if item.language %}<span class="category-badge" style="background-color: #2D343A;"><i class="bi bi-translate me-1"></i>{{ item.language }}</span>{% endif %}
      {% if item.status %}<span class="category-badge" style="background-color: #f46041;">{{ item.status }}</span>{% endif %}
    </div>
    <h3><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
    {% if item.description %}<p class="mb-1" style="font-size: 0.9rem;">{{ item.description }}</p>{% endif %}
    {% if item.data_source %}<p class="text-muted mb-0" style="font-size: 0.8rem;"><i class="bi bi-database me-1"></i>{{ item.data_source }}</p>{% endif %}
  </div>
  {% endfor %}
{% else %}
*No default collections are published yet. Contact us at mediastudies@clariah.nl if you want to discuss a specific NISV collection for your research.*
{% endif %}

## Costs

We are not publishing cost or funding details yet while the service is in beta. If cost is a blocker for your planned project, get in touch and we'll discuss options.

## Request access or ask a question

<a href="{{ '/sane/request/' | relative_url }}" class="btn btn-primary btn-lg mb-3">
  <i class="bi bi-file-earmark-text me-2"></i>Request SANE access
</a>

For general questions, email **mediastudies@clariah.nl**.

## Further reading

- SURF SANE documentation — [TBD: link]
- ODISSEI SANE page (for context on the shared SANE infrastructure used by the social sciences) — <https://odissei-data.nl/facility/secure-analysis-environment-sane/>
