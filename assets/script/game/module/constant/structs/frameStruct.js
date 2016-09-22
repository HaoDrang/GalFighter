var GameString = require('gameString');
var gameDataUtil = require('gameDataUtil');
var ActionStruct = require('actionStruct');
var LinesStruct = require('linesStruct');

/**
 * @todo
 */
var FrameStruct = cc.Class({
    properties: {
        _id : cc.String,
        _actions : Array,
        _lines : Object,
        //public
        gId:{
            /**@return {string} */
            get: function(){
                return this._id;
            }
        },

        actions:{
            /**@return {Array} */
            get:function(){
                if(!this._actions){
                    return null;
                }

                return this._actions;
            }
        },

        lines: {
            /**@return {Object} */
            get:function(){
                if(!this._lines){
                    return null;
                }

                return this._lines;
            }
        }
    },

    ctor: function(){
        this._id = "";
        this._lines = {};
        this._actions = [];
    },
    /**
     * analyse data from Object
     * @param [jsonObj]{Object}
     */
    deserialize : function(jsonObj){

        this._id = jsonObj.id;

        var actionsJson = jsonObj[GameString.ACTIONS];

        if(!actionsJson){
            return;
        }

        for(var i = 0; i < actionsJson.length; i++){

            var actionJson = actionsJson[i];

            if(!actionJson){
                continue;
            }

            var action = new ActionStruct();

            action.deserialize(actionJson);

            this._actions.push(action);
        }

        var linesJson = jsonObj[GameString.LINES];
        
        this._lines = new LinesStruct();

        this._lines.deserialize(linesJson);
    },
    /**
     * generate Object
     * @return {Object}
     */
    serialize: function(){
        return null;
    }
});

module.exports = FrameStruct;