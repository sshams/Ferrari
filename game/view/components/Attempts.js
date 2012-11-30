/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Attempts",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("attempts"));
        this.attempts = [document.getElementById("attempt_0"), document.getElementById("attempt_1"), document.getElementById("attempt_2")];
    }
},
{
    attempts: null,
    
    showAttempt: function(index) {
        for(var i=0; i<this.attempts.length; i++) {
            CSS.addClass(this.attempts[i], "hidden");
        }
        
        CSS.removeClass(this.attempts[index], "hidden");
        setTimeout(Delegate.create(this, this.startTimer_timeoutHandler), ApplicationFacade.DEBUG ? 500 : 2000);
    },
    
    startTimer_timeoutHandler: function() {
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.NEXT, null));
    }
   
}, 
{
    NEXT: 'next'
}
);