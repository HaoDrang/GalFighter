
var ChapterController = cc.Class({
    name:'ChapterController',

    properties:()=>({
        _view:require('chapterView'),
        _module:require('chapterData'),

        _chapterKey:cc.String,
        _frameIndex:cc.Integer
    }),

    ctor:function(){
        this._view = null;
        this._module = null;
        this._chapterKey = "";
        this._frameIndex = 0;
    },

    /**
     * initialize chapter controller
     * @param [chapterNode] {cc.Node}  [chapterData] {chapterData}
     */
    initialize: function(chapterDataHandler, chapterNode){

        this._module = chapterDataHandler;

        this._view = chapterNode.getComponent('chapterView');
        
        this._view.initialize(this._module);
    },

    /**
     * set current chapter
     * @param [key]{string}
     */
    setchapter: function(key){

        this._chapterKey = key;

        this._view.setchapter(key);

        return this;
    },

    /**
     * call back at target frame, identified by id
     * @param [id]{number}  [callback]{function}
     * @return {chapterConroller}
     * @todo
     */
    setCallback: function(id, callback){

        return this;
    },

    /**
     * play target frame
     * @param [index]{number}
     */
    play: function(index = 0){
        this._frameIndex = index;

        this._view.play(this._frameIndex);

        return this;
    }
});

module.exports = ChapterController;