/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Lights",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("lights"));
        this.reds = [document.getElementById("red_0"), document.getElementById("red_1"), document.getElementById("red_2")];
        this.greens = [document.getElementById("green_0"), document.getElementById("green_1"), document.getElementById("green_2")];
    }
},
{
    reds:null,
    greens: null,
    intervalID: null,
    intervalID2: null,
    currentID: 0,
    
    startGame: function() {
        this.intervalID = window.setInterval(Delegate.create(this, this.intervalHandler), ApplicationFacade.DEBUG ? 500 : 1000);
    },
    
    intervalHandler: function() {
        CSS.removeClass(this.reds[this.currentID], "hidden");
        
        this.currentID++;
        
        if(this.currentID >= this.reds.length) {
            clearInterval(this.intervalID);
            this.intervalID2 = setTimeout(Delegate.create(this, this.startTimer), ApplicationFacade.DEBUG ? 500 : 750 + Math.random() * 1000);
        }
    },
    
    startTimer: function() {
        for(var i=0; i<this.greens.length; i++) {
            CSS.removeClass(this.greens[i], "hidden");
            CSS.addClass(this.reds[i], "hidden");
        }
        
        this.dispatchEvent(new view.components.Event(this.constructor.START_TIMER, null));
    },
    
    stopTimer: function() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID2);
    },
    
    reset: function() {
        this.currentID = 0;
        for(var i=0; i<this.reds.length; i++) {
            CSS.addClass(this.reds[i], "hidden");
            CSS.addClass(this.greens[i], "hidden");
        }
    }
}, 
{
    NEXT: 'next',
    START_TIMER: 'startTimer'
}
);