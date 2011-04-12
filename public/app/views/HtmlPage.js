App.views.HtmlPage = Ext.extend(Ext.Panel, {
    styleHtmlContent: true,
    initComponent: function(){
        Ext.apply(this, {
            scroll: false,
        });

        Ext.Ajax.request({
            url: this.url,
            success: function(rs){
                this.update(rs.responseText);
            },
            scope: this
        });
        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('htmlpage', App.views.HtmlPage);

