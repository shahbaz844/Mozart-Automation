import {AccessoriesTab} from "./accesories.tab";
import {Locator} from "@playwright/test";

export class OverviewTab extends AccessoriesTab {
    private readonly overviewData = 'tbody td';

    async getHardnessLevelData(): Promise<Locator> {
        const data = this.page.locator(this.overviewData).last();
        await data.waitFor();
        return data
    }
}