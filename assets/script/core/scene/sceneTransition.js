/**
 * scene transition function assembly
 */
var appConstant = require('appConstant');

var sceneTransition = {
    fadeIn : function(node, callBack){
        
        node.opacity = 0;

        var fadeInAction = cc.sequence([
            cc.fadeIn(appConstant.SCENE_FADE_IN_DURATION),

            cc.callFunc(function(){
                if(callBack){
                    callBack();
                }
            })
        ]);

        node.runAction(fadeInAction);
    },

    fadeOut : function(node, callBack){
        var fadeOutAction = cc.sequence([
            cc.fadeOut(appConstant.SCENE_FADE_OUT_DURATION),
            
            cc.callFunc(function(){
                if(callBack){
                    callBack();
                }
            })
        ]);

        node.runAction(fadeOutAction);
    }
};

module.exports = sceneTransition;