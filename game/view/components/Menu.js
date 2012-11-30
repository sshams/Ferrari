/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
   name: 'game.view.components.Menu',
   parent: view.components.UIComponent,
   
   constructor: function() {
       view.components.UIComponent.call(this, document.getElementById("menu"));
       
       this.practice = document.getElementById("practice");
       this.play = document.getElementById("play");
       
       this.addEventHandler(this.practice, events.MouseEvent.CLICK, Delegate.create(this, this.practice_clickHandler));
       this.addEventHandler(this.play, events.MouseEvent.CLICK, Delegate.create(this, this.play_clickHandler));
   }
},
{
   practice: null,
   play: null,
   
   practice_clickHandler: function(event) {
       view.components.Event.adapt(event);
       this.hide();       
       this.dispatchEvent(new view.components.Event(this.constructor.PRACTICE, this.practice));
       _gaq.push(['_trackPageview', '/online-speed-test/practice']);
       
   },
   
   play_clickHandler: function(event) {
       view.components.Event.adapt(event);
       this.hide();
       this.dispatchEvent(new view.components.Event(this.constructor.PLAY, this.play));
       _gaq.push(['_trackPageview', '/online-speed-test/real-play']);
   }
},
{
    PRACTICE: 'practice',
    PLAY: 'play'
}
);