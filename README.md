https://danishjaintw.github.io/the-retail-product-council/

# Docs

The Retail Product Council documentation, as a static multi-page site. Open `index.html` in a browser, or publish the folder with GitHub Pages (Settings, Pages, deploy from branch `main`, folder `/docs`). `.nojekyll` makes GitHub serve the files as they are, and `404.html` is shown for any missing page.

| Page | Audience | Covers |
|---|---|---|
| `index.html` | Product leads | What the council is, how a decision gets made, what you walk away with, who is in the room, when to use it, why to trust it, the retail base |
| `use.html` | Everyone | Quick start with /start, what you need, base and client projects, Jira and Confluence, terminal or VS Code, which command, modes, flags, phrases, troubleshooting |
| `commands.html` | Everyone | Command reference with search |
| `behaviour.html` | Everyone | Cost tiers, session flow, questions and analysis documents, evidence, decision to delivery, learning loop, automatic behaviour, team working |
| `knowledge.html` | Everyone | Knowledge base layers, how knowledge gets in, the scout, context before questions, the global and failure lenses |
| `diagrams.html` | Everyone | Diagram pages, with a live illustrative example in `examples/` |
| `technical.html` | Maintainers | Architecture, agents, personas in detail, skills, behaviour tests |
| `reference.html` | Maintainers | Repository map, verdicts and tags, upgrading |
| `retail.html` and `retail/` | Everyone | The retail base: thirteen areas, global case studies, failure library, glossary |

Table lists every page.

Shared files in `assets/`:
- `chrome.css`, `chrome.js`: header, footer, phone menu and theme switch.
- `site.css`, `site.js`: the Thoughtworks theme (light and dark), copy buttons and section highlighting.
- `retail.css`, `retail.js`: retail base pages, case and glossary filters, region tabs.
- `personas.js`: every persona, read from `personas/`. `commands.js`: command data and search.
- `img/`: flow images.

The retail pages mirror the curated files (capability map, case studies, problem index, failure library, glossary, manifest) and `personas.js` mirrors the persona files. When those change, update the matching page in the same pull request. Every page carries noindex and noai tags, and `robots.txt` and `ai.txt` ask crawlers to stay away. Crawlers only read `robots.txt` at the domain root, and a GitHub Pages site is public to anyone with the URL.
