App.views.InfoBar = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoBarPanel = this,

            imageCard = {
				id: 'image_' + this.slug,
                cls: 'canvas ' + this.slug,
            },

            infoCard = {
				id: 'info_' + this.slug,
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
                            text: 'image',
                            handler: function() {
								if (this.getText() == 'image') {
									infoBarPanel.setActiveItem('image_' + infoBarPanel.slug);
									this.setText('info');
								} else {
									infoBarPanel.setActiveItem('info_' + infoBarPanel.slug);
									this.setText('image');
								}
                            }
                        }
                    ]
                }
            ],
            items: [infoCard, imageCard]
            //items: [imageCard, infoCard]
        });

        App.views.InfoBar.superclass.initComponent.call(this);
    }
});

Ext.reg('infobar', App.views.InfoBar);