---
layout: page
title: Publications
permalink: /publications/
description: Academic publications related to CLARIAH Media Suite, from the Media Studies CLARIAH WP5 Zotero group and a harvested community list.
---

<p class="lead mb-3">
  Publications related to the CLARIAH Media Suite from two sources:
  the <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>
  (added directly by researchers — single source of truth) and a harvested list compiled by the Media Suite team.
  See the <a href="#publications-procedure">procedure notes</a> below.
</p>

<div id="pub-chart-wrap" class="pub-chart-wrap mb-3" style="display:none;">
  <div id="pub-chart" class="pub-chart"></div>
</div>

<div id="pub-status" class="text-muted mb-2"><small>Loading publications…</small></div>
<div id="publications-list"></div>

<style>
  /* ── Chart ── */
  .pub-chart-wrap {
    background: #f9fcff;
    border: 1px solid #ededed;
    border-radius: 0.45rem;
    padding: 0.9rem 1rem 0.5rem;
  }
  .pub-chart {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    height: 80px;
    overflow-x: auto;
  }
  .pub-chart-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    min-width: 26px;
    cursor: pointer;
    position: relative;
  }
  .pub-chart-count {
    font-size: 0.6rem;
    color: #6c757d;
    margin-bottom: 2px;
    font-family: 'Maven Pro', sans-serif;
    line-height: 1;
  }
  .pub-chart-bar {
    width: 100%;
    background: #2e85d1;
    border-radius: 3px 3px 0 0;
    transition: background 0.15s;
    min-height: 4px;
  }
  .pub-chart-col:hover .pub-chart-bar { background: #f46041; }
  .pub-chart-col.chart-active .pub-chart-bar { background: #f46041; }
  .pub-chart-year {
    font-size: 0.62rem;
    color: #888;
    font-family: 'Maven Pro', sans-serif;
    margin-top: 4px;
    white-space: nowrap;
  }

  /* ── Year section ── */
  .pub-year-section { margin-top: 2rem; }

  .pub-year-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    width: 100%;
    text-align: left;
    border-bottom: 3px solid #f46041;
    padding-bottom: 0.3rem;
    margin-bottom: 0.75rem;
  }
  .pub-year-toggle:hover .pub-year-label { color: #2e85d1; }

  .pub-year-label {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    color: #2D343A;
    transition: color 0.15s;
  }
  .pub-year-count {
    font-family: 'Maven Pro', sans-serif;
    font-size: 0.8rem;
    color: #888;
    font-weight: 400;
  }
  .pub-year-chevron {
    margin-left: auto;
    color: #aaa;
    font-size: 0.85rem;
    transition: transform 0.2s;
  }
  .pub-year-toggle.open .pub-year-chevron { transform: rotate(180deg); }

  .pub-year-entries { display: none; }
  .pub-year-entries.open { display: block; }

  /* ── Entry ── */
  .pub-entry {
    padding: 0.55rem 0;
    border-bottom: 1px solid #f3f3f3;
  }
  .pub-entry:last-child { border-bottom: none; }

  .pub-title {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    font-size: 0.96rem;
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

  .pub-links {
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .pub-link {
    font-size: 0.78rem;
    color: #888;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.2em;
    transition: color 0.15s;
  }
  .pub-link:hover { color: #2e85d1; text-decoration: none; }

  /* ── Badges ── */
  .badge-zotero {
    display: inline-block;
    background: rgba(39,140,72,0.1);
    color: #1a6b38;
    border: 1px solid rgba(39,140,72,0.3);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.67rem;
    font-family: 'Maven Pro', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .badge-harvested {
    display: inline-block;
    background: rgba(244,96,65,0.12);
    color: #c03a1e;
    border: 1px solid rgba(244,96,65,0.3);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.67rem;
    font-family: 'Maven Pro', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .badge-source {
    display: inline-block;
    background: rgba(39,140,72,0.08);
    color: #1a6b38;
    border: 1px solid rgba(39,140,72,0.22);
    border-radius: 0.3em;
    padding: 0.1em 0.55em;
    font-size: 0.67rem;
    font-family: 'Maven Pro', sans-serif;
    letter-spacing: 0.02em;
  }
</style>

---

<h3 id="publications-procedure" style="font-family:'Maven Pro',sans-serif;font-weight:700;color:#2D343A;font-size:1.15rem;margin-top:2rem;">About the publications procedure</h3>
<ul style="font-size:0.92rem;">
  <li>
    <strong>Zotero (researcher-added).</strong>
    When a researcher adds a paper to the
    <a href="https://www.zotero.org/groups/2288915/media_studies_clariah_wp5" target="_blank" rel="noopener">Media Studies CLARIAH WP5 Zotero group</a>
    it appears labelled <span class="badge-zotero">Zotero</span>.
    This is the single source of truth. To contribute, join the Zotero group and add your paper there.
  </li>
  <li>
    <strong>Harvested (team-curated).</strong>
    The Media Suite team periodically harvests candidate publications from OpenAlex, SemanticScholar, CORE and OpenAIRE,
    reviews them, and adds approved entries to <code>_data/approved.json</code>.
    These appear labelled <span class="badge-harvested">Harvested</span> with a green source badge.
    Once a harvested paper is added to Zotero by its author it graduates automatically.
  </li>
</ul>
<p style="font-size:0.92rem;">
  See the <a href="https://github.com/roelandordelman/media-suite-community/blob/main/README.md#publications-page" target="_blank" rel="noopener">README</a>
  for technical details and instructions on updating <code>approved.json</code>.
</p>

<script>
(function () {
  /* ── Config ── */
  var ZOTERO_GROUP = '2288915';
  var CACHE_KEY    = 'ms_zotero_v2';
  var CACHE_TTL    = 60 * 60 * 1000; /* 1 hour */

  var HARVESTED = {{ site.data.approved | jsonify }};

  /* ── Helpers ── */
  function normDoi(raw) {
    if (!raw) return '';
    return raw.toLowerCase()
      .replace(/^https?:\/\/doi\.org\//i, '')
      .replace(/^doi:/i, '')
      .trim();
  }

  function extractYear(s) {
    if (!s) return '';
    var m = String(s).match(/\b(19|20)\d{2}\b/);
    return m ? m[0] : '';
  }

  function formatAuthors(creators) {
    if (!creators || !creators.length) return '';
    return creators
      .filter(function (c) { return c.creatorType === 'author'; })
      .map(function (c) {
        if (c.lastName && c.firstName) return c.lastName + ', ' + c.firstName;
        return c.lastName || c.name || '';
      })
      .join('; ');
  }

  /* ── Fetch + cache ── */
  function fetchAllPages(start, acc) {
    acc = acc || [];
    var url = 'https://api.zotero.org/groups/' + ZOTERO_GROUP
            + '/items/top?format=json&limit=100&v=3&start=' + start;
    return fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (batch) {
        acc = acc.concat(batch);
        return batch.length === 100 ? fetchAllPages(start + 100, acc) : acc;
      });
  }

  function loadZotero() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (raw) {
        var cached = JSON.parse(raw);
        if (cached && cached.ts && (Date.now() - cached.ts) < CACHE_TTL) {
          return Promise.resolve(cached.items);
        }
      }
    } catch (e) { /* ignore */ }

    return fetchAllPages(0).then(function (items) {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), items: items }));
      } catch (e) { /* quota exceeded — carry on */ }
      return items;
    });
  }

  /* ── Normalise ── */
  function normaliseZotero(item) {
    var d = item.data || {};
    var lnk = item.links || {};
    return {
      title:      d.title || '(no title)',
      authors:    formatAuthors(d.creators),
      year:       extractYear(d.date || ''),
      doi:        normDoi(d.DOI || ''),
      url:        d.url || '',
      zoteroUrl:  (lnk.alternate && lnk.alternate.href) || '',
      provenance: 'zotero',
      source:     ''
    };
  }

  function normaliseHarvested(pub) {
    return {
      title:      pub.title || '(no title)',
      authors:    pub.authors || '',
      year:       extractYear(pub.year || ''),
      doi:        normDoi(pub.doi || ''),
      url:        pub.url || '',
      zoteroUrl:  '',
      provenance: 'harvested',
      source:     pub.source || ''
    };
  }

  /* ── Merge & deduplicate ── */
  function merge(zoteroRaw, harvestedRaw) {
    var zItems = zoteroRaw.map(normaliseZotero);
    var zDois  = new Set();
    zItems.forEach(function (p) { if (p.doi) zDois.add(p.doi); });

    var hItems = harvestedRaw
      .map(normaliseHarvested)
      .filter(function (p) { return !(p.doi && zDois.has(p.doi)); });

    var all = zItems.concat(hItems);
    all.sort(function (a, b) {
      var dy = (parseInt(b.year) || 0) - (parseInt(a.year) || 0);
      return dy !== 0 ? dy : a.title.localeCompare(b.title);
    });
    return all;
  }

  /* ── Render: chart ── */
  function renderChart(byYear, years) {
    var wrap  = document.getElementById('pub-chart-wrap');
    var chart = document.getElementById('pub-chart');
    if (!wrap || !chart) return;
    chart.innerHTML = '';

    var counts  = years.map(function (y) { return byYear[y].length; });
    var maxCount = Math.max.apply(null, counts);
    var BAR_MAX = 56; /* px */

    years.forEach(function (year, i) {
      var count = counts[i];
      var barH  = Math.max(4, Math.round((count / maxCount) * BAR_MAX));

      var col = document.createElement('div');
      col.className = 'pub-chart-col';
      col.title = year + ': ' + count + ' publication' + (count === 1 ? '' : 's');

      var cnt = document.createElement('div');
      cnt.className = 'pub-chart-count';
      cnt.textContent = count;

      var bar = document.createElement('div');
      bar.className = 'pub-chart-bar';
      bar.style.height = barH + 'px';

      var lbl = document.createElement('div');
      lbl.className = 'pub-chart-year';
      lbl.textContent = year;

      col.appendChild(cnt);
      col.appendChild(bar);
      col.appendChild(lbl);

      col.addEventListener('click', function () {
        var sec = document.getElementById('year-section-' + year);
        if (!sec) return;
        /* Open the section */
        var btn     = sec.querySelector('.pub-year-toggle');
        var entries = sec.querySelector('.pub-year-entries');
        if (entries && !entries.classList.contains('open')) {
          entries.classList.add('open');
          if (btn) btn.classList.add('open');
        }
        /* Highlight bar */
        document.querySelectorAll('.pub-chart-col').forEach(function (c) {
          c.classList.remove('chart-active');
        });
        col.classList.add('chart-active');
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      chart.appendChild(col);
    });

    wrap.style.display = '';
  }

  /* ── Render: one entry ── */
  function renderEntry(pub) {
    var div = document.createElement('div');
    div.className = 'pub-entry';

    /* Title */
    var titleDiv = document.createElement('div');
    titleDiv.className = 'pub-title';
    var titleHref = pub.doi ? 'https://doi.org/' + pub.doi : pub.url;
    if (titleHref) {
      var a = document.createElement('a');
      a.href = titleHref;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = pub.title;
      titleDiv.appendChild(a);
    } else {
      titleDiv.textContent = pub.title;
    }
    div.appendChild(titleDiv);

    /* Authors · year · doi */
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

    /* Quick links + badges */
    var linksDiv = document.createElement('div');
    linksDiv.className = 'pub-links';

    /* Provenance badge */
    if (pub.provenance === 'zotero') {
      var bz = document.createElement('span');
      bz.className = 'badge-zotero';
      bz.textContent = 'Zotero';
      linksDiv.appendChild(bz);
    } else {
      var bh = document.createElement('span');
      bh.className = 'badge-harvested';
      bh.textContent = 'Harvested';
      linksDiv.appendChild(bh);
      if (pub.source) {
        var bs = document.createElement('span');
        bs.className = 'badge-source';
        bs.textContent = pub.source;
        linksDiv.appendChild(bs);
      }
    }

    function addLink(href, iconClass, label) {
      var a = document.createElement('a');
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'pub-link';
      a.title = label;
      a.innerHTML = '<i class="bi ' + iconClass + '"></i> ' + label;
      linksDiv.appendChild(a);
    }

    if (pub.doi) {
      addLink('https://doi.org/' + pub.doi, 'bi-link-45deg', 'DOI');
    }
    if (pub.zoteroUrl) {
      addLink(pub.zoteroUrl, 'bi-file-text', 'Abstract');
    }
    if (pub.url && !pub.url.includes('doi.org') && pub.url !== pub.zoteroUrl) {
      addLink(pub.url, 'bi-box-arrow-up-right', 'Link');
    }

    div.appendChild(linksDiv);
    return div;
  }

  /* ── Render: full list ── */
  var openYears = new Set(); /* persisted across re-renders */

  function renderList(items) {
    var container = document.getElementById('publications-list');
    if (!container) return;
    container.innerHTML = '';
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

    var years = Object.keys(byYear).sort(function (a, b) {
      if (a === 'Undated') return 1;
      if (b === 'Undated') return -1;
      return parseInt(b) - parseInt(a);
    });

    renderChart(byYear, years);

    years.forEach(function (year, idx) {
      var isOpen = openYears.has(year) || (openYears.size === 0 && idx === 0);

      var section = document.createElement('div');
      section.className = 'pub-year-section';
      section.id = 'year-section-' + year;

      /* Toggle button */
      var btn = document.createElement('button');
      btn.className = 'pub-year-toggle' + (isOpen ? ' open' : '');
      btn.type = 'button';

      var lbl = document.createElement('span');
      lbl.className = 'pub-year-label';
      lbl.textContent = year;

      var cnt = document.createElement('span');
      cnt.className = 'pub-year-count';
      cnt.textContent = '(' + byYear[year].length + ')';

      var chev = document.createElement('i');
      chev.className = 'bi bi-chevron-down pub-year-chevron';

      btn.appendChild(lbl);
      btn.appendChild(cnt);
      btn.appendChild(chev);

      /* Entries */
      var entries = document.createElement('div');
      entries.className = 'pub-year-entries' + (isOpen ? ' open' : '');

      byYear[year].forEach(function (pub) {
        entries.appendChild(renderEntry(pub));
      });

      btn.addEventListener('click', function () {
        var nowOpen = entries.classList.toggle('open');
        btn.classList.toggle('open', nowOpen);
        if (nowOpen) openYears.add(year);
        else         openYears.delete(year);
      });

      section.appendChild(btn);
      section.appendChild(entries);
      container.appendChild(section);
    });
  }

  /* ── Bootstrap ── */
  var status = document.getElementById('pub-status');

  /* Step 1: render harvested immediately (page feels instant) */
  var harvestedNorm = HARVESTED.map(normaliseHarvested);
  harvestedNorm.sort(function (a, b) {
    var dy = (parseInt(b.year) || 0) - (parseInt(a.year) || 0);
    return dy !== 0 ? dy : a.title.localeCompare(b.title);
  });
  renderList(harvestedNorm);
  if (status) status.innerHTML = '<small>Loading Zotero publications…</small>';

  /* Step 2: load Zotero (cache or API), merge, re-render */
  loadZotero()
    .then(function (zoteroRaw) {
      if (status) status.textContent = '';
      renderList(merge(zoteroRaw, HARVESTED));
    })
    .catch(function (err) {
      console.error('Zotero fetch failed:', err);
      if (status) {
        status.innerHTML = '<span class="text-warning" style="font-size:0.85rem;">'
          + '<i class="bi bi-exclamation-triangle"></i> '
          + 'Could not reach Zotero — showing harvested entries only. '
          + '<a href="" onclick="location.reload();return false;">Retry</a></span>';
      }
    });
})();
</script>
