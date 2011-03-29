App.views.Viewport = Ext.extend(Ext.Carousel, {
    fullscreen: true,
	defaults: {
		styleHtmlContent: true
	},
	items: [
		{ html: 'one' },
		{ html: 'two' },
	],
    
    initComponent: function() {
        App.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});
