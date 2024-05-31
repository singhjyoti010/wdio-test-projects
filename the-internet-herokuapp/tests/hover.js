import {Hovers} from "../helpers/hooks/Internet.js";

describe("hovers over element", () => {
    it("hello elements", async () => {
        await browser.url('/');
        await Hovers.getHoverLi.click();
    })
})