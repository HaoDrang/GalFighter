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
        _attrs:Object,
        _parts:Object,
        _index:cc.Integer,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                if(this._attrs['id']){
                    return this._attrs.id;
                }
                return null;
            }
        }
    },

    ctor: function(){
        this._parts = {};
        this._attrs = {};
        this._index = 0;
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

        var chapterDom = gameDataUtil.getFirstElementByName(xdom, GameString.CHAPTER);
        if(!chapterDom){
            cc.warn('[Null] ' + GameString.CHAPTER + ' NOT EXIST in xml.')
            return null;
        }

        gameDataUtil.addPropertiesFromDom(this._attrs, chapterDom);
        
        var partsDom = gameDataUtil.getFirstElementByName(chapterDom, GameString.PARTS);

        if(!partsDom){
            return null;
        }

        // serialize parts
        var partNodeList = partsDom.getElementsByTagName(GameString.PART);
        for(var i = 0; i < partNodeList.length; i++){
            
            var partDom = partNodeList[i];

            if(!partDom){
                return;
            }
            
            var part = new PartStruct();
            
            part.deserialize(partDom);

            this._parts[part.gId] = part;
        }

        return this;
    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
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
