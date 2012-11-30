/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Score",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("score"));
        this.score = document.getElementById("score");
        this.time = document.getElementById("time");
        
        this.practiceAgain = document.getElementById("practiceAgain");
        this.playForReal = document.getElementById("playForReal");
        this.playForReal2 = document.getElementById("playForReal2");
        
        this.addEventHandler(this.practiceAgain, events.MouseEvent.CLICK, Delegate.create(this, this.practiceAgain_clickHandler));
        this.addEventHandler(this.playForReal, events.MouseEvent.CLICK, Delegate.create(this, this.playForReal_clickHandler));
        this.addEventHandler(this.playForReal2, events.MouseEvent.CLICK, Delegate.create(this, this.playForReal_clickHandler));
    }
},
{
    score:null,
    time: null,
    practiceAgain: null,
    playForReal: null,
    playForReal2: null,
    
    practiceAgain_clickHandler: function(event) {
        view.components.Event.adapt(event);
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.PRACTICE, null));
        
        _gaq.push(['_trackPageview', '/online-speed-test/practice']);
    },
    
    playForReal_clickHandler: function(event) {
        view.components.Event.adapt(event);
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.PLAY, null));
        
        if(event.target != this.playForReal2) {
            _gaq.push(['_trackPageview', '/online-speed-test/real-play']);
        }
    },
    
    populate: function(score) {
        this.time.innerHTML = score.seconds.pad() + ":" + score.a.pad() + ":" + score.r1 + score.r2;
    },
    
    showPlayForReal2: function() {
        CSS.hide(this.playForReal);
        CSS.show(this.playForReal2);
    },
    
    displayPractice: function(display) {
        if(display) {
            CSS.removeClass(this.practiceAgain, "hidden");
        } else {
            CSS.addClass(this.practiceAgain, "hidden");
        }
    },
    
    reset: function() {
        CSS.show(this.playForReal);
        CSS.hide(this.playForReal2);
    }
    
}, 
{
    PRACTICE: 'practice',
    PLAY: 'play'
}
);