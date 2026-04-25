---
layout: page
title: Publications
permalink: /publications/
description: Academic publications related to CLARIAH Media Suite, sourced from the Media Studies CLARIAH WP5 Zotero group library and a harvested community list.
---

<p class="lead mb-4">
  Publications related to the CLARIAH Media Suite from two sources: the
  <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>
  (added directly by researchers — the single source of truth) and a harvested list compiled by the Media Suite team.
  If a harvested entry already appears in Zotero it is suppressed automatically.
  See the <a href="{{ site.baseurl }}/about/#publications-procedure">procedure notes</a> below, or read the full
  <a href="https://github.com/roelandordelman/media-suite-community/blob/main/README.md#publications-page" target="_blank" rel="noopener">README</a>.
</p>

<h2 class="section-title" style="font-size:1.3rem;">Researcher-added &mdash; Zotero</h2>
<p class="text-muted mb-3" style="font-size:0.9rem;">
  These publications were added to the Zotero group directly by researchers.
  To contribute, <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">join the Zotero group</a> and add your paper there.
</p>

<div id="bibbase-container">
  <script src="https://bibbase.org/show?bib=https%3A%2F%2Fapi.zotero.org%2Fgroups%2F2288915%2Fitems%2Ftop%3Fformat%3Dbibtex%26limit%3D100%26v%3D1&jsonp=1&theme=default&authorFirst=1&folding=1&hidemenu=1"></script>
</div>

