/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.model.proxy.URLProxy',
    parent: puremvc.Proxy,
    
    constructor: function(data){
        puremvc.Proxy.call(this, this.constructor.NAME, document.location.search.replace("?", "").split("&"));
    }
},
{
    onRegister: function() {
    },
    
    getValue: function(param) {
        for(var i=0; i<this.data.length; i++) {
            var pair = this.data[i].split("=");
            if(param == pair[0]) {
                return pair[1];
            }
        }
        return null;
    }
},
{
    NAME: 'URLProxy'
}
);