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

### 1. Zotero (primary source)

Publications are fetched live from the [Media Studies CLARIAH WP5 Zotero group](https://www.zotero.org/groups/2288915/media_studies_clariah_wp5) via the [BibBase](https://bibbase.org/) widget. To add a publication to the main list, join the Zotero group and add it there.

### 2. Community-reported publications (`_data/approved.json`)

Publications that have been submitted by community members but are not yet in Zotero appear in a separate "Community-Reported Publications" section below the Zotero list. They are visually distinguished by a warm background and an orange "Community reported" badge.

**Deduplication:** if a DOI in `approved.json` already appears in the Zotero/BibBase results for the same page load, that entry is automatically hidden. Once an author adds their paper to the Zotero group it will graduate to the main list and disappear from the community section.

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
