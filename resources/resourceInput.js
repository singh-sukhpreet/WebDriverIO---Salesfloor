class ResourceInput {
    
    // The following inputs are used in Storefront test cases

    get liveChatText() { return ('LIVE CHAT'); }

    get unavailableText() { return ('Unavailable'); }

    get unavailableTextColor() { return ('#ee0c0c'); }

    get inputUserName() { return ('QA User'); }

    get inputUserEmail() { return ('qatest@gmail.com'); }

    get inputBudgetAmount() { return ('100'); }

    get inputUserPhone() { return ('5148324429'); }

    get inputUserComment() { return ('This is an automation text set from an automation script'); }

    get thankYouText() { return ('Thank you'); }

}

module.exports = new ResourceInput();