import { LandingPage, multiWindow } from "../helpers/hooks/Internet.js"

describe("handling multiple windows", () => {
    it("should click new window button and switch back to original window", async () => {
        await browser.url("/windows");
        await multiWindow.newWindowBtn.click();
        // switch back via url match
        await browser.switchWindow('windows');
        expect(LandingPage.headingText).toBeDisplayed();
        //switch back via title match
        await browser.switchWindow('New Window');
        expect(multiWindow.newWindowTitle).toBeDisplayed();
    })
})  