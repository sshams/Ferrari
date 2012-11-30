/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.model.proxy.MobileProxy',
    parent: puremvc.Proxy,
    
    constructor: function(data){
        puremvc.Proxy.call(this, this.constructor.NAME, data);
        
        if(window.XMLHttpRequest) {
            this.xmlhttp = new XMLHttpRequest();
        } else {
            this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        this.xmlhttp.onreadystatechange = Delegate.create(this, this.xmlhttp_onreadystatechangeHandler);
    }
},
{
    xmlhttp: null,
    URL: "/kuwait/save_mobile.php",
    params: [],
    
    xmlhttp_onreadystatechangeHandler: function() {
        if(this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
            
            var pairs = this.xmlhttp.responseText.split("&");
            for(var i=0; i<pairs.length; i++) {
                this.params[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
            }
            
            if(this.params['success'] != 1) {
                //alert("Error connecting to the Server. Try again! (MP)");
            } else {
                this.facade.sendNotification(ApplicationFacade.THANKS_DONE);
            }
        }
    },
    
    onRegister: function() {
    },
    
    submit: function(mobile) {
        this.xmlhttp.open("GET", this.URL + "?mobile=" + mobile, true);
        this.xmlhttp.send(); 
    }
},
{
    NAME: 'MobileProxy'
}
);