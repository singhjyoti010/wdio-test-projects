import { assert } from "chai";
import { Alerts, LandingPage } from "../helpers/hooks/Internet.js";

describe("working with browser alert", () => {
    it("should accept simple JS alert", async () => {
        await browser.url("/javascript_alerts");
        expect(LandingPage.headingText).toBeDisplayed();
        await (await Alerts.simpleAlert).click();
        assert.equal("I am a JS Alert", await browser.getAlertText());
        await browser.acceptAlert();
    })

    it("should dismiss simple JS alert", async () => {
        (await Alerts.simpleAlert).click();
        assert.equal("I am a JS Alert", await browser.getAlertText());
        await browser.dismissAlert();
    })

    it("should click OK in confirmation alert", async () => {
        await (await Alerts.confirmAlert).click();
        assert.equal("I am a JS Confirm", await browser.getAlertText());
        await browser.acceptAlert();
    })

    it("should click Cancel in confirmation alert", async () => {
        await (await Alerts.confirmAlert).click();
        assert.equal("I am a JS Confirm", await browser.getAlertText());
        await browser.dismissAlert();
    })

    it("should send text to a JS prompt", async () => {
        await (await Alerts.promptAlert).click();
        let text = "Hi prompt!!";
        assert.equal("I am a JS prompt", await browser.getAlertText());
        await browser.sendAlertText(text);
        await browser.acceptAlert();
        let alertTxt = await (await Alerts.result).getText();
        assert.equal(alertTxt, 'You entered: '+text);
    })
})