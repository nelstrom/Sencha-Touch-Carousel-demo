App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtmlContent: true },
            items: [
                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
                        { cls: 'canvas asteroid', flex: 3 },
                        { html: '<h2>Untitled asteroid</h2><p>by Dale Adcock</p>' }
                    ]
                },

                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
						{ cls: 'canvas template', flex: 3 },
                        { html: '<h2>Template</h2><p>by Dale Adcock</p>' }
                    ]
                },

                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
						{ cls: 'canvas standing', flex: 3 },
                        { html: '<h2>Standing</h2><p>by Dale Adcock</p>' }
                    ]
                },

                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
						{ cls: 'canvas sitting', flex: 3 },
                        { html: '<h2>Sitting</h2><p>by Dale Adcock</p>' }
                    ]
                },

                {
                    layout: { type: 'vbox', align: 'stretch' }, defaults: {flex: 1},
                    items: [
						{ cls: 'canvas erect', flex: 3 },
                        { html: '<h2>Erect</h2><p>by Dale Adcock</p>' }
                    ]
                },
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
