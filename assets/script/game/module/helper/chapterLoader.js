/**
 * load a chapter
 * @todo
 * 1.analyse chapter datas
 * 2.collect chapter resources
 * 3.create chapter actors andd push into array
 * 4.notice chapter when load ready
 */
var ChapterLoader = cc.Class({
    properties:{
        _key:cc.String,
        _callback:Object
    },

    ctor: function(key = ''){
        this._key = key;
    },

    /**
     * @return {Promise} call back when data created ready
     * @todo add loading logic
     */
    load:function(){
        var key = this._key;

        return new Promise(function(resolve, reject){
            var ready = true;
            resolve(ready);
        });
    },

    begin: function(callback){
        this._callback = callback;
    }
});

module.exports = ChapterLoader;