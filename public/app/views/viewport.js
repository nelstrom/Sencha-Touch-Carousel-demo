App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            items: [
                { cls: 'asteroid' },
                { cls: 'template' },
                { cls: 'standing' },
                { cls: 'sitting' },
                { cls: 'erect' },
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
