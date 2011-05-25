App.views.PaintingCard = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var pane = this,

        imageCard = {
            flex: 2,
            cls: 'painting ' + pane.slug,
        },

        infoCard = {
            xtype: 'carousel',
            flex: 1,
            items: [
                {
                    tpl: [
                        "<h3>{title}</h3>",
                        "<p>by <a href='{url}'>{artist}</a></p>"
                    ],
                    show: function() { this.update(pane); }
                },
                {
                    tpl: [
                        "<dl>",
                        "  <dt>medium:</dt><dd>{medium}</dd>",
                        "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                        "  <dt>date:</dt><dd>{date}</dd>",
                        "</dl>"
                    ],
                    show: function() { this.update(pane); }
                }
            ]
        };

        Ext.apply(this, {

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [ imageCard, infoCard ]
        });

        App.views.PaintingCard.superclass.initComponent.call(this);
    }
});

Ext.reg('paintingcard', App.views.PaintingCard);
