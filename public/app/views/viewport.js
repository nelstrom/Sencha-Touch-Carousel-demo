App.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,

    initComponent: function() {
        Ext.apply(this, {
            items: [
                {
                    xtype: 'carousel',
                    id: 'hcarousel',
                    title: 'horizontal',
                    direction: 'horizontal',
                    scroll: 'vertical',
                    items: [
                        {
                            xtype: 'htmlpage',
                            url: '/welcome.html'
                        },
                        {
                            xtype: 'htmlpage',
                            url: '/about.html'
                        }
                    ]
                },
                {
                    xtype: 'carousel',
                    id: 'vcarousel',
                    title: 'vertical',
                    direction: 'vertical',
                    scroll: 'horizontal',
                    items: [
                        {
                            xtype: 'htmlpage',
                            url: '/welcome.html'
                        },
                        {
                            xtype: 'htmlpage',
                            url: '/about.html'
                        }
                    ]
                }
            ]
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
