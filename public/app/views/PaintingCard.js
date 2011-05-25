App.views.PaintingCard = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var pane = this,

        imageCard = {
            id:  'image_' + pane.slug,
            cls: 'painting ' + pane.slug,
        },

        infoCard = {
            id: 'info_' + pane.slug,
            cls: 'infocard',
            styleHtmlContent: true,
            tpl: [
                "<h2>{title}</h2>",
                "<p>by {artist}</p>",
                "<dl>",
                "  <dt>medium:</dt><dd>{medium}</dd>",
                "  <dt>dimensions:</dt><dd>{dimensions}</dd>",
                "</dl>"
            ]
        },

        toggleButton = {
            text: 'info',
            handler: function() {
                if (this.getText() == 'image') {
                    pane.setActiveItem('image_' + pane.slug);
                    this.setText('info');
                } else {
                    pane.setActiveItem('info_' + pane.slug);
                    this.setText('image');
                }
            }
        };

        Ext.apply(this, {

            layout: 'card',
            cardSwitchAnimation: 'flip',

            items: [ imageCard, infoCard ],
            
            dockedItems: [
                {
                    xtype: 'toolbar',
                    title: pane.title,
                    items: [ { xtype: 'spacer' }, toggleButton ]
                }
            ],

            listeners: {
                beforecardswitch: function() {
                    var infoPanel = this.getComponent('info_' + pane.slug);
                    infoPanel.update(pane);
                }
            }
        });

        App.views.PaintingCard.superclass.initComponent.call(this);
    }
});

Ext.reg('paintingcard', App.views.PaintingCard);
