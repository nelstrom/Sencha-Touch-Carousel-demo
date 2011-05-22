App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtmlContent: true },
            items: [
                {
                    xtype: 'infobar',
                    slug: 'asteroid',
                    title: 'Untitled asteroid',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'infobar',
                    slug: 'template',
                    title: 'Template',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'infobar',
                    slug: 'standing',
                    title: 'Standing',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'infobar',
                    slug: 'sitting',
                    title: 'Sitting',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'infobar',
                    slug: 'erect',
                    title: 'Erect',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
