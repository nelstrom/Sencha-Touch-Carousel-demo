App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            defaults: {styleHtmlContent: true},
            items: [

                {
                    xtype: 'paintingcard',
                    slug: 'asteroid',
                    title: 'Asteroid',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'template',
                    title: 'Template',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'standing',
                    title: 'Standing',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'sitting',
                    title: 'Sitting',
                    artist: 'Dale Adcock',
                    medium: 'Oil on canvas',
                    dimensions: '1,000 x 1,000mm'
                },

                {
                    xtype: 'paintingcard',
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
