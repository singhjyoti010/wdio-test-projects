import { eventHooks } from "../helpers/hooks/eventHooks.js"
import Page from "../helpers/pageobjects/page.js";

describe("add and remove an element", ()=> {
    it("test adding then removing an elemnt via click", async () => {
        let page = new Page;
        await page.open(eventHooks.path);
        await $(eventHooks.addElementBtn).click();
        const elem = await $(eventHooks.deleteBtn);
        await expect(elem).toBeDisplayed();
        await $(eventHooks.deleteBtn).click();
    })
})