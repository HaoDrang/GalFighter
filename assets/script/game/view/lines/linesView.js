cc.Class({
    extends: cc.Component,

    properties: {
        //private
        _data:Object,
        //public
        /**@todo set to RichText when new stable version released */
        textLb:cc.Label
    },

    // use this for initialization
    onLoad: function () {

    },

    /**
     * setup lines text
     * @param [data]{LinesStruct}
     */
    setLines: function(data){
        this._data = data;
        this.textLb.string = data.textContent;
    }
});
