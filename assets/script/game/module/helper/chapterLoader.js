/**
 * load a chapter
 * TODO
 */
var ChapterLoader = cc.Class({
    properties:{
        _key:cc.String,
        _callback:Object
    },

    ctor: function(key = ''){
        this._key = key;
    },

    begin: function(callback){
        this._callback = callback;

        
    },
});

module.exports = ChapterLoader;