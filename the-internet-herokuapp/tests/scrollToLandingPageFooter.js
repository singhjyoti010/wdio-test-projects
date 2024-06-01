import { Footer } from "../helpers/hooks/Internet.js"

describe("Scroll to API Action", () => {
    it("should scroll to page footer", async () => {
        await browser.url("/");
        await Footer.landingPageFooter.moveTo(1,1);
    })
})