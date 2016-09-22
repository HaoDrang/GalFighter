
/**
 * game data utils
 */
module.exports = {

    /**
     * replace [] with <>
     * @param [source]{string}
     * @return {string}
     */
    convertLines: function(source){
        var ret = source.replace(/\[/g, '<');
        ret = ret.replace(/\]/g, '>');

        return ret;
    }

};
