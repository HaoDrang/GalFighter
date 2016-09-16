var Structs = require('chapterStruct');

var ChapterData = cc.Class({

    name:'ChapterData',

    properties: {
        _chapterData : {
            default:null,
            type:Structs.ChapterStruct,
            visible:false
        }
    },

    ctor: function(){
        this._chapterData = new Structs.ChapterStruct();
    },

    /**
     * initialize chapter with chapter xml string
     * @param [xmlString]{string}
     */
    initialize: function(xmlString){
        var parser = new DOMParser();
        this._chapterData.deserialize(parser.parseFromString(xmlString, "text/xml"));
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
