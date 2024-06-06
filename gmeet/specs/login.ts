import { LandingPageHooks } from "../helpers/Hooks/landingpagehooks.ts";

describe("Google meet login", () => {
    it("should login into google meet", async () => {
        await browser.url("/");
        (await ((await $('[tracking-label="meet.google.com"]')).shadow$(LandingPageHooks.enterCode))).click();
        await ((await $(LandingPageHooks.sJoinMeeting)).shadow$(LandingPageHooks.codeInputFld)).setValue(LandingPageHooks.meetingCode);
        await browser.keys("\uE007"); 
        // (await (await $(LandingPageHooks.sJoinMeeting)).shadow$(LandingPageHooks.joinLink)).click();
        // (await (await $(LandingPageHooks.sJoinMeeting)).shadow$('button.join-meeting')).waitForClickable();
        // (await (await $(LandingPageHooks.sJoinMeeting)).shadow$('button.join-meeting')).click();
    })
})