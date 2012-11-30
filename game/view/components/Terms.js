/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Terms",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("terms"));
        this.accept = document.getElementById("accept");
        
        this.addEventHandler(this.accept, events.MouseEvent.CLICK, Delegate.create(this, this.accept_clickHandler));
    }   
},
{
    accept: null,
    
    accept_clickHandler: function() {
        this.hide();
        _gaq.push(['_trackPageview', '/accept']); 
    }
}, 
{
    
}
);