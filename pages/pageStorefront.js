class PageStorefront {

    get storeFrontUrl()  { return ('https://elguntors-stg.salesfloor.net/reggie'); }

    get repChatStatus()  { return $('.status__text--is-off'); }

    get liveChat()  { return $('#chat'); }
    
    get linkGetMyUpdates() { return $('//li/a[contains(text(),"Get my updates")]'); }

    get linkAppointmentRequest() { return $('#AtAppointmentLink'); }

}

module.exports = new PageStorefront();