App.views.InfoBar = Ext.extend(Ext.Panel, {
    initComponent: function(){
        var infoBarPanel = this;

        Ext.apply(this, {

            layout: 'card',

			dockedItems: [
				{
					xtype: 'toolbar',
					title: this.title
				}
			],
            items: [
                {
                    cls: 'canvas ' + this.slug,
                },
                {
					tpl: [
						"<h2>{title}</h2>",
						"<p>by {artist}</p>",
						"<dl>",
						"  <dt>medium:</dt><dd>{medium}</dd>",
						"  <dt>dimensions:</dt><dd>{dimensions}</dd>",
						"</dl>"
					],
					show: function() { this.update(infoBarPanel); }
                }
            ]
        });

        App.views.HtmlPage.superclass.initComponent.call(this);
    }
});

Ext.reg('infobar', App.views.InfoBar);
