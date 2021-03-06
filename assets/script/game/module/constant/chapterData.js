var ChapterStruct = require('chapterStruct');

var ChapterData = cc.Class({

    name:'ChapterData',

    properties: {
        _chapterData : {
            default:null,
            type:ChapterStruct,
            visible:false
        }
    },

    ctor: function(){
        this._chapterData = new ChapterStruct();
    },

    /**
     * initialize chapter with chapter  string
     * @param [jsonString]{object}
     */
    initialize: function(jsonObject){
        this._chapterData.deserialize(jsonObject);
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
