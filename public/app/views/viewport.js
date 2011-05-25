App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            direction: 'vertical',
            items: [
                { cls: 'painting asteroid' },
                { cls: 'painting template' },
                { cls: 'painting standing' },
                { cls: 'painting sitting' },
                { cls: 'painting erect' },
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
