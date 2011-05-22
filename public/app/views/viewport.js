App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtmlContent: true },
            items: [
                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
                        { cls: 'canvas asteroid', flex: 6 },
                        { html: 'info' }
                    ]
                },
                { cls: 'canvas template' },
                { cls: 'canvas standing' },
                { cls: 'canvas sitting' },
                { cls: 'canvas erect' },
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
