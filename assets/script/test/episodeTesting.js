var EpisodeController = require('episodeController');

cc.Class({
    extends: cc.Component,

    properties: {
        episodeTemplate:cc.Prefab,
        targetEpisode:cc.String
    },

    // use this for initialization
    onLoad: function () {
        var episodeUI = cc.instantiate(this.episodeTemplate);
        this.node.addChild(episodeUI);

        var episodeCtrl = new EpisodeController();
        episodeCtrl.registerView(episodeUI);
    }   
});
