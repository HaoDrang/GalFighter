var EpisodeData = cc.Class({
    // extends: cc.Component,

    properties: {
        _episodeData : Object
    },

    ctor: function(){
        this._episodeData = null;
    },

    /**
     * initialize episode with episode xml string
     * @param [xmlString]{string}
     */
    initialize: function(xmlString){
        var parser = new DOMParser();
        var oDom = parser.parseFromString(xmlString, "text/xml");
        cc.log(oDom);
    },

    /**
     * @todo
     */
    getEpisodeData: function(key){
        return null;
    }
});

module.exports = EpisodeData;
