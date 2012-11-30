/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Timer",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("timer"));
        
        this.stop = document.getElementById("stop");
        this.go = document.getElementById("go");
        this.display = document.getElementById("display");
        
        this.addEventHandler(this.go, events.MouseEvent.MOUSE_DOWN, Delegate.create(this, this.go_mouseDownHandler));
        this.addEventHandler(this.stop, events.MouseEvent.MOUSE_DOWN, Delegate.create(this, this.stop_mouseDownHandler));
    }
},
{
    stop: null,
    go: null,
    display: null,
    
    a: 0,
    b: 1,
    r1: 1,
    r2: 1,
    seconds: 0,
    intervalID: null,
    
    start: function() {
        CSS.addClass(this.stop, "hidden");
        CSS.removeClass(this.go, "hidden");
        this.intervalID = setInterval(Delegate.create(this, this.intervalHandler), 1);
    },
    
    intervalHandler: function() {
        this.r1 = 1 + Math.floor(Math.random() * 9);
        this.r2 = 1 +Math.floor(Math.random() * 9);
        
        this.b+=5;
        
        if(this.b == 10) {
            this.b = 0;
            this.a++;
            
            if(this.a > 99) {
                this.a = 0;
                this.seconds++;
                
                if(this.seconds == 5) {
                    clearInterval(this.intervalID);
                    this.r1 = 0;
                    this.r2 = 0;
                }
            }
        }
        
        this.display.innerHTML = this.seconds.pad() + ":" + this.a.pad() + ":" + this.r1 + this.r2;
    },
    
    go_mouseDownHandler: function() {
        clearInterval(this.intervalID);
        this.dispatchEvent(new view.components.Event(this.constructor.NEXT, null, {seconds:this.seconds, a:this.a, r1:this.r1, r2:this.r2}));
        this.hide();
    },
    
    stop_mouseDownHandler: function() {
        clearInterval(this.intervalID);
        this.dispatchEvent(new view.components.Event(this.constructor.LOSE, null, {seconds:-1}));
        this.hide();
    },
    
    reset: function() {
        this.a = 0,
        this.b = 0,
        this.r1 = 1,
        this.r2 = 1,
        this.seconds = 0,
        this.display.innerHTML = "00:00:00";
        
        CSS.removeClass(this.stop, "hidden");
        CSS.addClass(this.go, "hidden");
    }
    
}, 
{
    NEXT: "next",
    LOSE: "lose"
}
);