# WT Balance staging

Static site, deployed with GitHub Pages from the root of `main`. No build step.

- Every page is blocked from search engines (`noindex` tag and `robots.txt`). Remove both at launch.
- Pages must not carry internal notes. Keep review items outside the site.
- Signups: set `publicKey` and `listId` at the top of `site.js`. Until then, the form saves nothing and says so.
- The form collects email only. Do not add health questions: GitHub Pages and marketing lists are not a place for patient information.
