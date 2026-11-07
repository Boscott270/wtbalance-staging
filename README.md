# WT Balance staging

Static site, deployed with GitHub Pages from the root of `main`. No build step.

- Every page is blocked from search engines (`noindex` tag and `robots.txt`). Remove both at launch.
- Pages must not carry internal notes. Keep review items outside the site.
- Signups: set `publicKey` and `listId` at the top of `site.js`. Until then, the form saves nothing and says so.
- The form collects email only. Do not add health questions: GitHub Pages and marketing lists are not a place for patient information.

## Products and launch files

- Each product option is its own page: `products/<drug>/<strength>/<supply>/`. Option buttons are real links, so search engines can follow them.
- `sitemap.xml`, `robots-production.txt` and `llms.txt` use the production domain. At launch, replace `robots.txt` with `robots-production.txt` and remove the `noindex` tags.
- `redirects.csv` maps old store and site links to the new pages.

## Photos

Lifestyle photos are from Unsplash under the Unsplash License: Iraj Ishtiak (run), Scott Webb (lift), Calvin Shelwell (meal), Philip Myrtorp (moto), Michael Pointner (park), bruce mars (group). Product images in `img/pack-*` are illustrations; replace with real product photos when available.
