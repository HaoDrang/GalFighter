var GameConstant = require('gameConstant');

/**
 * chapter View
 */

cc.Class({
    extends: cc.Component,

    properties: {
        //public
        framePrefab:cc.Prefab,
        //private
        _frameArray:[],
        _framePool:cc.NodePool,
        _chapterData:Object,
    },

    /**
     * init chapter view with data
     * @param [moduleHandler]{ChapterData}
     */
    initialize: function(moduleHandler){
        this._chapterData = moduleHandler;

        this._initFramePool();

    },
    
    _initFramePool: function(){
        
        this._framePool = new cc.NodePool('frameView');

        for(var i = GameConstant.MAX_FRAME_POOL_VALUME; i--;){
            
            this._framePool.put(cc.instantiate(this.framePrefab));
        
        }
    },

    /**
     * @todo
     */
    setChapter: function(key){

    },
    /**
     * @todo
     */
    play: function(index){

    }
});
