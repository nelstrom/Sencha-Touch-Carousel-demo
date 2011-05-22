App.views.InfoBar = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoBarPanel = this,
            activeCardIndex = 0;

        Ext.apply(this, {

            layout: 'card',
            cardSwitchAnimation: 'flip',

            dockedItems: [
                {
                    xtype: 'toolbar',
                    title: this.title,
                    items: [
                        { xtype: 'spacer' },
                        {
                            text: 'info',
                            handler: function() {
                                if (activeCardIndex == 0) {
                                    activeCardIndex = 1;
                                } else {
                                    activeCardIndex = 0;
                                }
                                infoBarPanel.setActiveItem(activeCardIndex);
                            }
                        }
                    ]
                }
            ],
            items: [
                {
                    style: { backgroundColor: '#aaa' },
                    tpl: [
                        "<h2>{title}</h2>",
                        "<p>by {artist}</p>",
                        "<dl>",
                        "  <dt>medium:</dt><dd>{medium}</dd>",
                        "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                        "</dl>"
                    ],
                    show: function() { this.update(infoBarPanel); }
                },
                {
                    cls: 'canvas ' + this.slug,
                },
            ]
        });

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infobar', App.views.InfoBar);
