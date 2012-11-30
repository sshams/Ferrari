/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Result",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("result"));
        this.results = [document.getElementById("result_0"), document.getElementById("result_1"), document.getElementById("result_2")];
        this.best = document.getElementById("best");
    }
},
{
    results: null,
    best: null,
    
    populate: function(scores) {
        var total = -1;
        var index = -1;
        
        for(var i=0; i<scores.length; i++) {
            
            if(scores[i].seconds == -1) {
                this.results[i].innerHTML = "&nbsp; &nbsp; --:---";
                continue;
            }
            
            this.results[i].innerHTML = scores[i].seconds.pad() + ":" + scores[i].a.pad() + ":" + scores[i].r1 + scores[i].r2;
            
            var sum = (scores[i].seconds * 10000) + (scores[i].a * 100) + (scores[i].r1 * 10 + scores[i].r2);
            
            if(total == -1 || sum < total) {
                total = sum;
                index = i;
            }
        }
        
        if(index != -1) {
            
            this.best.innerHTML = scores[index].seconds.pad() + ":" + scores[index].a.pad() + ":" + scores[index].r1 + scores[index].r2;
                this.dispatchEvent(new view.components.Event(this.constructor.SAVE, this, {total: total, str:this.best.innerHTML}));
                
            window.setTimeout(Delegate.create(this, this.showThanks), (ApplicationFacade.DEBUG) ? 1000 : 2500);
            
        } else {
            this.best.innerHTML = "--:--:--";
            //this.dispatchEvent(new view.components.Event(this.constructor.SAVE, this, -1));
            alert("You can do better! Please try again.");
            this.hide();
            this.dispatchEvent(new view.components.Event(this.constructor.RESET, this));
        }
    },
    
    showThanks: function() {
        this.hide();
        this.dispatchEvent(new view.components.Event(this.constructor.THANKS, this));
    }
}, 
{
    SAVE: "save",
    THANKS: "thanks",
    RESET: "reset"
}
);