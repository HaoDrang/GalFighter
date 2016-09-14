var FKEY = require('gameString');
/**Frame key for short */
cc.Class({
    extends: cc.Component,

    properties: {

        actorRoot:cc.Node,
        conversationRoot:cc.Node,

        background:cc.Sprite
    },

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
    setFrameDataByDom: function(frame){
        this.setAction(frame.getElementById(FKEY.ACTIONS));
        this.setLines(frame.getElementById(FKEY.LINES));
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
     * @param [conversations]{Document}
     * @todo
     */
    setLines: function(lines){
        cc.log(lines);
    },

    /**
     * @param [backgrounds]{Document}
     * @todo
     */
    setBackground: function(backgrounds){

    }
});
