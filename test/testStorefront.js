const pageStorefront = require('../pages/pageStorefront');
const pageFrame = require('../pages/pageFrame');
const ResourceInput = require('../resources/resourceInput');
const expectChai = require('chai').expect;

describe('Storefront - Test Cases', () => {

    before(() => {
        browser.url(pageStorefront.storeFrontUrl);
        browser.maximizeWindow();
    });
    
    it(`As a customer, I see the "${ResourceInput.liveChatText}" status as "${ResourceInput.unavailableText}"`, () => {
        pageStorefront.repChatStatus.waitForDisplayed();
        expect(pageStorefront.repChatStatus).toHaveTextContaining(ResourceInput.unavailableText);
        browser.takeScreenshot();
    });

    it('As a customer, I can Verify that the text colour of Live chat is red when rep is not available', () => {
        pageStorefront.repChatStatus.waitForDisplayed();
        let colorValueInHex = (pageStorefront.repChatStatus.getCSSProperty('color'))['parsed']['hex'];
        expectChai(colorValueInHex).to.equal(ResourceInput.unavailableTextColor);
        browser.takeScreenshot();
    })

    it('As a customer, I can sign up for regular updates', () => {
        pageStorefront.linkGetMyUpdates.waitForDisplayed();
        pageStorefront.linkGetMyUpdates.click();
        pageFrame.makeGetMyUpdatesRequest();
        expect(pageFrame.frameThankYouText).toHaveTextContaining(ResourceInput.thankYouText);
        browser.switchToFrame(null);
        browser.takeScreenshot();
    });

    it('As a customer, I can submit an Appointment request', ()=> {
        pageStorefront.linkAppointmentRequest.waitForDisplayed();
        pageStorefront.linkAppointmentRequest.click();
        pageFrame.makeBookAnAppointmentRequest();
        expect(pageFrame.frameThankYouText).toHaveTextContaining(ResourceInput.thankYouText);
        browser.switchToFrame(null);
        browser.takeScreenshot();
    });
    
    after(() => {
        browser.closeWindow();
    });

});
