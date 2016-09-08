var sceneTransition = require('sceneTransition');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        sceneTransition.fadeIn(this.node, this.stageReady.bind(this));
    },

    stageReady: function(){
        cc.log('stage Ready');
    }
});
