App.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'carousel',
                    title: 'horizontal',
                    direction: 'horizontal',
                    scroll: 'vertical',
                    items: [
                        {
                            xtype: 'htmlpage',
                            url: '/about.html'
                        },
                        {
                            xtype: 'htmlpage',
                            url: '/welcome.html'
                        },
                    ]
                },
                {
                    xtype: 'carousel',
                    title: 'vertical',
                    direction: 'vertical',
                    scroll: 'horizontal',
                    items: [
                        {
                            xtype: 'htmlpage',
                            url: '/about.html'
                        },
                        {
                            xtype: 'htmlpage',
                            url: '/welcome.html'
                        },
                    ]
                }
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
