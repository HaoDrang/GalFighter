
var SpawningPool = cc.Class({

    properties: {
        /**Prototype */
        _prototype:Object,
        /**Processor Function */
        _processor:Object,
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

        _processor = processor;

        _pool = new cc.NodePool(componentName);
    },

    /**
     * @param [dataObject] {Object}
     * @param [dataJson] {Object}
     * @return {Object}
     */
    propertyProcessor:function(dataObject, dataJson){
        try{
            return cc.js.mixin(dataObject, dataJson);
        }
        catch(err){
            return dataObject;
        }
    },

    /**
     * create an entity by copy or 
     * reuse the entity in the pool
     * @return {object}
     */
    getEntity: function(){
        var entity = this._pool.get();

        if(!entity){
            entity = cc.instantiate(this._prototype);
        }

        return entity;
    },

    /**
     * generate a new entity with demanded data
     * @return {Object}
     */
    spawn:function(dataJson = null){
        var entity = this.getEntity();

        if(dataJson){
            if(!entity.info){
                entity.info = {};
            }else{
                entity.templateInfo = cc.js.mixin({}, entity.info);
            }
            this.propertyProcessor(entity.info, dataJson);
        }

        if(this._processor){
            this._processor(entity);
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
