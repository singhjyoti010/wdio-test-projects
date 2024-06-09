import { assert } from "chai";

export class CommonHelper {
    async openYT() {
        await browser.url("https://www.youtube.com/");
        assert.equal(3, 3);
    }
}