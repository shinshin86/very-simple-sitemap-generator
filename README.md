# very-simple-sitemap-generator

[![Build Status](https://travis-ci.org/shinshin86/very-simple-sitemap-generator.svg?branch=main)](https://travis-ci.org/shinshin86/very-simple-sitemap-generator)

Very simple sitemap generator.

## Usage

```javascript
import generateSitemap from 'very-simple-sitemap-generator';

const sitemap = generateSitemap([
  'https://example.com',
  'https://example.com/test1',
  'https://example.com/test2',
]);

console.log(sitemap); // ↓↓↓

/*
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>
      https://example.com
    </loc>
  </url>
  <url>
    <loc>
      https://example.com/test1
    </loc>
  </url>
  <url>
    <loc>
      https://example.com/test2
    </loc>
  </url>
</urlset>
*/
```

Node.js

```javascript
const generateSitemap = require('very-simple-sitemap-generator').default;

const sitemap = generateSitemap([
  'https://example.com',
  'https://example.com/test1',
  'https://example.com/test2',
]);

console.log(sitemap); // ↓↓↓

/*
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>
      https://example.com
    </loc>
  </url>
  <url>
    <loc>
      https://example.com/test1
    </loc>
  </url>
  <url>
    <loc>
      https://example.com/test2
    </loc>
  </url>
</urlset>
*/
```
