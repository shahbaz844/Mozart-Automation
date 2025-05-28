import {ProductBuilder} from "./productBuilder";

export class HardnessAndTopperTab extends ProductBuilder {
    private readonly hardness: string = 'button.h-10';
    private readonly hardnessMattress1: string = 'div.pr-4 b';
    private readonly hardnessMattress2: string = 'div.pl-4 b';
    private readonly saveHardnessButton: string = 'button .mozart-button-content';
    private readonly antiAllergicCoverOption: string = 'label[for="topper_gel"]';
    protected readonly continueButton: string = '[data-sentry-component="ContinueButton"]';

    async openHardnessDropdown(): Promise<void> {
        const hardnessDropdown = (await this.getElementByLocator(this.hardness)).first();
        await hardnessDropdown.waitFor();
        await hardnessDropdown.click();
    }

    async selectHardnessForMattress1(hardness: string): Promise<void> {
        await this.page.locator(this.hardnessMattress1).filter({hasText: hardness}).first().click();
    }

    async selectHardnessForMattress2(hardness: string): Promise<void> {
        await this.page.locator(this.hardnessMattress2).filter({hasText: hardness}).first().click();
    }

    async saveHardnessLevel(): Promise<void> {
        await this.page.locator(this.saveHardnessButton).last().click();
    }

    async selectAntiAllergicCoverOption(): Promise<void> {
        await this.waitForVisible(this.antiAllergicCoverOption);
        await this.clickElement(this.antiAllergicCoverOption);
    }

    async continueToUpgrades(): Promise<void> {
        await this.clickElement(this.continueButton);
    }
}