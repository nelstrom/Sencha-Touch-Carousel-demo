App.views.InfoSwipe = Ext.extend(Ext.Panel, {
    initComponent: function(){

        var titleCard = new Ext.Panel({
            tpl: [
                "<h2>{title}</h2>",
                "<p>by {artist}</p>"
            ]
        });

        var metadataCard = new Ext.Panel({
            tpl: [
                "<dl>",
                "  <dt>medium:</dt><dd>{medium}</dd>",
                "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                "</dl>"
            ]
        });

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
                    items: [titleCard, metadataCard]
                }
            ]
        });

        titleCard.update(this);
        metadataCard.update(this);

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infoswipe', App.views.InfoSwipe);
