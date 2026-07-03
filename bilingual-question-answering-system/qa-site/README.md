# Question ⇄ પ્રશ્ન — Bilingual Question Answering Systems

A knowledge-artifact repository (not a web app) documenting a bilingual
English + Gujarati Question Answering pipeline: concepts, workflow,
comparative analysis, applications, research, sustainability, team, and
references — built as a static site for GitHub Pages.

## Structure

```
├── index.html            Home
├── about.html             What is Question Answering?
├── concepts.html          9 expandable NLP concept cards + search
├── workflow.html          General / English / Gujarati pipelines
├── comparison.html        5 comparison tables
├── applications.html      6 real-world application cards
├── research.html          Recent research, industry, open-source tools
├── sustainability.html    Language accessibility essay
├── team.html               Contributions & reflections (edit before publishing)
├── references.html        Citations
├── css/style.css          Design system (bilingual lockup, dark mode, etc.)
├── js/script.js           Theme toggle, search, reveal-on-scroll, progress bar
├── images/                 Add screenshots/diagrams here if desired
└── assets/                 Any additional downloadable assets
```

## Before you publish

1. Open `team.html` and replace the `[Team Member N — add name]` and
   reflection placeholders with your real team's names and reflections.
2. Optionally add real diagrams/screenshots to `images/` and reference them
   — the workflow pipelines currently render as inline HTML/CSS, no image
   files required.
3. Update `references.html` with the specific papers/tools your team
   actually used.

## Deploy to GitHub Pages

1. Create a new GitHub repository, e.g. `bilingual-question-answering-system`.
2. Push this folder's contents to the `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from branch** → branch `main`,
   folder `/root`.
5. Save. GitHub will publish the site at
   `https://<your-username>.github.io/<repo-name>/`.

## Notes

- Dark/light mode, the concept search box, scroll-reveal animations, a
  reading-progress bar, and a back-to-top button are all built in
  (`js/script.js`) — no extra setup needed.
- Fonts (Fraunces, Inter, Noto Sans Gujarati, IBM Plex Mono) load from
  Google Fonts via CDN, so an internet connection is needed to see the
  intended typography.
