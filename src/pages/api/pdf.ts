import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import puppeteer from "puppeteer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/pdf");
  await page.emulateMediaType("screen");

  const pdfBuffer = await page.pdf();

  res.send(pdfBuffer);

  await browser.close();
}