<style>
  /* Blend BibBase into the site */
  #bibbase-container a { color: #2e85d1; }
  #bibbase-container a:hover { color: #1a6bb5; }
  .bibbase_paper_title { font-family: 'Maven Pro', sans-serif; font-weight: 500; }
  .bibbase_year_heading { font-family: 'Maven Pro', sans-serif; color: #2D343A;
    border-bottom: 3px solid #f46041; padding-bottom: 0.3rem; margin-top: 2rem; }

  /* Zotero provenance badge (injected by JS into each BibBase entry) */
  .zotero-badge {
    display: inline-block;
    background: rgba(39, 140, 72, 0.1);
    color: #1a6b38;
    border: 1px solid rgba(39, 140, 72, 0.3);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.68rem;
    font-family: 'Maven Pro', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    vertical-align: middle;
    margin-left: 0.4em;
    white-space: nowrap;
  }

  /* Community-reported section */
  #community-publications { border-top: 2px solid #ededed; padding-top: 2.5rem; }

  .community-pub-card {
    background: #fdf8f5;
    border: 1px solid #f0e0d4;
    border-left: 4px solid #f46041;
    border-radius: 0.45rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1rem;
  }

  .community-pub-title {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }

  .community-pub-title a { color: #07121e; text-decoration: none; }
  .community-pub-title a:hover { color: #2e85d1; }

  .community-pub-meta {
    font-size: 0.85rem;
    color: #6c757d;
    margin-bottom: 0.4rem;
  }

  .community-badge {
    display: inline-block;
    background: rgba(244, 96, 65, 0.12);
    color: #c03a1e;
    border: 1px solid rgba(244, 96, 65, 0.3);
    border-radius: 0.3em;
    padding: 0.15em 0.6em;
    font-size: 0.72rem;
    font-family: 'Maven Pro', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    vertical-align: middle;
  }

  .community-source-badge {
    display: inline-block;
    background: rgba(46, 133, 209, 0.1);
    color: #1a5f9a;
    border: 1px solid rgba(46, 133, 209, 0.25);
    border-radius: 0.3em;
    padding: 0.15em 0.6em;
    font-size: 0.72rem;
    font-family: 'Maven Pro', sans-serif;
    vertical-align: middle;
  }
</style>

{% assign approved_pubs = site.data.approved %}
{% if approved_pubs and approved_pubs.size > 0 %}
<div id="community-publications" class="mt-5">
  <h2 style="font-family:'Maven Pro',sans-serif;font-weight:700;color:#2D343A;font-size:1.5rem;margin-bottom:0.5rem;">
    Harvested Publications
  </h2>
  <p class="text-muted mb-4" style="font-size:0.92rem;">
    These publications were identified through automated harvesting (OpenAlex, SemanticScholar, CORE, OpenAIRE)
    and approved by the Media Suite team. They are not yet in the Zotero group.
    Entries already present in Zotero above are automatically hidden.
    To move a publication to the main list, add it to the
    <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Zotero group</a>.
  </p>

  {% for pub in approved_pubs %}
  <div class="community-pub-card"
       data-doi="{{ pub.doi | downcase | strip }}"
       id="cpub-{{ forloop.index }}">
    <div class="community-pub-title">
      {% if pub.doi and pub.doi != "" %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.title }}</a>
      {% elsif pub.url and pub.url != "" %}
        <a href="{{ pub.url }}" target="_blank" rel="noopener">{{ pub.title }}</a>
      {% else %}
        {{ pub.title }}
      {% endif %}
      &nbsp;<span class="community-badge">Harvested</span>
    </div>
    <div class="community-pub-meta">
      {% if pub.authors and pub.authors != "" %}{{ pub.authors }}{% endif %}
      {% if pub.year and pub.year != "" %}&nbsp;&middot;&nbsp;{{ pub.year }}{% endif %}
      {% if pub.doi and pub.doi != "" %}&nbsp;&middot;&nbsp;<a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener" style="font-size:0.82rem;">doi:{{ pub.doi }}</a>{% endif %}
    </div>
    <div>
      {% if pub.source and pub.source != "" %}
        <span class="community-source-badge">{{ pub.source }}</span>
      {% endif %}
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

---

<h3 id="publications-procedure" style="font-family:'Maven Pro',sans-serif;font-weight:700;color:#2D343A;font-size:1.15rem;margin-top:2rem;">About the publications procedure</h3>

<p style="font-size:0.92rem;">
  Publications appear on this page through one of two routes:
</p>
<ul style="font-size:0.92rem;">
  <li>
    <strong>Zotero (researcher-added).</strong>
    When a researcher adds a paper to the
    <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>,
    it appears automatically in the main list above, labelled <em>Zotero</em>.
    This is the single source of truth.
  </li>
  <li>
    <strong>Harvested (team-curated).</strong>
    The Media Suite team periodically harvests candidate publications from OpenAlex, SemanticScholar, CORE and OpenAIRE,
    reviews them, and adds approved entries to <code>_data/approved.json</code> in this repository.
    These appear in the <em>Harvested Publications</em> section with an orange left border,
    labelled <em>Harvested</em> with the originating source.
    Once a harvested paper is added to Zotero by its author it graduates to the main list
    and disappears from the harvested section automatically.
  </li>
</ul>
<p style="font-size:0.92rem;">
  See the <a href="https://github.com/roelandordelman/media-suite-community/blob/main/README.md#publications-page" target="_blank" rel="noopener">README</a>
  for technical details and instructions on updating <code>approved.json</code>.
</p>

<script>
(function () {
  var bibContainer = document.getElementById('bibbase-container');
  var communitySection = document.getElementById('community-publications');

  /* ── LaTeX escape map ── */
  var LATEX = {
    '\\textbar': '|', '\\textless': '<', '\\textgreater': '>',
    '\\textasciitilde': '~', '\\textasciicircum': '^',
    '\\textbackslash': '\\', '\\textemdash': '—',
    '\\textendash': '–', '\\textquotedbl': '"',
    '\\textquoteleft': '‘', '\\textquoteright': '’',
    '\\textquotedblleft': '“', '\\textquotedblright': '”'
  };
  var LATEX_RE = new RegExp(
    Object.keys(LATEX).map(function (k) {
      return k.replace(/\\/g, '\\\\');
    }).join('|'), 'g'
  );

  function fixLatexInNode(node) {
    if (node.nodeType === 3) {
      var fixed = node.nodeValue.replace(LATEX_RE, function (m) { return LATEX[m] || m; });
      if (fixed !== node.nodeValue) node.nodeValue = fixed;
    } else {
      node.childNodes.forEach(fixLatexInNode);
    }
  }

  /* ── Zotero badge injection ── */
  var badgedPapers = new WeakSet();
  function injectZoteroBadges() {
    if (!bibContainer) return;
    bibContainer.querySelectorAll('.bibbase_paper').forEach(function (paper) {
      if (badgedPapers.has(paper)) return;
      badgedPapers.add(paper);
      var titleEl = paper.querySelector('.bibbase_paper_title');
      if (!titleEl) return;
      var badge = document.createElement('span');
      badge.className = 'zotero-badge';
      badge.textContent = 'Zotero';
      titleEl.appendChild(badge);
    });
  }

  /* ── DOI deduplication (community vs Zotero) ── */
  var cards = communitySection
    ? Array.from(communitySection.querySelectorAll('.community-pub-card[data-doi]'))
    : [];

  function normaliseDoi(raw) {
    if (!raw) return '';
    return raw.toLowerCase()
      .replace(/^https?:\/\/doi\.org\//i, '')
      .replace(/^doi:/i, '')
      .trim();
  }

  function collectBibbaseDois() {
    var dois = new Set();
    if (!bibContainer) return dois;
    bibContainer.querySelectorAll('a[href*="doi.org"]').forEach(function (a) {
      var d = normaliseDoi(a.getAttribute('href'));
      if (d) dois.add(d);
    });
    bibContainer.querySelectorAll('.bibbase_paper').forEach(function (paper) {
      var text = paper.textContent || '';
      var matches = text.match(/10\.\d{4,}[^\s"<>]*/g);
      if (matches) matches.forEach(function (m) { dois.add(normaliseDoi(m)); });
    });
    return dois;
  }

  function suppressDuplicates() {
    if (!cards.length) return;
    var bibDois = collectBibbaseDois();
    if (!bibDois.size) return;
    var hidden = 0;
    cards.forEach(function (card) {
      var doi = normaliseDoi(card.getAttribute('data-doi'));
      if (doi && bibDois.has(doi)) { card.style.display = 'none'; hidden++; }
    });
    if (communitySection && hidden === cards.length) {
      communitySection.style.display = 'none';
    }
  }

  /* ── Single MutationObserver for all post-processing ── */
  if (!bibContainer) return;

  var settled;
  var observer = new MutationObserver(function () {
    clearTimeout(settled);
    settled = setTimeout(function () {
      fixLatexInNode(bibContainer);
      injectZoteroBadges();
      suppressDuplicates();
    }, 400);
  });

  observer.observe(bibContainer, { childList: true, subtree: true });

  /* Safety fallback */
  setTimeout(function () {
    fixLatexInNode(bibContainer);
    injectZoteroBadges();
    suppressDuplicates();
  }, 5000);
})();
</script>
