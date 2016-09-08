/**
 * scene transition function assembly
 */
var gm = require('gameNamingSpace');

var sceneTransition = {
    fadeIn : function(node, callBack){
        var fadeInAction = cc.sequence([
            cc.fadeIn(gm.appConstant.SCENE_FADE_IN_DURATION),
            cc.callFunc(callBack)
        ]);

        node.runAction(fadeInAction);
    },

    fadeOut : function(node, callBack){
        var fadeOutAction = cc.sequence([
            cc.fadeOut(gm.appConstant.SCENE_FADE_OUT_DURATION),
            cc.callFunc(callBack)
        ]);

        node.runAction(callBack);
    }
};