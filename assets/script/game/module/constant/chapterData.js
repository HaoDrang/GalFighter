var XMLKEY = require('gameString');

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
        /**@todo "turn target to object for easy handling" */
        this._chapterData = this.convert(parser.parseFromString(xmlString, "text/xml"));
    },

    /**
     * get chapter data
     * @return {Document}
     */
    getChapterData: function(){
        return _chapterData;
    },

    /**
     * get frame Document
     * @return {Document}
     * @todo
     */
    getFrameDom: function(index){

        
        return ;
    }
});

module.exports = ChapterData;
