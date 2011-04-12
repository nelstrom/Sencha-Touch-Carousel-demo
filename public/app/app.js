var App = new Ext.Application({
    name: "App",

    launch: function() {
        this.views.viewport = new this.views.Viewport();
        this.views.hcarousel = this.views.viewport.getComponent('hcarousel');
        this.views.vcarousel = this.views.viewport.getComponent('vcarousel');
    }
});
