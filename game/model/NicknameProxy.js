/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.model.proxy.NicknameProxy',
    parent: puremvc.Proxy,
    
    constructor: function(data){
        puremvc.Proxy.call(this, this.constructor.NAME, data);
        
        if(window.XMLHttpRequest) {
            this.xmlhttp = new XMLHttpRequest();
        } else {
            this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        this.xmlhttp.onreadystatechange = Delegate.create(this, this.xmlhttp_onreadystatechangeHandler);
        //this.intervalID = setTimeout(Delegate.create(this, this.timeOut), 5000);
    }
},
{
    xmlhttp: null,
    URL: "/kuwait/nickname.php",
    params: [],
    intervalID: null,
    
    timeOut: function() {
        this.xmlhttp.abort();
        alert("Request timed out, Please try again!");
    },
    
    xmlhttp_onreadystatechangeHandler: function() {
        if(this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
            
            var pairs = this.xmlhttp.responseText.split("&");
            for(var i=0; i<pairs.length; i++) {
                this.params[pairs[i].split("=")[0]] = pairs[i].split("=")[1];
            }
            
            if(this.params['success'] != 0) {
                this.facade.sendNotification(ApplicationFacade.SHOW_BIO);
            } else {
                ApplicationFacade.nickname = this.params['nickname'];
                ApplicationFacade.mobile = this.params['mobile'];
                this.facade.sendNotification(ApplicationFacade.SHOW_GAME_MODE);
            }
        }
    },
    
    onRegister: function() {
    },
    
    check: function() {
        this.xmlhttp.open("GET", this.URL, true);
        this.xmlhttp.send(); 
    }
},
{
    NAME: 'NicknameProxy'
}
);