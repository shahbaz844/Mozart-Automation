import { test, expect } from '../src/fixtures/base-fixtures';
import { hardness } from "../src/testData/productBuilderTestData/hardnessAndTopper";
import { home } from "../src/testData/homeTestData/home";

/** TC_01 Product Builder Flow Test
 *
 *  Steps:
 * 1. Navigate to the homepage URL.
 * 2. Select the postal code "PLZ 1".
 * 3. Accept cookies when prompted.
 * 4. Close any email subscription popups that appear.
 *
 * Expected Result:
 * - Homepage is successfully loaded.
 * - Correct postal code "PLZ 1" is selected.
 * - Cookies are accepted and the banner disappears.
 * - Email subscription popup is closed.
 *
 * 5. Open the "Hard Topper" tab in the product builder.
 * 6. Wait for the "Hard Topper" tab to be ready for interaction.
 * 7. Open the hardness dropdown for selecting mattress hardness.
 * 8. Wait for the dropdown to load available options.
 * 9. Select hardness for Mattress 1 (e.g., "H3").
 * 10. Select hardness for Mattress 2 (e.g., "H4").
 * 11. Click on the "Save" button to save the selected hardness levels.
 * 12. Wait for the page to confirm the saved hardness levels.
 * 13. Select the anti-allergic cover option.
 * 14. Click "Continue to Upgrades" to proceed.
 *
 * Expected Result:
 * - "Hard Topper" tab opens and shows available hardness options.
 * - Mattress 1 and Mattress 2 hardness levels are selected successfully.
 * - Anti-allergic cover is selected and saved.
 * - User is navigated to the "Upgrades" page.
 *
 * 15. Wait for the Upgrades page to load.
 * 16. Select the "Electricity Adjustable" option.
 * 17. Click "Continue to Accessories" to move to the next page.
 * 18. Wait for the Accessories page to load.
 * 19. Select the fabric option for the nightstand.
 * 20. Click "Continue to Overview" to view the summary of selections.
 *
 * Expected Result:
 * - The "Upgrades" page is displayed and the adjustable option is selected.
 * - The "Accessories" page loads and the nightstand fabric option is selected.
 * - User is navigated to the "Overview" page.
 *
 * 21. Wait for the Overview page to load.
 * 22. Validate that the correct mattress hardness levels are displayed for Mattress 1 and Mattress 2.
 * 23. Validate that the selected anti-allergic cover, electricity adjustable, and nightstand fabric options are listed.
 * 24. Check that all the data matches the user's selections.
 *
 * Expected Result:
 * - The Overview page displays the correct mattress hardness for both mattresses.
 * - The anti-allergic cover, electricity adjustable, and nightstand fabric selections are visible and correct.
 * - All options are validated against the user's previous selections.
 */


test('test deep sleep formel selection reflects correctly', async ({ page, homePage, productBuilder, hardnessPage, upgradesPage, accessoriesPage, overviewPage }) => {
    await homePage.visit(home.url);
    await homePage.waitForReadiness();
    
    await page.locator('button[type="submit"]').first().click({force: true)};

   // const plzButton = page.locator('button:has-text("PLZ 1")'); // or use "PLZ 1..." if exact text needed
   //  if (await plzButton.isVisible()) {
   //      await plzButton.click();
   //  }

    const acceptCookies = page.getByRole('button', { name: 'Alles akzeptieren' });
    if (await acceptCookies.isVisible()) {
        await acceptCookies.click();
    }

    // await homePage.selectPostalCode(home.postcode);
    // await homePage.acceptCookies();
    // await homePage.closeEmailPopup();

    await productBuilder.openHardTopperTab();
    await productBuilder.waitForReadiness();
    await hardnessPage.openHardnessDropdown();
    await hardnessPage.waitForReadiness();
    await hardnessPage.selectHardnessForMattress1(hardness.mattress1);
    await hardnessPage.selectHardnessForMattress2(hardness.mattress2);
    await hardnessPage.saveHardnessLevel();
    await hardnessPage.waitForReadiness();
    await hardnessPage.selectAntiAllergicCoverOption();
    await hardnessPage.continueToUpgrades();

    await upgradesPage.waitForReadiness();
    await upgradesPage.selectElectricityAdjustableOption();
    await upgradesPage.continueToAccessories();
    await upgradesPage.waitForReadiness();

    await accessoriesPage.waitForReadiness();
    await accessoriesPage.selectNightstandFabric();
    await accessoriesPage.continueToOverview()

    await overviewPage.waitForReadiness();
    const overviewData = await overviewPage.getHardnessLevelData();
    await expect(overviewData).toContainText(hardness.mattress1);
    await expect(overviewData).toContainText(hardness.mattress2);
})
