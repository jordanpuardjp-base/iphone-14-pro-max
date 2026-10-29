// Génère newsletter.pdf (A4, 2 pages) à partir de index.html
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'index.html'));
  await page.waitForLoadState('networkidle');
  const overflow = await page.evaluate(() =>
    [...document.querySelectorAll('.page')].map(p => p.scrollHeight - p.clientHeight));
  console.log('overflow par page (px, >0 = débordement):', overflow);
  await page.pdf({ path: path.join(__dirname, 'newsletter.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true });
  await browser.close();
})();
