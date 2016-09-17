var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');
var FrameStruct = require('frameStruct');

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

module.exports = PartStruct;