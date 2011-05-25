App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {

            defaults: {
                xtype: 'paintingcard',
            },

            items: [

                {
                    slug: 'asteroid',
                    title: 'Asteroid'
                },

                {
                    slug: 'template',
                    title: 'Template'
                },

                {
                    slug: 'standing',
                    title: 'Standing'
                },

                {
                    slug: 'sitting',
                    title: 'Sitting'
                },

                {
                    slug: 'erect',
                    title: 'Erect'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
