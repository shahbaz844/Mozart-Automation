import { test as base } from "@playwright/test";
import {HomePage} from "../pageObjects/home/home.page";
import {ProductBuilder} from "../pageObjects/productBuilder/productBuilder";
import {HardnessAndTopperTab} from "../pageObjects/productBuilder/hardnessAndTopper.tab";
import {UpgradesTab} from "../pageObjects/productBuilder/upgrades.tab";
import {AccessoriesTab} from "../pageObjects/productBuilder/accesories.tab";
import {OverviewTab} from "../pageObjects/productBuilder/overview.tab";

interface BaseFixture {
  homePage: HomePage;
  productBuilder: ProductBuilder;
  hardnessPage: HardnessAndTopperTab;
  upgradesPage: UpgradesTab;
  accessoriesPage: AccessoriesTab;
  overviewPage: OverviewTab;
}

export const test = base.extend<BaseFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productBuilder: async ({ page }, use) => {
    await use(new ProductBuilder(page));
  },
  hardnessPage: async ({ page }, use) => {
    await use(new HardnessAndTopperTab(page));
  },
  upgradesPage: async ({ page }, use) => {
    await use(new UpgradesTab(page));
  },
  accessoriesPage: async ({ page }, use) => {
    await use(new AccessoriesTab(page));
  },
  overviewPage: async ({ page }, use) => {
    await use(new OverviewTab(page));
  },
});

export { expect } from "@playwright/test";
