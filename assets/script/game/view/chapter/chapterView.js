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
        _chapterDataHandler:Object,
    },

    /**
     * init chapter view with data
     * @param [moduleHandler]{ChapterData}
     */
    initialize: function(moduleHandler){
        this._chapterDataHandler = moduleHandler;

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
        var fm = this._framePool.get();
        this.node.addChild(fm);
        fm.setFrameDataByDom(this._chapterDataHandler.getFrameDom(0));
    }
});
