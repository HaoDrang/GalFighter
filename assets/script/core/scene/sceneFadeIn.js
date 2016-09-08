/**
 * Must attach on the root canvas of the scene
 */

var sceneTransition = require('sceneTransition');

cc.Class({
    extends: cc.Component,

    editor:{
        requireComponent : cc.Canvas
    },

    // use this for initialization
    onLoad: function () {
        sceneTransition.fadeIn(this.node, null);
    }
});
