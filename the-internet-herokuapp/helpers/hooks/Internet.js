export const LandingPage = {
    headingText: ".heading",
    subHeadingText: "#content h2",
    get getHoverLi() {
        return $('=Hovers');
    },
    get getKeyPressesLi() {
        return $('=Key Presses');
    }
}

export const Footer = {
    get landingPageFooter() {
        return $("#page-footer a");
    }
}

export const Hovers = {
    get secondImg() {
        return $('.figure:nth-child(4)');  //nth-child take reference from the upper level element, it won't search for an nth-elemnet with class figure but the nth-element in parent selector
    },
    imageWIndex(index) {
        return $(`.figure:nth-child(${index})`);
    },
    get captionImg() {
        return $(".figcaption h5");
    }
}

export const KeyPress = {
    get copyText() {
        return $(".example h3");
    },
    get inputFld() {
        return $(".example input");
    }
}

export const multiWindow = {
    get newWindowBtn() {
        return $(".example a");
    },
    get newWindowTitle() {
        return $('h3');
    }
}