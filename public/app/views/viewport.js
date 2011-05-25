App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            items: [

                {
                    xtype: 'paintingcard',
                    slug: 'asteroid',
                    title: 'Asteroid'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'template',
                    title: 'Template'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'standing',
                    title: 'Standing'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'sitting',
                    title: 'Sitting'
                },

                {
                    xtype: 'paintingcard',
                    slug: 'erect',
                    title: 'Erect'
                },

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
