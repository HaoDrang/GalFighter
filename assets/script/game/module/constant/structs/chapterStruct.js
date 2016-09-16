var gameDataUtil = require('gameDataUtil');
var GameString = require('gameString');
var ActionStruct = require('actionStruct');

// var aa = new XMLDocument();
// var nd = new NodeList();

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
            
            var partDom = partNodeList.item(i);

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
    }
});
/**
 * Data Struct of Part
 * @todo
 */
var PartStruct = cc.Class({
    properties: {
        _attrs:Object,
        _frames:[],
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

    ctor:function(){
        this._frames = [];
        this._attrs = {};
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        var framesDom = gameDataUtil.getFirstElementByName(xdom, GameString.FRAMES);

        if(!framesDom){
            return null;
        }

        var framesNodeList = framesDom.getElementsByTagName(GameString.FRAME);

        if(!framesNodeList){
            return null;
        }

        for(var i = 0; i < framesNodeList.length; i++){

            var frameDom = framesNodeList.item(i);

            if(!frameDom){
                continue;
            }

            var frame = new FrameStruct();

            frame.deserialize(frameDom);

            this._frames.push(frame);
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
 * @todo
 */
var FrameStruct = cc.Class({
    properties: {
        _attrs : Object,
        _actions : Array,
        _lines : Object,
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
        this._attrs = {};
        this._lines = {};
        this._actions = [];
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){

        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        var actionsDom = gameDataUtil.getFirstElementByName(xdom, GameString.ACTIONS);

        if(!actionsDom){
            return;
        }

        var actionsNodeList = actionsDom.getElementsByTagName(GameString.ACTION);

        if(!actionsNodeList){
            return;
        }

        for(var i = 0; i < actionsNodeList.length; i++){

            var actionDom = actionsNodeList.item(i);

            if(!actionDom){
                continue;
            }

            var action = new ActionStruct();

            action.deserialize(actionDom);

            this._actions.push(action);
        }

        var linesDom = gameDataUtil.getFirstElementByName(xdom, GameString.LINES);
        
        this._lines = new LinesStruct();

        this._lines.deserialize(linesDom);
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
        _attrs : Object,
        _content : cc.String
    },

    ctor:function(){
        this._attrs = {};
        this._content = "";
    },
    /**
     * analyse data from XMLDocument
     * @param [xdom]{XMLDocument}
     */
    deserialize : function(xdom){
        gameDataUtil.addPropertiesFromDom(this._attrs, xdom);

        this._content = gameDataUtil.convertLines(xdom.textContent);

        cc.log(this._content);
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
