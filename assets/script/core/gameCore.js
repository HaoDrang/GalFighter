/**
 * core of the game
 * sound and storage goes here
 */
var GameCore = cc.Class({
    properties: {
        sound   : Object,
        storage : Object
    },

    initialize: function(){
        this.sound      = new require('sound');
        this.storage    = new require('storage');
    },

    start : function(){

    },

    pause: function(){

    },

    restart: function(){

    },

    exit: function(){

    }
});

module.exports = GameCore;
