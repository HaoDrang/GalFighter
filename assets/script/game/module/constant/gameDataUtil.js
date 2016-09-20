
/**
 * game data utils
 */
module.exports = {
    /**
     * get first element by name
     * @param [xmlDom]{XMLDocument}
     * @param [tagName]{string}
     * @return {string}
     */
    getFirstElementByName : function(xmlDom, tagName){
        if(tagName === undefined){
            cc.error('[ERROR] tagName not defined.');
        }
        try{
            var nodelist = xmlDom.getElementsByTagName(tagName);
            
            if(nodelist.length > 0){
                return nodelist[0]; 
            }
            return null;
        }
        catch(err){
            cc.log(err);
            cc.log(tagName);
            return null;
        }
 
    },
    /**
     * read properties from dom , add to target object
     * @param [target]{object}
     * @param [xmlDom]{Document}
     * @return {object}
     */
    addPropertiesFromDom : function(target, xmlDom){

        var attrs = xmlDom.attributes;
        for(var i = 0; i < attrs.length; i++){
            var att = attrs[i];

            if(target[att.name]){
                cc.warn('[XML] deserialize error, attributes conflicts:'+
                        att.name);
            }else{
                target[att.name] = att.value;
            }            
        }

        return target;
    },
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
