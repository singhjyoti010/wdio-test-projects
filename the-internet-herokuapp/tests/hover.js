import { Hovers, LandingPage } from "../helpers/hooks/Internet.js";

describe("hovers over element", () => {
    it("should click Hover link to open hover page", async () => {
        await browser.url('/');
        await LandingPage.getHoverLi.click();
    })

    it("should hover over given image", async () => {
        await Hovers.secondImg.moveTo();
        expect(await Hovers.captionImg).toBeDisplayed();
    })

    it("should hover over image with given index", async() => {
        await Hovers.imageWIndex(5).moveTo();
        expect(await Hovers.captionImg).toBeDisplayed();
    })

    it("should get text of image caption with desired index", async function() {
        let index = 4;
        await Hovers.imageWIndex(4).moveTo();
        expect(await Hovers.captionImg).toBeDisplayed();
        let captionText = await Hovers.captionImg.getText();
        expect(captionText).toHaveValue(`name: user${index-2}`);
    })
})