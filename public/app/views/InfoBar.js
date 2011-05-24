App.views.InfoBar = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoBarPanel = this,

        imageCard = {
            id:  'image_' + this.slug,
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
        },

        toggleButton = {
            text: 'info',
            handler: function() {
                if (this.getText() == 'image') {
                    infoBarPanel.setActiveItem('image_' + infoBarPanel.slug);
                    this.setText('info');
                } else {
                    infoBarPanel.setActiveItem('info_' + infoBarPanel.slug);
                    this.setText('image');
                }
            }
        };

        Ext.apply(this, {

            layout: 'card',
            cardSwitchAnimation: 'flip',

            items: [imageCard, infoCard],

            dockedItems: [
                {
                    xtype: 'toolbar',
                    title: this.title,
                    items: [ { xtype: 'spacer' }, toggleButton ]
                }
            ],

            listeners: {
                beforecardswitch: function() {
                    var infoPanel = this.getComponent('info_' + this.slug);
                    infoPanel.update(this);
                }
            }
        });

        App.views.InfoBar.superclass.initComponent.call(this);
    }
});

Ext.reg('infobar', App.views.InfoBar);
