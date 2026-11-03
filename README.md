# WT Balance staging

Static early-access site, deployed with GitHub Pages from the root of `main`. No build step.

- Every page is blocked from search engines (`noindex` tag and `robots.txt`). Remove both at launch.
- Yellow highlights mark facts to confirm before launch.
- Signups: set `publicKey` and `listId` at the top of `site.js`. Until then, the form saves nothing and says so.
- The form collects email only. Do not add health questions: GitHub Pages and marketing lists are not a place for patient information.
