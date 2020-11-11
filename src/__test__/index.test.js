const generateSitemap = require('../../dist/index').default;

describe('very-simple-sitemap-generator (CJS)', () => {
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

  describe('If the argument is not an array', () => {
    test('If argument is typeof string', () => {
      expect(() => generateSitemap('https://example.com')).toThrow();
    });

    test('If argument is typeof number', () => {
      expect(() => generateSitemap('1')).toThrow();
    });

    test('If argument is typeof boolean', () => {
      expect(() => generateSitemap(true)).toThrow();
    });

    test('If argument is typeof object', () => {
      expect(() => generateSitemap({})).toThrow();
      expect(() => generateSitemap({ url: 'https://example.com' })).toThrow();
    });

    test('If argument is typeof function', () => {
      const emptyFunc = () => 'Test';
      expect(() => generateSitemap(emptyFunc)).toThrow();
    });

    test('If argument is typeof undefined', () => {
      expect(() => generateSitemap(undefined)).toThrow();
    });
  });
});
