import {UpgradesTab} from "./upgrades.tab";

export class AccessoriesTab extends UpgradesTab {
    private readonly accessoriesOption = '[data-sentry-component="InputIcon"]';

    async selectNightstandFabric(): Promise<void> {
        const option = this.page.locator(this.accessoriesOption).first();
        await option.waitFor();
        await option.click();
    }

    async continueToOverview(): Promise<void> {
        await this.clickElement(this.continueButton);
    }
}