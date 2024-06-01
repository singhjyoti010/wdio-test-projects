import { LandingPage, KeyPress } from "../helpers/hooks/Internet.js";
import { Key } from 'webdriverio'

describe("Key actions in WDIO Actions API", ()=>{
    it("should press the Key Presses element in the landing page", async() => {
        await browser.url("/");
        await LandingPage.getKeyPressesLi.click();
    })

    it("should copy, cut then paste the heading text into input field", async () => {
        let value = await KeyPress.copyText.getText();
        await KeyPress.inputFld.setValue(value);
        await browser.keys([Key.Ctrl, "a"]);
        await browser.keys([Key.Ctrl, 'x']);
        expect(await KeyPress.inputFld).toHaveValue("");
        await (await KeyPress.inputFld).click();
        await browser.keys([Key.Ctrl, 'v']);
        expect(await KeyPress.inputFld).toHaveValue(value);
    })
})