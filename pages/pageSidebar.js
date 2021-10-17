class PageSidebar {

    get sidebarUrl()  { return ('https://elguntors-widgets-stg.salesfloor.net/tests/desktop?sf_lang=en&sf_ip=67.68.215.18'); }

    get sidebarWidget()  { return $('//*[@id="sf-widget-companion-wrapper"]'); }
    
}

module.exports = new PageSidebar();