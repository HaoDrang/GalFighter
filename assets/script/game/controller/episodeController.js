
var EpisodeController = cc.Class({
    properties:()=>({
        _view:require('episodeView'),

        _episodeKey:cc.String,
        _frameIndex:cc.Integer
    }),

    ctor:function(){
        this._view = null;
        this._episodeKey = "";
        this._frameIndex = 0;
    },

    registerView: function(episodeNode){
        this._view = episodeNode.getComponent('episodeView');
    },

    /**
     * set current episode
     * @param [key]{string}
     */
    setEpisode: function(key){

        this._episodeKey = key;

        this._view.setEpisode(key);

        return this;
    },

    /**
     * call back at target index
     * @param [index]{number}  [callback]{function}
     * @return {EpisodeConroller}
     * @todo
     */
    setCallback: function(index, callback){

        return this;
    },

    /**
     * play target frame
     * @param [index]{number}
     */
    play: function(index = 0){
        this._frameIndex = index;

        this._view.play(this._frameIndex);

        return this;
    }
});

module.exports = EpisodeController;