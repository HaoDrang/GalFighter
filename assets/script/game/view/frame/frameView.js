var GameString = require('gameString');
/**Frame key for short */
cc.Class({
    extends: cc.Component,

    properties:()=>({
        actorTemplate:cc.Prefab,
        actorRoot:cc.Node,
        linesView:require('linesView'),
        background:cc.Sprite
    }),

    /**
     * clean node
     * @todo
     */
    unuse: function(){
        
    },

    /**
     * prepare node
     * @todo
     */
    reuse: function(){

    },

    /**
     * set frame data by dom generated from xml
     * @param [frame]{Document}
     */
    setFrameData: function(frame){
        this.setAction(frame.actions);
        this.setLines(frame.lines);
    },

    /**
     * set actions at this frame
     * @param [actions]{Document}
     * @todo
     */
    setAction: function(actions){
        // check actor
        // be aware of async issues
    },

    /**
     * @param [lines]{LinesStruct}
     */
    setLines: function(lines){
        if(this.linesView){
            this.linesView.setLines(lines);
        }
    },

    /**
     * @param [backgrounds]{Document}
     * @todo
     */
    setBackground: function(backgrounds){

    }
});
