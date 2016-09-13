/**
 * chapter View
 */
var ChapterData = require('chapterData');

cc.Class({
    extends: cc.Component,

    properties: {
        _frameArray:[],
        _chapterData:Object,
    },

    // use this for initialization
    onLoad: function () {

    },
    /**
     * @todo
     */
    setchapter: function(key){
        this._chapterData = ChapterData.getChapterData(key);
    },
    /**
     * @todo
     */
    play: function(index){

    }
});
