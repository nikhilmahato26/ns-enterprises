# Assets

This directory mirrors the brand asset structure:

- `images/` — general site imagery
- `furniture/` — product / collection photography
- `logos/` — brand logo variants

The live site currently serves optimised furniture photography via CDN
(see `src/data/collections.js` and `src/data/gallery.js`). To self-host,
drop the files here and update the image paths in those data files, e.g.:

```js
import luxurySofa from '../assets/furniture/luxury-sofa.jpg'
```

The brand favicon/monogram lives at `public/favicon.svg` and the in-app
logo mark is rendered in `src/components/common/Logo.jsx`.
