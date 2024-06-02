import { assert } from "chai";
import { DropDownHooks, LandingPage } from "../helpers/hooks/Internet.js";

describe("should select option from dropdown", () => {
    it("should select option randomly from dropdown in the dropdown page", async () => {
        await browser.url("/dropdown");
        expect(LandingPage.headingText).toBeDisplayed();
        (await DropDownHooks.dropdownList).click();
        let randomOption = Math.floor(Math.random()*2 + 1);
        let randomOptionVal = await DropDownHooks.option(randomOption);
        await randomOptionVal.click();
        assert.equal(true, await randomOptionVal.isSelected());
    })
})