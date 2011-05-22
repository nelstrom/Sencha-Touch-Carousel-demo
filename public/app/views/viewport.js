App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtmlContent: true },
            items: [
                {
                    xtype: 'infoswipe',
                    slug: 'asteroid',
                    title: 'Untitled asteroid',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'infoswipe',
                    slug: 'template',
                    title: 'Template'
                },

                {
                    xtype: 'infoswipe',
                    slug: 'standing',
                    title: 'Standing'
                },

                {
                    xtype: 'infoswipe',
                    slug: 'sitting',
                    title: 'Sitting'
                },

                {
                    xtype: 'infoswipe',
                    slug: 'erect',
                    title: 'Erect'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
