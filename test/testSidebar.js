const pageSidebar = require('../pages/pageSidebar');
const pageFrame = require('../pages/pageFrame');
const ResourceInput = require('../resources/resourceInput');
const expectChai = require('chai').expect;

describe('Sidebar Test Cases', () => {
    
    before(() => {
        browser.url(pageSidebar.sidebarUrl);
        browser.maximizeWindow();
    });
    
    it('As a customer, I can submit PERSONAL SHOPPER request', ()=> {
        browser.pause(500);
        browser.switchToFrame(pageFrame.frameSidebar);
        pageFrame.frameSidebarWidgetLocation.waitForDisplayed();
        pageFrame.frameSidebarWidgetLocation.click();
        pageFrame.selectSecondaryWindow()
        pageFrame.frameLinkPS.click();
        pageFrame.makePersonalShopperRequest();
        expect(pageFrame.frameThankYouText).toHaveTextContaining(ResourceInput.thankYouText);
        browser.switchToFrame(null);
    });

    after(() => {
        browser.closeWindow();
    });

});
