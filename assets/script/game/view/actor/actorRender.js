/********************************
 * Actor Render
 ********************************/
var ActorRender = cc.Class({
    extends: cc.Component,

    properties: {
        _info:Object,
        _res:Object,

        _template:Object,
    },

    reuse:function(){   
        /**@todo check properties initialization */
    },

    unuse:function(){
        /**@todo reverse to template */
    },

    initialize: function(info, res){
        this._template._info = cc.instantiate(this._info);
        this._template._res  = cc.instantiate(this._res);

        this._info  = cc.instantiate(info);
        this._res   = cc.instantiate(res);;
    },

    clear: function(){
        this._info = this._template._info;
        this._res  = this._template._res;
    }
});

module.exports = ActorRender;