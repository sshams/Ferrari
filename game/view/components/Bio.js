/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Bio",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("bio"));
        
        this.player = document.getElementById("player");
        this.continueButton = document.getElementById("continue1");
        
        this.addEventHandler(this.continueButton, events.MouseEvent.CLICK, Delegate.create(this, this.continueButton_clickHandler));
    }
},
{
    player: null,
    continueButton: null,
    
    continueButton_clickHandler: function() {
        if(this.player.value == "") {
            alert('Please enter your name.');
        } else if(this.validate()){
            this.hide();
            this.dispatchEvent(new view.components.Event(this.constructor.NEXT, null, this.player.value));
        } else {
            alert('Please enter a valid name (Alphanumeric).');
        }
    },
    
    validate: function() {
        var regx = /^(?=.*[a-z])[0-9a-z]+$/i;
        if(regx.test(this.player.value)) {
            return true;
        } else {
            return false;
        }
    },
    
    player_dropHandler: function(event) {
        return false;
    }
}, 
{
    NEXT: 'next'
}
);