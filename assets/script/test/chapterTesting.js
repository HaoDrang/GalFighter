var ChapterController = require('chapterController');
var chapterData = require('chapterData');
var GCFG = require('gameConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        chapterTemplate:cc.Prefab,
        targetchapter:cc.String
    },

    // use this for initialization
    onLoad: function () {
        cc.loader.loadResAll(GCFG.CHAPTER_PATH, this.loadDataDone.bind(this));
    },

    loadDataDone: function(err, assets){

        this.chapter = new chapterData();
        this.chapter.initialize(assets[0]);

        var chapterUI = cc.instantiate(this.chapterTemplate);
        this.node.addChild(chapterUI);

        var chapterCtrl = new ChapterController();
        chapterCtrl.initialize(this.chapter, chapterUI);

        chapterCtrl.play(1);
    } 
});
