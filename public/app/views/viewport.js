App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            defaults: {
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                }
            },
            items: [
                {
                    items: [
                        {
                            flex: 3,
                            cls: 'painting asteroid',
                        },
                        {
                            flex: 1,
                            styleHtmlContent: true,
                            html: "<h3>Asteroid</h3><p>by Dale Adcock</p>"
                        }
                    ]
                },
                {
                    items: [
                        {
                            flex: 3,
                            cls: 'painting template',
                        },
                        {
                            flex: 1,
                            styleHtmlContent: true,
                            html: "<h3>Template</h3><p>by Dale Adcock</p>"
                        }
                    ]
                },
                {
                    items: [
                        {
                            flex: 3,
                            cls: 'painting standing',
                        },
                        {
                            flex: 1,
                            styleHtmlContent: true,
                            html: "<h3>Standing</h3><p>by Dale Adcock</p>"
                        }
                    ]
                },
                {
                    items: [
                        {
                            flex: 3,
                            cls: 'painting sitting',
                        },
                        {
                            flex: 1,
                            styleHtmlContent: true,
                            html: "<h3>Sitting</h3><p>by Dale Adcock</p>"
                        }
                    ]
                },
                {
                    items: [
                        {
                            flex: 3,
                            cls: 'painting erect',
                        },
                        {
                            flex: 1,
                            styleHtmlContent: true,
                            html: "<h3>Erect</h3><p>by Dale Adcock</p>"
                        }
                    ]
                }
            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
