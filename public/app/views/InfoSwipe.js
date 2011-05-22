App.views.InfoSwipe = Ext.extend(Ext.Panel, {
    initComponent: function(){
        Ext.apply(this, {

            scroll: false,

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [
                {
                    flex: 3,
                    cls: 'canvas ' + this.slug,
                },
                {
                    xtype: 'carousel',
                    flex: 1,
                    items: [
                        {html: "<h3>" + this.title + "</h3><p>by Dale Adcock</p>"},
                        {html: "<dl><dt>medium:</dt><dd>"+this.medium+"</dd><dt>dimensions:</dt><dd>"+this.dimensions+"</dd></dl>"}
                    ]
                }
            ]
        });

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infoswipe', App.views.InfoSwipe);
