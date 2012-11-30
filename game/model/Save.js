/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.model.proxy.SaveProxy',
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
    URL: "http://therush.lbmena.com/kuwait/save.php",
    
    xmlhttp_onreadystatechangeHandler: function() {
        if(this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
            if(this.xmlhttp.responseText.split("&")[0].split("=")[1] != 1) {
                alert("Couldn't connect to the server. Try again!");
                if(console) console.log(this.xmlhttp.responseText);
            } else {
                if(console) console.log(this.xmlhttp.responseText);
            }
        }
    },
    
    onRegister: function() {
    },
    
    submit: function(nickname, score) {
        this.xmlhttp.open("GET", this.URL + "?nickname=" + nickname + "&score=" + score, true);
        this.xmlhttp.send(); 
        if(console) console.log(this.URL + "?nickname=" + nickname + "&score=" + score);
    }
},
{
    NAME: 'SaveProxy'
}
);