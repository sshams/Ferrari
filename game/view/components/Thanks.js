/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.view.components.Thanks",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("thanks"));
        
        this.mobile = document.getElementById("mobile");
        this.mobileDiv = document.getElementById("mobileDiv");
        this.submitButton = document.getElementById("submitButton");
        this.rank = document.getElementById("rank");
        
        this.thanksCopy2 = document.getElementById("thanksCopy2");
        this.thanksCopy3 = document.getElementById("thanksCopy3");
        
        this.thanksClose = document.getElementById("thanksClose");
        this.thanksCloseButton = document.getElementById("thanksCloseButton");
        
        this.addEventHandler(this.submitButton, events.MouseEvent.MOUSE_DOWN, Delegate.create(this, this.submitButton_clickHandler));
        this.addEventHandler(this.thanksCloseButton, events.MouseEvent.MOUSE_DOWN, Delegate.create(this, this.thanksCloseButton_clickHandler));
        this.addEventHandler(this.mobile, events.KeyboardEvent.KEY_UP, Delegate.create(this, this.mobile_keyUpHandler));
    }
},
{
    mobile: null,
    mobileDiv: null,
    submitButton: null,
    rank: null,
    thanksCopy2: null,
    thanksCopy3: null,
    
    thanksClose: null,
    thanksCloseButton: null,
        
    mobile_keyUpHandler: function(event) {
        view.components.Event.adapt(event);
        event.target.value = event.target.value.replace(/[^0-9-'.'-',']/g,"");
    },
    
    submitButton_clickHandler: function(event) {
        view.components.Event.adapt(event);
        
        if(this.mobile.value.length < 8) {
            alert('Please enter a valid mobile number.');
        } else {
            this.dispatchEvent(new view.components.Event(this.constructor.SUBMIT, this, this.mobile.value));
            this.mobile.value = "";
            CSS.hide(this.mobileDiv);
            CSS.hide(this.submitButton);
        }
    },
    
    thanksCloseButton_clickHandler: function() {
        this.hide();
        hideGame();
        CSS.hide(this.thanksCopy3);
        this.dispatchEvent(new view.components.Event(this.constructor.RESET, this));
    },
    
    populate: function(rank) {
        this.rank.innerHTML = rank;
    },
    
    mode1: function() {
        CSS.show(this.submitButton);
        CSS.show(this.mobileDiv);
        CSS.show(this.thanksCopy2);
        
        CSS.hide(this.thanksCopy3);
        CSS.hide(this.thanksClose);
    },
    
    mode2: function() {
        CSS.hide(this.submitButton);
        CSS.hide(this.mobileDiv);
        CSS.hide(this.thanksCopy2);
        
        CSS.show(this.thanksCopy3);
        CSS.show(this.thanksClose);
    },
    
    reset: function() {
        CSS.show(this.submitButton);
        CSS.show(this.mobileDiv);
        CSS.show(this.thanksCopy2);
        CSS.hide(this.thanksCopy3);
        this.mobile.value = "";
    }
}, 
{
    NEXT: "next",
    LOSE: "lose",
    SUBMIT: "submit",
    RESET: "reset"
}
);