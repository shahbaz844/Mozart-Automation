import { BasePage } from "../basePage";

export class HomePage extends BasePage {
  private readonly postcode = (postcode: string) => { return `button:has-text('${postcode}')` };
  private readonly emailPopupCloseIcon = '[data-sentry-component="Close"]';
  private readonly allCookies = 'Alles akzeptieren';

  async selectPostalCode(postcode: string) {
    const plzButton = this.page.locator(this.postcode(postcode));
    if (await plzButton.isVisible()) {
      await plzButton.click();
    }
  }

  async closeEmailPopup() {
    const emailPopupClose = this.page.locator(this.emailPopupCloseIcon); // Close (X) button
    if (await emailPopupClose.isVisible({ timeout: 3000 })) {
      await emailPopupClose.click();
    }
  }

  async acceptCookies() {
    const acceptCookies = this.page.getByRole('button', { name: "Alles akzeptieren" });
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }
  }
}
