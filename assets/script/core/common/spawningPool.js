
var SpawningPool = cc.Class({

    name:'SpawningPool',

    properties: {
        /**Prototype */
        _prototype:Object,
        /** */
        _pool: cc.NodePool
    },

    /**
     * @param [proto] {Prototype}
     * @param [processor] {function}
     * @param [componentName] {string}
     */
    initialize: function(proto, processor, componentName){

        _prototype = proto;

        _pool = new cc.NodePool(componentName);
    },

    /**
     * generate a new entity with demanded data
     */
    spawn: function(){
        var entity = this._pool.get();

        if(!entity){
            entity = cc.instantiate(this._prototype);
        }

        return entity;
    },

    /**
     * recycle target node
     * @param [node]{}
     */
    recycle: function(node){
        this._pool.put(node);
    }
});

module.exports = SpawningPool;
