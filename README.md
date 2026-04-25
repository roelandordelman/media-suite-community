# Media Suite Community

Jekyll-based GitHub Pages site for the CLARIAH Media Suite community.
Live at <https://roelandordelman.github.io/media-suite-community/>.

## Local development

```bash
/opt/homebrew/opt/ruby/bin/bundle exec jekyll serve
```

Then open <http://localhost:4000/media-suite-community/>.

---

## Publications page

The publications page (`/publications/`) combines two sources:

Both sources are combined into a **single year-sorted list** rendered client-side. Each entry carries a badge indicating its provenance:

- **ZOTERO** (green) — fetched live from the [Media Studies CLARIAH WP5 Zotero group](https://www.zotero.org/groups/2288915/media_studies_clariah_wp5) via the Zotero JSON API. This is the single source of truth. To contribute, join the Zotero group and add your paper there.
- **HARVESTED** (red) + source badge (green) — from `_data/approved.json`, compiled by the Media Suite team from OpenAlex, SemanticScholar, CORE or OpenAIRE.

**Deduplication:** if a DOI in `approved.json` already appears in the Zotero results, the harvested entry is suppressed. Once an author adds their paper to the Zotero group it graduates to a Zotero entry automatically.

#### Format of `_data/approved.json`

A JSON array of objects. All fields are strings; empty values are allowed.

| Field | Description |
|---|---|
| `title` | Full publication title |
| `authors` | Author list as a single string, e.g. `"Doe, Jane; Smith, John"` |
| `year` | Publication year, e.g. `"2024"` |
| `doi` | DOI without prefix, e.g. `"10.1000/xyz123"` |
| `url` | Fallback URL if no DOI |
| `source` | Where the record was found, e.g. `"OpenAlex"`, `"SemanticScholar"`, `"CORE"`, `"OpenAIRE"` |
| `tier` | Relevance tier, e.g. `"T1-high"`, `"T2-medium"`, `"T3-medium"` |
| `approved_at` | ISO 8601 timestamp of when the entry was approved, e.g. `"2024-06-01T12:00:00Z"` |

Example entry:

```json
{
  "title": "Using the CLARIAH Media Suite for Historical Research",
  "authors": "Doe, Jane; Smith, John",
  "year": "2024",
  "doi": "10.1000/xyz123",
  "url": "",
  "source": "OpenAlex",
  "tier": "T1-high",
  "approved_at": "2024-06-01T12:00:00Z"
}
```

#### Updating the list

1. Edit `_data/approved.json` (add, remove, or update entries).
2. Commit and push — GitHub Pages rebuilds automatically.

```bash
git add _data/approved.json
git commit -m "Update community publications"
git push
```
