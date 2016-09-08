/**
 * menu scene canvas node script
 */
var sceneTransition = require('sceneTransition');

cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {

    },

    start : function(){

        sceneTransition.fadeIn(this.node, function(){
            cc.log('menu scene faded in!')
        });
    }
});
