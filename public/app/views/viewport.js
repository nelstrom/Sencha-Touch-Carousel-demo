App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
    
    initComponent: function() {
        Ext.apply(this, {
            cls: 'painting',
            defaults: { styleHtmlContent: true },
            items: [
				{
					xtype: 'infopanel',
					slug: 'asteroid',
					title: 'Untitled asteroid'
				},

				{
					xtype: 'infopanel',
					slug: 'template',
					title: 'Template'
				},

				{
					xtype: 'infopanel',
					slug: 'standing',
					title: 'Standing'
				},

				{
					xtype: 'infopanel',
					slug: 'sitting',
					title: 'Sitting'
				},

				{
					xtype: 'infopanel',
					slug: 'erect',
					title: 'Erect'
				},

            ],
        });
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
