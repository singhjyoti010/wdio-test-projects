import { CommonHelper } from "../../helpers/pageobjects/common-helper.js"

const commonHelper = new CommonHelper();

describe("Verify page load", () => {
    it("should load YouTube page", async () => {
        // await commonHelper.openYT();
        await browser.pause(4000);
    })
})