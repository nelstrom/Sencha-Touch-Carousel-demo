App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtml: true },
            items: [
                { cls: 'item-1' },
                { cls: 'item-2' },
                { cls: 'item-3' },
                { cls: 'item-4' },
                { cls: 'item-5' },
                { cls: 'item-6' },
                { cls: 'item-7' },
                { cls: 'item-8' },
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
