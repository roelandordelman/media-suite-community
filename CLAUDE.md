# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build commands

The system Ruby (2.6, macOS) is too old. Always use the Homebrew Ruby bundler:

```bash
# Build once
/opt/homebrew/opt/ruby/bin/bundle exec jekyll build

# Serve locally with live reload
/opt/homebrew/opt/ruby/bin/bundle exec jekyll serve
# → http://localhost:4000/media-suite-community/
```

There are no tests or linting steps. The only validation is a clean build with no errors.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/pages.yml`), which builds with standard Ruby 3.3 and deploys to GitHub Pages at `https://roelandordelman.github.io/media-suite-community/`. No manual deploy step is needed.

## Architecture

This is a standard Jekyll 4 site with a few non-standard conventions worth knowing:

**Layouts hierarchy:** `default.html` is the base (navbar + footer). `page.html`, `post.html`, `event.html`, and `sane-collection.html` all extend `default`. Most content pages use `page` layout, which centres content in `col-lg-8`.

**Collections beyond posts:**
- `_events/` — uses the `event` layout. Front matter keys: `date`, `end_date`, `location`, `event_type` (`in-person` | `online` | `hybrid`), `registration_url`. The events listing page (`events.html`) filters by date using `future: true` in `_config.yml` so upcoming events always appear.
- `_sane-collections/` — catalog entries rendered inside `sane.md` via `site.sane-collections`. Each file is a model/dataset card.

**Publications page (`publications.md`)** is the most complex page. It is fully client-side rendered — no BibBase:
1. At build time, Jekyll embeds `_data/approved.json` as an inline JS variable (`HARVESTED`).
2. On page load, harvested entries render immediately (instant).
3. The Zotero JSON API (`https://api.zotero.org/groups/2288915/items/top`) is then fetched with pagination; results are cached in `localStorage` (key `ms_zotero_v2`, TTL 1 hour).
4. Both sources are merged into a single year-grouped, collapsible list. DOI-based deduplication suppresses any harvested entry already present in Zotero.
5. Provenance badges: green **Zotero**, red **Harvested** + green source name.

**Styling:** Single SCSS file at `_sass/custom.scss`, imported via `assets/css/main.scss`. Uses Bootstrap 5.3 (CDN) and Bootstrap Icons (CDN). Site palette: primary `#2e85d1`, accent `#f46041`, dark `#2D343A`.

## Adding content

**New event:** create `_events/YYYY-MM-DD-slug.md` with front matter `layout: event`, `title`, `date`, `event_type` (`in-person` | `online` | `hybrid`), and optionally `end_date`, `location`, `registration_url`, `excerpt`.

**New news post:** create `_posts/YYYY-MM-DD-slug.md` with `layout: post`.

**Update harvested publications:** edit `_data/approved.json`. Fields: `title`, `authors`, `year`, `doi` (without `https://doi.org/` prefix), `url`, `source`, `tier`, `approved_at`. Commit and push — GitHub Pages rebuilds automatically.

**New SANE collection entry:** add a markdown file to `_sane-collections/` with front matter `title`, `description`, `type`, `language`, `status`, `data_source`.
