const puppeteer = require("puppeteer");

async function googleSearch(searchQuery = "Automation") {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.type(".gLFyf", "Automation");
  // await page.click("input.gNO89b");

  //   await browser.close();
}

console.log(googleSearch("automation"));
