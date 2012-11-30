/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Instructions",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("instructions"));
        this.continueButton = document.getElementById("continue");
        this.addEventHandler(this.continueButton, events.MouseEvent.CLICK, Delegate.create(this, this.continue_clickHandler));
    }
},
{
    continueButton: null,
    
    continue_clickHandler: function(event) {
        view.components.Event.adapt(event);
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.NEXT, this.continueButton));
    }
}, 
{
    NEXT: 'next'
}
);