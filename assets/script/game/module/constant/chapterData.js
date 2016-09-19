var Structs = require('chapterStruct');
var XML = require('xml2json');

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
        this._chapterData.deserialize(parser.parseFromString(xmlString));
    },

    /**
     * get chapter data
     * @return {Document}
     */
    getChapterData: function(){
        return _chapterData;
    },

    /**
     * get frame data by key
     * @param [partIndex]{number}
     * @param [frameIndex]{number}
     * @return {Object}
     */
    getFrameDataByIndex: function(partIndex, frameIndex){
        if(!this._chapterData) return null;

        var part = this._chapterData.getPartByIndex(partIndex);

        return part.getFrameByIndex(frameIndex);
    }
});

module.exports = ChapterData;
