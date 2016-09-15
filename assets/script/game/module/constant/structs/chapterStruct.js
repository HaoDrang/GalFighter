var gameDataUtil = require('gameDataUtil');
var GameString = require('gameString');


// var aa = new XMLDocument();
// var nd = new NodeList();

/**
 * Data struct of Chapter
 */
var ChapterStruct = cc.Class({
    name:'ChapterStruct',

    properties: {
        _parts:Object,
        _chapterAttrs:Object,
        _index:cc.Integer
    },

    ctor: function(){
        this._parts = {};
        this._chapterAttrs = {};
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

        gameDataUtil.addPropertiesFromDom(this._chapterAttrs, chapterDom);
        cc.log(this._chapterAttrs);
        
        var partsDom = gameDataUtil.getFirstElementByName(chapterDom, GameString.PARTS);

        // serialize parts
        var partNodeList = partsDom.getElementsByTagName(GameString.PART);
        for(var i = 0; i < partNodeList.length; i++){
            
            var partDom = partNodeList.item(i);
            
            var part = new PartStruct();
            
            part.deserialize(partDom);

            this._parts[part.id] = part;
        }
    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});
/**
 * Data Struct of Part
 * @todo
 */
var PartStruct = cc.Class({
    properties: {

    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

/**
 * @todo
 */
var FrameStruct = cc.Class({
    properties: {

    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

/**
 * @todo
 */
var ActionStruct = cc.Class({
    properties: {

    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

    },
    /**
     * generate XMLDocument
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});

/**
 * @todo
 */
var LinesStruct = cc.Class({
    properties: {

    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

    },
    /**
     * generate xml string
     * @return {XMLDocument}
     */
    serialize: function(){
        return null;
    }
});



module.exports = {
    ChapterStruct : ChapterStruct,
};