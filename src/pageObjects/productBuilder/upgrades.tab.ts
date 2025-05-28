import {HardnessAndTopperTab} from "./hardnessAndTopper.tab";

export class UpgradesTab extends HardnessAndTopperTab {
    private readonly upgradeOptions = '[data-sentry-component="InputIcon"]';

    async selectElectricityAdjustableOption(): Promise<void> {
        await this.page.locator(this.upgradeOptions).first().click();
    }

    async continueToAccessories(): Promise<void> {
        await this.clickElement(this.continueButton);
    }
}