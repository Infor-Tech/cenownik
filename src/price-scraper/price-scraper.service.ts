import { launch } from "puppeteer";

import { Injectable } from "@nestjs/common";

@Injectable()
export class PriceScraperService {
  async priceScrapper(url: string) {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36";
    const browser = await launch({
      headless: true,
      args: [`--user-agent=${userAgent}`],
    });

    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "domcontentloaded" });

      await page.waitForSelector(".price-template__large--total");
      await page.waitForSelector(".price-template__large--decimal");

      const priceWhole = await page.$eval(
        ".price-template__large--total",
        (element) => element.textContent.trim(),
      );
      const priceDecimal = await page.$eval(
        ".price-template__large--decimal",
        (element) => element.textContent.trim(),
      );
      const fullPrice = `${priceWhole}.${priceDecimal}`.replaceAll(/\s/g, "");
      return Number.parseFloat(fullPrice);
    } catch (error) {
      console.error("Error occurred while scraping prices:", error);
    } finally {
      await browser.close();
    }
  }
}
