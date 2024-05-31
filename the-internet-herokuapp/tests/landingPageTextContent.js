import {LandingPage} from "../helpers/hooks/Internet.js"

describe("Get text content on landing page", () => {
    it("should get main heading", async () => {
        await browser.url("/");
        let heading1Text = await $(LandingPage.headingText).getText();
        expect(heading1Text).toHaveText("Welcome to the-internet");
    })

    it("should get the sub heading of landing page", async () => {
        let subHeadingText = await $(LandingPage.subHeadingText).getText();
        expect(subHeadingText).toHaveText("Available Examples");
    })

    it("should get the list of texts in links present", async function() {
        let linksArr =  await $$("li a");
        let textListOfLinksArr = [];
        for(let i = 0; i <linksArr.length; i++) {
            textListOfLinksArr.push(linksArr[i].getText());
        }
        console.log(textListOfLinksArr);
    })
})