var SpawningPool = require('spawningPool');
var ActorViewStr = 'actorRender';

/*************************************
 * Generate a new actor
 *************************************/

var ActorGenerator = cc.Class({
    properties: {
        _pool:SpawningPool,
        _infoMap:Object,
        /**Resources Map 
         * {
         *      actorKey1:{
         *          (if upgrade to animation action, use cc.Prefab) 
         *          actionKey1:cc.SpriteFrame 
         *          actionKey1:cc.SpriteFrame 
         *      }
         *      actorKey2:{
         *          actionKey2:cc.SpriteFrame 
         *          actionKey2:cc.SpriteFrame 
         *      }
         * }
         */
        _resMap:Object,

        actorTemplate:cc.Prefab
    },
    /**
     * @param [infos]{Object} infos of initialize
     * @param [res]{Object} serialized resources 
     */
    initialize:function(infos, res){
        this._infoMap = infos;
        this._resMap = res;

        this._pool = new SpawningPool();
        this._pool.initialize(actorTemplate, ActorViewStr);
    },
    /**
     * create a new actor
     */
    generate:function(actorKey){
        var actorInfo = this._infoMap[actorKey];

        if(!actorInfo){
            cc.warn("[WARNING] key do not exist in map. Key:" + actorKey);
            return;
        }

        var actor = this._pool.spawn();

        var script = actor.getComponent(ActorViewStr);
        actor.initialize(actorInfo, this._resMap[actorKey]);

        return actor;
    }
});



module.exports = ActorGenerator;

