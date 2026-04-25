---
layout: page
title: Publications
permalink: /publications/
description: Academic publications related to CLARIAH Media Suite, from the Media Studies CLARIAH WP5 Zotero group and a harvested community list.
---

<p class="lead mb-4">
  Publications related to the CLARIAH Media Suite from two sources:
  the <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>
  (added directly by researchers — single source of truth) and a harvested list compiled by the Media Suite team.
  See the <a href="#publications-procedure">procedure notes</a> below.
</p>

<div id="pub-status" class="text-muted mb-3"><small>Loading publications…</small></div>
<div id="publications-list"></div>

<style>
  .pub-year-heading {
    font-family: 'Maven Pro', sans-serif;
    color: #2D343A;
    border-bottom: 3px solid #f46041;
    padding-bottom: 0.3rem;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    font-size: 1.35rem;
    font-weight: 700;
  }

  .pub-entry {
    padding: 0.6rem 0;
    border-bottom: 1px solid #f0f0f0;
  }
  .pub-entry:last-child { border-bottom: none; }

  .pub-title {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    font-size: 0.97rem;
    line-height: 1.4;
  }
  .pub-title a { color: #07121e; text-decoration: none; }
  .pub-title a:hover { color: #2e85d1; }

  .pub-meta {
    font-size: 0.82rem;
    color: #6c757d;
    margin-top: 0.15rem;
  }
  .pub-meta a { color: #6c757d; }
  .pub-meta a:hover { color: #2e85d1; }

  .pub-badges { margin-top: 0.3rem; }

  .badge-zotero {
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
    margin-right: 0.3em;
  }

  .badge-harvested {
    display: inline-block;
    background: rgba(244, 96, 65, 0.12);
    color: #c03a1e;
    border: 1px solid rgba(244, 96, 65, 0.3);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.68rem;
    font-family: 'Maven Pro', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-right: 0.3em;
  }

  .badge-source {
    display: inline-block;
    background: rgba(39, 140, 72, 0.08);
    color: #1a6b38;
    border: 1px solid rgba(39, 140, 72, 0.22);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.68rem;
    font-family: 'Maven Pro', sans-serif;
    letter-spacing: 0.02em;
    margin-right: 0.3em;
  }
</style>

---

<h3 id="publications-procedure" style="font-family:'Maven Pro',sans-serif;font-weight:700;color:#2D343A;font-size:1.15rem;margin-top:2rem;">About the publications procedure</h3>

<p style="font-size:0.92rem;">
  Publications appear on this page through one of two routes:
</p>
<ul style="font-size:0.92rem;">
  <li>
    <strong>Zotero (researcher-added).</strong>
    When a researcher adds a paper to the
    <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>
    it appears in the list above, labelled <span style="font-family:'Maven Pro',sans-serif;font-size:0.8rem;color:#1a6b38;border:1px solid rgba(39,140,72,0.3);border-radius:0.3em;padding:0.1em 0.4em;background:rgba(39,140,72,0.08);">ZOTERO</span>.
    This is the single source of truth. To contribute, join the Zotero group and add your paper there.
  </li>
  <li>
    <strong>Harvested (team-curated).</strong>
    The Media Suite team periodically harvests candidate publications from OpenAlex, SemanticScholar, CORE and OpenAIRE,
    reviews them, and adds approved entries to <code>_data/approved.json</code> in this repository.
    These appear labelled <span style="font-family:'Maven Pro',sans-serif;font-size:0.8rem;color:#c03a1e;border:1px solid rgba(244,96,65,0.3);border-radius:0.3em;padding:0.1em 0.4em;background:rgba(244,96,65,0.1);">HARVESTED</span>
    with a green badge showing the originating source.
    Once a harvested paper is added to Zotero by its author it graduates automatically and the harvested entry is suppressed.
  </li>
</ul>
<p style="font-size:0.92rem;">
  See the <a href="https://github.com/roelandordelman/media-suite-community/blob/main/README.md#publications-page" target="_blank" rel="noopener">README</a>
  for technical details and instructions on updating <code>approved.json</code>.
</p>

<script>
(function () {
  var ZOTERO_GROUP = '2288915';
  var HARVESTED = {{ site.data.approved | jsonify }};

  /* ── Helpers ── */

  function normDoi(raw) {
    if (!raw) return '';
    return raw.toLowerCase()
      .replace(/^https?:\/\/doi\.org\//i, '')
      .replace(/^doi:/i, '')
      .trim();
  }

  function extractYear(dateStr) {
    if (!dateStr) return '';
    var m = dateStr.match(/\b(19|20)\d{2}\b/);
    return m ? m[0] : '';
  }

  function formatAuthors(creators) {
    if (!creators || !creators.length) return '';
    return creators
      .filter(function (c) { return c.creatorType === 'author'; })
      .map(function (c) {
        if (c.lastName && c.firstName) return c.lastName + ', ' + c.firstName;
        if (c.lastName) return c.lastName;
        return c.name || '';
      })
      .join('; ');
  }

  /* ── Fetch all Zotero items (handles pagination) ── */

  function fetchZotero() {
    var base = 'https://api.zotero.org/groups/' + ZOTERO_GROUP + '/items/top'
             + '?format=json&limit=100&v=3';
    var results = [];

    function fetchPage(start) {
      return fetch(base + '&start=' + start)
        .then(function (r) { return r.json(); })
        .then(function (batch) {
          results = results.concat(batch);
          if (batch.length === 100) return fetchPage(start + 100);
          return results;
        });
    }

    return fetchPage(0);
  }

  /* ── Normalise a Zotero item into our shared shape ── */

  function normaliseZotero(item) {
    var d = item.data || {};
    return {
      title:      d.title || '(no title)',
      authors:    formatAuthors(d.creators),
      year:       extractYear(d.date || ''),
      doi:        normDoi(d.DOI || ''),
      url:        d.url || '',
      provenance: 'zotero',
      source:     ''
    };
  }

  /* ── Normalise a harvested entry ── */

  function normaliseHarvested(pub) {
    return {
      title:      pub.title || '(no title)',
      authors:    pub.authors || '',
      year:       pub.year || '',
      doi:        normDoi(pub.doi || ''),
      url:        pub.url || '',
      provenance: 'harvested',
      source:     pub.source || ''
    };
  }

  /* ── Render one publication entry ── */

  function renderEntry(pub) {
    var div = document.createElement('div');
    div.className = 'pub-entry';

    /* Title */
    var titleDiv = document.createElement('div');
    titleDiv.className = 'pub-title';
    var href = pub.doi ? 'https://doi.org/' + pub.doi : pub.url;
    if (href) {
      var a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = pub.title;
      titleDiv.appendChild(a);
    } else {
      titleDiv.textContent = pub.title;
    }
    div.appendChild(titleDiv);

    /* Meta: authors · year · doi */
    var parts = [];
    if (pub.authors) parts.push(pub.authors);
    if (pub.year)    parts.push(pub.year);
    if (pub.doi) {
      parts.push('<a href="https://doi.org/' + pub.doi + '" target="_blank" rel="noopener">doi:' + pub.doi + '</a>');
    }
    if (parts.length) {
      var meta = document.createElement('div');
      meta.className = 'pub-meta';
      meta.innerHTML = parts.join(' &middot; ');
      div.appendChild(meta);
    }

    /* Badges */
    var badges = document.createElement('div');
    badges.className = 'pub-badges';
    if (pub.provenance === 'zotero') {
      var b = document.createElement('span');
      b.className = 'badge-zotero';
      b.textContent = 'Zotero';
      badges.appendChild(b);
    } else {
      var bh = document.createElement('span');
      bh.className = 'badge-harvested';
      bh.textContent = 'Harvested';
      badges.appendChild(bh);
      if (pub.source) {
        var bs = document.createElement('span');
        bs.className = 'badge-source';
        bs.textContent = pub.source;
        badges.appendChild(bs);
      }
    }
    div.appendChild(badges);

    return div;
  }

  /* ── Render the full list ── */

  function render(items) {
    var container = document.getElementById('publications-list');
    var status    = document.getElementById('pub-status');
    container.innerHTML = '';
    if (status) status.textContent = '';

    if (!items.length) {
      container.innerHTML = '<p class="text-muted">No publications found.</p>';
      return;
    }

    /* Group by year */
    var byYear = {};
    items.forEach(function (pub) {
      var y = pub.year || 'Undated';
      if (!byYear[y]) byYear[y] = [];
      byYear[y].push(pub);
    });

    /* Sort years descending; put "Undated" last */
    var years = Object.keys(byYear).sort(function (a, b) {
      if (a === 'Undated') return 1;
      if (b === 'Undated') return -1;
      return parseInt(b) - parseInt(a);
    });

    years.forEach(function (year) {
      var h = document.createElement('h3');
      h.className = 'pub-year-heading';
      h.textContent = year;
      container.appendChild(h);

      byYear[year].forEach(function (pub) {
        container.appendChild(renderEntry(pub));
      });
    });
  }

  /* ── Bootstrap ── */

  var status = document.getElementById('pub-status');

  fetchZotero()
    .then(function (zoteroRaw) {
      var zoteroItems = zoteroRaw.map(normaliseZotero);

      /* Build DOI set from Zotero for deduplication */
      var zoteroDois = new Set();
      zoteroItems.forEach(function (p) { if (p.doi) zoteroDois.add(p.doi); });

      /* Harvested: skip entries whose DOI is already in Zotero */
      var harvestedItems = HARVESTED
        .map(normaliseHarvested)
        .filter(function (p) { return !(p.doi && zoteroDois.has(p.doi)); });

      var all = zoteroItems.concat(harvestedItems);

      /* Sort: year desc, then title asc within year */
      all.sort(function (a, b) {
        var ya = parseInt(a.year) || 0;
        var yb = parseInt(b.year) || 0;
        if (yb !== ya) return yb - ya;
        return a.title.localeCompare(b.title);
      });

      render(all);
    })
    .catch(function (err) {
      console.error('Publications fetch failed:', err);
      if (status) {
        status.innerHTML = '<span class="text-danger">Could not load Zotero publications. '
          + 'Showing harvested entries only.</span>';
      }
      /* Graceful fallback: show only harvested data */
      var harvestedOnly = HARVESTED.map(normaliseHarvested);
      harvestedOnly.sort(function (a, b) {
        var ya = parseInt(a.year) || 0;
        var yb = parseInt(b.year) || 0;
        if (yb !== ya) return yb - ya;
        return a.title.localeCompare(b.title);
      });
      render(harvestedOnly);
    });
})();
</script>
