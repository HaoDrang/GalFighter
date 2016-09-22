var gameDataUtil = require('gameDataUtil');
var GameString = require('gameString');
var PartStruct = require('partStruct');

/**
 * Data struct of Chapter
 */
var ChapterStruct = cc.Class({
    name:'ChapterStruct',

    properties: {
        //private
        _id:cc.String,
        _parts:Object,
        _index:cc.Integer,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                return this._id;
            }
        }
    },

    ctor: function(){
        this._id    = "";
        this._parts = {};
        this._index = 0;
    },
    /**
     * analyse data from Object
     * @param [jsonObj]{Object}
     */
    deserialize : function(jsonObj){

        var chapterJson = jsonObj[GameString.CHAPTER];

        if(!chapterJson){
            cc.warn('[Null] ' + GameString.CHAPTER + ' NOT EXIST in json.')
            return null;
        }

        this._id = chapterJson.id;

        var partsJson = chapterJson[GameString.PARTS];
        
        if(!partsJson){
            return null;
        }

        // serialize parts
        for(var i = 0; i < partsJson.length; i++){
            
            var partJson = partsJson[i];

            if(!partJson){
                return;
            }
            
            var part = new PartStruct();
            
            part.deserialize(partJson);

            this._parts[part.gId] = part;
        }

        return this;
    },
    /**
     * generate Object
     * @return {Object}
     */
    serialize: function(){
        return null;
    },
    /**
     * get part of the chapter by index
     * @param [index]{number}
     * @return {Object} return a struct of part
     */
    getPartByIndex: function(index){
        var key = GameString.PART + '-' + index;
        return this._parts[key];
    }
});

module.exports = ChapterStruct;
