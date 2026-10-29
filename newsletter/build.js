// Génère les deux versions A4 de la newsletter :
//   index.html    -> newsletter-4-pages.pdf
//   index-2p.html -> newsletter-2-pages.pdf
const { chromium } = require('playwright');
const path = require('path');

const VERSIONS = [
  { src: 'index.html', out: 'newsletter-4-pages.pdf' },
  { src: 'index-2p.html', out: 'newsletter-2-pages.pdf' },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const { src, out } of VERSIONS) {
    await page.goto('file://' + path.join(__dirname, src));
    await page.waitForLoadState('networkidle');
    const overflow = await page.evaluate(() =>
      [...document.querySelectorAll('.page')].map(p => p.scrollHeight - p.clientHeight));
    console.log(`${out} — débordement par page (px, >0 = trop de contenu) :`, overflow);
    await page.pdf({ path: path.join(__dirname, out), format: 'A4', printBackground: true, preferCSSPageSize: true });
  }
  await browser.close();
})();
