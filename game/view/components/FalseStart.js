/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.FalseStart",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("falseStart"));
    }
},
{
    startTimer: function() {
        setTimeout(Delegate.create(this, this.startTimer_timeoutHandler), 2000);
    },
    
    startTimer_timeoutHandler: function() {
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.NEXT, null));
    }
}, 
{
    NEXT: "next"
}
);