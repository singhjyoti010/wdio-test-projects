import { assert } from "chai";
import { DragDropHooks, LandingPage } from "../helpers/hooks/Internet.js";

describe("Drag and drop functionality", () => {
    it.skip("should drag and drop element", async () => {
        await browser.url("/drag_and_drop");
        expect(LandingPage.headingText).toBeDisplayed();
        const elem1 = await DragDropHooks.boxA;
        const target = await DragDropHooks.boxB;
        await elem1.dragAndDrop(target);
        let secondcolumnText = (await DragDropHooks.secondEl).getText();
        assert.equal("A", secondcolumnText);
    })

    it("should drag and drop in crossbrowsertesting site", async () => {
        browser.url("https://crossbrowsertesting.github.io/drag-and-drop.html");
        let draggable = await $("#draggable");
        let droppable = await $("#droppable");
        await draggable.dragAndDrop(droppable);
        let dropText = await (await $('#droppable p')).getText();
        assert.equal("Dropped!", dropText);
    })
})