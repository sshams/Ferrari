/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.Menu1",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("menu1"));
        this.buttons = [document.getElementById("menu1_0"), document.getElementById("menu1_1"), document.getElementById("menu1_2"), document.getElementById("menu1_3")];
        
        for(var i=0; i<this.buttons.length-1; i++) {
            this.addEventHandler(this.buttons[i], events.MouseEvent.CLICK, Delegate.create(this, this.buttons_clickHandler));
        }
        this.addEventHandler(this.buttons[this.buttons.length-1], events.MouseEvent.CLICK, Delegate.create(this, this.video_clickHandler));
        
        for(i=0; i<this.buttonsOn.length; i++) {
            new Image().src = this.buttonsOn[i];
        }
        this.buttons[0].src = this.buttonsOn[0];
        
        
        this.first = document.getElementById("first");
        this.second = document.getElementById("second");
        
        
        this.addEventHandler(this.first, events.MouseEvent.CLICK, Delegate.create(this, this.first_clickHandler));
        this.addEventHandler(this.second, events.MouseEvent.CLICK, Delegate.create(this, this.second_clickHandler));
    }
},
{
    disabled: false,
    buttons: null,
    buttonsOn: ["images/menu_1_on.png", "images/menu_2_on.png", "images/menu_3_on.png"],
    buttonsOff: ["images/menu_1.png", "images/menu_2.png", "images/menu_3.png"],
    
    first: null,
    second: null,
    
    buttons_clickHandler: function(event) {
        if(this.disabled) return;
        view.components.Event.adapt(event);
        
        var id = parseInt(event.target.id.split("_")[1]);
        this.reset(id);
        this.dispatchEvent(new view.components.Event(this.constructor.PAGE, event.target, id));
        
        this.disabled = true;
        setTimeout(Delegate.create(this, this.enable), (id!=2) ? 1000 : 300);
        
        if(id == 0) {
            _gaq.push(['_trackPageview', '/the-race']);
        } else if(id == 1) {
            _gaq.push(['_trackPageview', '/about-the-rush']); 
        } else if(id == 2) {
            _gaq.push(['_trackPageview', '/online-speed-test']); 
        }
    },
    
    first_clickHandler: function(event) {
        if(this.disabled) return;
        view.components.Event.adapt(event);
        this.reset(2);
        this.dispatchEvent(new view.components.Event(this.constructor.PAGE, event.target, 2))
        
        this.disabled = true;
        setTimeout(Delegate.create(this, this.enable), 1200);
        
        _gaq.push(['_trackPageview', '/online-speed-test']); 
    },
    
    second_clickHandler: function(event) {
        if(this.disabled) return;
        view.components.Event.adapt(event);
        this.reset(2);
        this.dispatchEvent(new view.components.Event(this.constructor.PAGE, event.target, 2));
        
        this.disabled = true;
        setTimeout(Delegate.create(this, this.enable), 1200);
        
        _gaq.push(['_trackPageview', '/online-speed-test']); 
    },
    
    video_clickHandler: function(event) {
        window.location = "video2.php";
    },
    
    enable: function() {
        this.disabled = false;
    },
    
    reset: function(id) {
        for(var i=0; i<this.buttons.length-1; i++) {
            if(id != i) {
                this.buttons[i].src = this.buttonsOff[i];
            } else {
                this.buttons[id].src = this.buttonsOn[id];
            }
        }
    }
}, 
{
    PAGE: 'page'
}
);