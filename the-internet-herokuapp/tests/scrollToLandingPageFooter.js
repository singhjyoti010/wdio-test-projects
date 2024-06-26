import { Footer, LandingPage } from "../helpers/hooks/Internet.js"

describe("Scroll to API Action", () => {
    it("should scroll to page footer", async () => {
        await browser.url("/");
        await (await LandingPage.headingText).waitForDisplayed({timeout:1000, timeoutMsg: "element not displaeyd"});
        await Footer.landingPageFooter.moveTo(1,1);
        expect(Footer.landingPageFooter).toBeDisplayedInViewport();
    })

    it("should scroll heading into view : a different approach", async () => {
        await $(LandingPage.headingText).scrollIntoView();
    })
})