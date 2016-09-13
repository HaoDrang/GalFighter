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
     * set frame data by dom from xml
     * @param [frame]{Document}
     * @param [part]{Document}
     * @todo
     */
    setFrameData: function(frame, part){

        this.setActor(frame.getElementById('Actors'));
        this.setConversation(frame.getElementById('Conversation'));
        this.setBackground(part.getElementById('Background'));
    },

    /**
     * @param [actors]{json}
     */
    setActor: function(actors){

    },

    /**
     * @param [conversations]{json}
     */
    setConversation: function(conversations){

    },

    /**
     * @param [backgrounds]{json}
     */
    setBackground: function(backgrounds){

    }
});
