import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://olx.ba/shops/HHAUTO/aktivni');

  const car = await page.evaluate(() => {
    const carElement = document.querySelector('.rounded-5');
    if (!carElement) return null;

    const carTitle = carElement.querySelector('.main-heading')?.innerText;
    const carPrice = carElement.querySelector('.smaller')?.innerText;
    const carDetails = carElement.querySelector('.standard-tag')?.innerText;

    return {
      title: carTitle,
      price: carPrice,
      details: carDetails
    };
  });

  console.log(car);

  await browser.close();
})();