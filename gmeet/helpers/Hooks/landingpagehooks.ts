export const LandingPageHooks = {
    enterCode: "button.hide.showButton",
    get sJoinMeeting() {
        return ('[tracking-label="meet.google.com"]');
    },
    get codeInputFld() {
        return "input.input";
    },
    meetingCode: "ewq-bmci-knx",
    get joinLink() {
        // return 'button.join-meeting'
        return 'div[slot="join-label"]';
    },
}