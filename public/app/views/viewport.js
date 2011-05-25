App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {

            defaults: {
                xtype: 'paintingcard',
                artist: 'Dale Adcock',
                url: 'http://daleadcock.com/index.php?/p/p/',
                medium: 'oil on linen'
            },

            items: [

                {
                    slug: 'asteroid',
                    title: 'Asteroid',
                    dimensions: '152.4 x 152.4cm',
                    date: '2010-2011'
                },

                {
                    slug: 'template',
                    title: 'Template',
                    dimensions: '245 x 195cm',
                    date: '2010-2011'
                },

                {
                    slug: 'standing',
                    title: 'Standing',
                    dimensions: '190 x 230cm',
                    date: '2009'
                },

                {
                    slug: 'sitting',
                    title: 'Sitting',
                    dimensions: '230 x 190cm',
                    date: '2009'
                },

                {
                    slug: 'erect',
                    title: 'Erect',
                    dimensions: '230 x 190cm',
                    date: '2009'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
