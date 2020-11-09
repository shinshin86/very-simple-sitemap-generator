import generateSitemap from '../index';

describe('very-simple-sitemap-generator', () => {
  test('When list of URLs as a parameter.', () => {
    const expectSitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
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
</urlset>`;

    const sitemap = generateSitemap([
      'https://example.com',
      'https://example.com/test1',
      'https://example.com/test2',
    ]);

    expect(sitemap).toBe(expectSitemapXML);
  });

  test('When list of empty as a parameter.', () => {
    expect(() => generateSitemap([])).toThrow();
  });

  // TypeScript testing fails with a type error when running a test.
  /*
  test('If the argument is not an array', () => {
    expect(() => generateSitemap('https://example.com')).toThrow();
  });
  */
});
