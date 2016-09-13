var ChapterData = cc.Class({
    // extends: cc.Component,

    name:'ChapterData',

    properties: {
        _chapterData : Object
    },

    ctor: function(){
        this._chapterData = null;
    },

    /**
     * initialize chapter with chapter xml string
     * @param [xmlString]{string}
     */
    initialize: function(xmlString){
        var parser = new DOMParser();
        this._chapterData = parser.parseFromString(xmlString, "text/xml");
    },

    /**
     * get chapter data
     * @return {Document}
     */
    getChapterData: function(){
        return _chapterData;
    }
});

module.exports = ChapterData;
