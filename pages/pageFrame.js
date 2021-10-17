const ResourceInput = require('../resources/resourceInput');

class PageFrame {

    // Elements related to frame(s)
    get frameGetMyUpdates() { return $('#inscription'); }

    get frameBookAnAppointment() { return $('#bookAnAppointment'); }

    get frameSidebar() { return $('#sf-widget-companion'); }

    get frameLinkPS() { return $('#landing-finder-link'); }

    get frameAppointmentTypePhone() { return $('//*[@for="phoneService"]'); }

    get frameInputDate() { return $('#choosenDatePlaceholder'); }

    get frameDateNextMonthSelection() { return $('.ui-icon-circle-triangle-e'); }

    get frameInputStore() { return $('#store'); }
    
    get frameInputTime() { return $('#choosenTime'); }
    
    get frameInputName() { return $('#name'); }

    get frameInputBudget() { return $('#minBudgetText'); }
    
    get frameInputEmail() { return $('#email'); }

    get frameInputPhone() { return $('#phone'); }

    get frameInputComment() { return $('#extraInfo'); }

    get frameCheckEmailSubscription() { return $('#autoSubscribe'); }

    get frameSubmitButton() { return $('//button[@type="submit"]'); }
    
    get frameThankYouText() { return $('.global-services__validation__title'); }

    get frameSidebarWidgetLocation() { return $('//*[@id="AtSidebarLocationText"]'); }

    makeGetMyUpdatesRequest() {
        browser.switchToFrame(this.frameGetMyUpdates);
        $(this.frameInputName).waitForDisplayed();
        $(this.frameInputName).setValue(ResourceInput.inputUserName);
        $(this.frameInputEmail).setValue(ResourceInput.inputUserEmail);
        this.frameCheckEmailSubscription.click();
        $(this.frameSubmitButton).click();
        this.frameThankYouText.waitForDisplayed();
    }

    makeBookAnAppointmentRequest() {
        browser.switchToFrame(this.frameBookAnAppointment);
        this.frameAppointmentTypePhone.click();
        this.selectAppointmentDate(10)
        $(this.frameInputName).setValue(ResourceInput.inputUserName);
        $(this.frameInputEmail).setValue(ResourceInput.inputUserEmail);
        this.frameInputTime.selectByIndex(2);
        this.frameCheckEmailSubscription.click();
        $(this.frameInputPhone).setValue(ResourceInput.inputUserPhone);
        $(this.frameInputComment).setValue(ResourceInput.inputUserComment);
        $(this.frameSubmitButton).click();
        this.frameThankYouText.waitForDisplayed();
    }

    makePersonalShopperRequest() {
        this.frameInputStore.selectByIndex(1);
        this.selectSecondaryWindow();
        this.frameInputName.waitForDisplayed();
        $(this.frameInputName).setValue(ResourceInput.inputUserName);
        $(this.frameInputEmail).setValue(ResourceInput.inputUserEmail);
        this.frameCheckEmailSubscription.click();
        $(this.frameInputBudget).setValue(ResourceInput.inputBudgetAmount);
        $(this.frameInputPhone).setValue(ResourceInput.inputUserPhone);
        $(this.frameInputComment).setValue(ResourceInput.inputUserComment);
        $(this.frameSubmitButton).click();
        this.frameThankYouText.waitForDisplayed();
    }

    selectAppointmentDate(numberOfDays) {
        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date.getDate();
        }
        var date = new Date();
        let newDate = date.addDays(numberOfDays)
        let dateToSelect = $(`//a[text()='${newDate}']`);
        this.frameInputDate.click();
        let isDateExistInCurrentMonth = dateToSelect.isExisting();
        if(isDateExistInCurrentMonth) {
            dateToSelect.click();
        }
        else {
            this.frameDateNextMonthSelection.click();
            dateToSelect.click();
        }
    }

    selectSecondaryWindow() {
        let handles = browser.getWindowHandles();
        browser.switchToWindow(handles[1]);
        browser.switchToFrame($('#sf-services-landing'));
    }

}

module.exports = new PageFrame();