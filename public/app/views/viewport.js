App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            items: [

                {
                    xtype: 'paintingcard',
                    slug: 'asteroid',
                    title: 'Asteroid',
                    artist: 'Dale Adcock',
                    medium: 'oil on linen',
                    dimensions: '152.4 x 152.4cm',
                    date: '2010-2011'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'template',
                    title: 'Template',
                    artist: 'Dale Adcock',
                    medium: 'oil on linen',
                    dimensions: '245 x 195cm',
                    date: '2010-2011'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'standing',
                    title: 'Standing',
                    artist: 'Dale Adcock',
                    medium: 'oil on linen',
                    dimensions: '190 x 230cm',
                    date: '2009'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'sitting',
                    title: 'Sitting',
                    artist: 'Dale Adcock',
                    medium: 'oil on linen',
                    dimensions: '230 x 190cm',
                    date: '2009'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'erect',
                    title: 'Erect',
                    artist: 'Dale Adcock',
                    medium: 'oil on linen',
                    dimensions: '230 x 190cm',
                    date: '2009'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
