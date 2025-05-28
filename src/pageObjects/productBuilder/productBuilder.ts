import {BasePage} from "../basePage";

export class ProductBuilder extends BasePage {
    private readonly hardTopperTab: string = '[href="/build/boxspringbett/topper"]';

    async openHardTopperTab() {
        const tab = await this.getElementByLocator(this.hardTopperTab);
        await tab.scrollIntoViewIfNeeded();
        await tab.click();
    }
}
