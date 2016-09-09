/**
 * Episode View
 */
var EpisodeData = require('episodeData');

cc.Class({
    extends: cc.Component,

    properties: {
        _frameArray:[],
        _episodeData:Object,
    },

    // use this for initialization
    onLoad: function () {

    },
    /**
     * @todo
     */
    setEpisode: function(key){
        this._episodeData = EpisodeData.getEpisodeData(key);
    },
    /**
     * @todo
     */
    play: function(index){

    }
});
