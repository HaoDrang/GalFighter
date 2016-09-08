/**
 * splash screen
 * 
 */
//@instance
var gm = require('gameNamingSpace');
var appConstant = require('appConstant');
//@class
var GameCore = require('gameCore');
//@toolkit
var sceneTransition = require('sceneTransition');

cc.Class({
    extends: cc.Component,

    properties:{

        nextScene:cc.String,
        nextSceneReady:cc.Boolean,

        splashAnimation:cc.Animation,
        splashReady:cc.Boolean,

        loadProgress:cc.ProgressBar
    },

    onLoad: function () {
        this.nextSceneReady = false;
        this.splashReady    = false;

        this.loadProgress.node.active = false;

        this.initialize();
    },

    initialize : function(){

        this.splashAnimation.on('stop', this.onSplashReady, this);

        this.initializeGameCore();

        cc.director.preloadScene(this.nextScene, function(err){
            if(err){
                cc.error(err);
            }
            else{
                this.nextSceneReady = true;

                cc.log('[Load]Menu Scene ready');
                
                this.checkLoadState();
            }   
        }.bind(this));

        cc.loader.onProgress = this.onLoadingProress;
    },

    initializeGameCore: function(){
        gm.core = new GameCore();
        gm.core.initialize();
    },

    onLoadingProgress : function(completeCount, totalCount, item){
        if(this.loadProress){
            if(this.splashReady && !this.loadProgress.node.active){
                this.loadProgress.node.active = true;
            }

            this.loadProgress.progress = completeCount / totalCount;
        }
        cc.log(completeCount / totalCount);
    },

    onSplashReady : function(){
        this.splashReady = true;

        cc.log('[Splash]Splash Animation ready');

        this.checkLoadState();
    },

    checkLoadState: function(){
        if(this.nextSceneReady && this.splashReady){
            
            cc.log('[Transition] Transfer to new scene');

            sceneTransition.fadeOut(this.node, 
                                    function(){
                                        cc.director.loadScene (this.nextScene);
                                    }.bind(this));
        }
    }
});
