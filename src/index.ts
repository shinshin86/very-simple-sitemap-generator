const getXMLPageList = (urlList: Array<string>): string => {
  return urlList
    .map(
      (url) => `
  <url>
    <loc>
      ${url}
    </loc>
  </url>`
    )
    .join('');
};

const generateSitemap = (urlList: Array<string>): string => {
  if (!Array.isArray(urlList)) {
    throw new Error('List of URL must be passed as an array.');
  }

  if (!urlList.length) {
    throw new Error('List is empty and cannot be processed.');
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${getXMLPageList(
    urlList
  )}
</urlset>`;

  return sitemap;
};

export default generateSitemap;
