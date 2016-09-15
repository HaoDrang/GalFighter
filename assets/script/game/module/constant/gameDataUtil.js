
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
        var nodelist = xmlDom.getElementsByTagName(tagName);
        return nodelist.item(0);  
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
            var att = attrs.item(i);

            if(target[att.name]){
                cc.warn('[XML] deserialize error, attributes conflicts:'+
                        att.name);
            }else{
                target[att.name] = att.value;
            }            
        }

        return target;
    }

};
