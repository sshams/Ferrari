/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.Overlay",
    parent: view.components.UIComponent,
    
    constructor: function(id) {
        view.components.UIComponent.call(this, document.getElementById(id));
        this.play = document.getElementById("playForOverlay");
        this.gameCloseButton = document.getElementById("gameCloseButton");
        
        this.addEventHandler(this.play, events.MouseEvent.CLICK, Delegate.create(this, this.play_mouseDownHandler));
        this.addEventHandler(this.gameCloseButton, events.MouseEvent.CLICK, Delegate.create(this, this.gameCloseButton_mouseDownHandler));
    }
},
{
    play: null,
    gameCloseButton: null,
     
    play_mouseDownHandler: function() {
        CSS.removeClass(this.element, "hidden");
        _gaq.push(['_trackPageview', '/online-speed-test/play']);
    },
    
    gameCloseButton_mouseDownHandler: function() {
        CSS.addClass(this.element, "hidden");
    }
}, 
{
}
);