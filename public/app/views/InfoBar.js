App.views.InfoBar = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoBarPanel = this,
            activeCardIndex = 0,

            imageCard = {
                cls: 'canvas ' + this.slug,
            },

            infoCard = {
                html: '<h3>{placeholder}</h3>',
                styleHtmlContent: true,
                tpl: [
                    "<h2>{title}</h2>",
                    "<p>by {artist}</p>",
                    "<dl>",
                    "  <dt>medium:</dt><dd>{medium}</dd>",
                    "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                    "</dl>"
                ],

                //show: function() { this.update(infoBarPanel); }
            };

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
                                //inactive = infoBarPanel.getActiveItem();
                                //inactiveClass = inactive.el.dom.className;
                                //inactive.el.dom.className = inactiveClass + ' x-hidden-display';

                                infoBarPanel.setActiveItem(activeCardIndex);

                                //active = infoBarPanel.getActiveItem();
                                //activeClass = active.el.dom.className;
                                //active.el.dom.className = activeClass.replace('x-hidden-display', '');
                            }
                        }
                    ]
                }
            ],
            items: [imageCard, infoCard]
        });

        App.views.InfoBar.superclass.initComponent.call(this);
    }
});

Ext.reg('infobar', App.views.InfoBar);
