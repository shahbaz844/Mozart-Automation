import { Locator, Page } from "@playwright/test";
import { Timeout } from "../utils/enums";

export class BasePage {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async getElementByLocator(locator: string): Promise<Locator> {
    return this.page.locator(locator);
  }

  async clickElement(selector: string): Promise<void> {
    await this.page.locator(selector).click({ force: true });
  }

  async waitForPageToLoad(timeout = 30000): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded", { timeout: timeout });
  }

  async waitForVisible(selector: string, timeout = 30000): Promise<boolean> {
    try {
      await this.page.waitForSelector(selector, { state: "visible", timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  async waitForReadiness(number = Timeout.THREE_SECONDS): Promise<void> {
    return this.page.waitForTimeout(number);
  }
}
