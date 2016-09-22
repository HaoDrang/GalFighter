var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');
var FrameStruct = require('frameStruct');

/**
 * Data Struct of Part
 * @todo
 */
var PartStruct = cc.Class({
    properties: {
        _id:cc.String,
        _frames:[],
        //public
        gId:{
            /**@return {string} */
            get: function(){
                return this._id;
            }
        }
    },

    ctor:function(){
        this._id = "";
        this._frames = [];
    },
    /**
     * analyse data from Object
     * @param [jsonObj]{Object}
     */
    deserialize : function(jsonObj){

        this._id = jsonObj.id;

        var framesJson = jsonObj[GameString.FRAMES];

        if(!framesJson){
            return null;
        }

        for(var i = 0; i < framesJson.length; i++){

            var frameJson = framesJson[i];

            if(!frameJson){
                continue;
            }

            var frame = new FrameStruct();

            frame.deserialize(frameJson);

            this._frames.push(frame);
        }
    },
    /**
     * generate Object
     * @return {Object}
     */
    serialize: function(){
        return null;
    },

    /**
     * @param [index]{number}
     * @return {Object}
     */
    getFrameByIndex:function(index){
        if(index < 1 || index > this._frames.length){
            cc.err('[ERROR] Index out of range: ' + index);
            return null;
        }

        return this._frames[index-1];
    }
});

module.exports = PartStruct;