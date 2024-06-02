import { Frames, LandingPage } from "../helpers/hooks/Internet.js";

describe("test for iframes", () => {
    it("should open iframe link and type text in the field present within", async() => {
        await browser.url("/frames");
        expect(LandingPage.headingText).toBeDisplayed();
        await (Frames.iFrameLi).click();
        expect(Frames.frameHeading).toBeDisplayed();
        let elem = await Frames.textAreaFrame;
        await browser.switchToFrame(elem);
        //code not working below this line
        await (await  Frames.iframeBody).click();
        await Frames.iframeBody.clearValue();
        await Frames.iframeBody.keys("Hi there");
        await browser.switchToParentFrame();
    })
})