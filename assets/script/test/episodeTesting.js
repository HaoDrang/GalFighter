var EpisodeController = require('episodeController');
var EpisodeData = require('episodeData');
var GCFG = require('gameConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        episodeTemplate:cc.Prefab,
        targetEpisode:cc.String
    },

    // use this for initialization
    onLoad: function () {
        cc.loader.loadResAll(GCFG.EPISODE_PATH, this.loadDataDone.bind(this));
    },

    loadDataDone: function(err, assets){

        this.episode = new EpisodeData();
        this.episode.initialize(assets[0]);

        var episodeUI = cc.instantiate(this.episodeTemplate);
        this.node.addChild(episodeUI);

        var episodeCtrl = new EpisodeController();
        episodeCtrl.registerView(episodeUI);
    } 
});
