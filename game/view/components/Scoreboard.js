/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Scoreboard",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("scoreboard"));
        
        for(var i=0; i<3; i++) {
            this.buttons.push(document.getElementById("scoreboard_" + i));
            this.scores.push(document.getElementById("score_" + i));
            
            new Image().src = this.buttonsOn[i];
        }
    }
},
{
    index: 0,
    scores: [],
    buttons: [],
    buttonsOn: ["images/scoreboard_0_on.png", "images/scoreboard_1_on.png", "images/scoreboard_2_on.png"],
    buttonsOff: ["images/scoreboard_0.png", "images/scoreboard_1.png", "images/scoreboard_2.png"],
    
    update: function(score) {
        if(!score) {
            return;
        }
        if(score.seconds != -1) {
            this.scores[this.index].innerHTML = score.seconds.pad() + ":" + score.a.pad() + ":" + score.r1 + score.r2;
        } else {
            this.scores[this.index].innerHTML = "--:--:--";
        }
       
        if(this.index == this.buttonsOn.length - 1) {
            this.buttons[this.index].src = this.buttonsOff[this.index];
        }
        
        this.index++;
        
        
    },
    
    showAttempt: function(index) {
        if(index > 0) {
            this.buttons[index-1].src = this.buttonsOff[index-1];
        }
        if(index < this.buttons.length) {
            this.buttons[index].src = this.buttonsOn[index];
        }
    },
    
    reset: function() {
        this.index = 0;
        
        for(var i=0; i<this.scores.length; i++) {
            this.scores[i].innerHTML = "--:--:--";
        }
    }
}, 
{
    
}
);