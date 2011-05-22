App.views.InfoPanel = Ext.extend(Ext.Panel, {
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
                    flex: 1,
                    html: "<h2>" + this.title + "</h2><p>by Dale Adcock</p>"
                }
            ]
        });

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infopanel', App.views.InfoPanel);

