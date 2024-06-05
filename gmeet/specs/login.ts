import { LandingPageHooks } from "../helpers/Hooks/landingpagehooks.ts";

describe("Google meet login", () => {
    it("should login into google meet", async () => {
        await browser.url("/");
        await browser.pause(2000);
        (await ((await $('[tracking-label="meet.google.com"]')).shadow$(LandingPageHooks.enterCode))).click();
        await browser.pause(3000);
    })
})