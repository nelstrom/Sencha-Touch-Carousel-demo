App.views.InfoSwipe = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoSwipePanel = this;

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
                        {
                            tpl: ["<h2>{title}</h2>", "<p>by {artist}</p>"],
                            show: function() { this.update(infoSwipePanel); }
                        },
                        {
                            tpl: [
                                "<dl>",
                                "  <dt>medium:</dt><dd>{medium}</dd>",
                                "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                                "</dl>"
                            ],
                            show: function() { this.update(infoSwipePanel); }
                        }
                    ]
                }
            ]
        });

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infoswipe', App.views.InfoSwipe);
