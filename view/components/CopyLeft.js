/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.CopyLeft",
    parent: view.components.UIComponent,
    
    constructor: function(id) {
        view.components.UIComponent.call(this, document.getElementById(id));
    }
},
{
    index: null,
    
    animate: function(index) {
        if(this.index == index || index == 2) return;
        if(index == 0) {
            this.fadeIn();
        } else if(index == 1) {
            this.fadeOut();
        }
        this.index = index;
    },

    fadeIn: function() {
        $(this.element).delay(1000).animate({
            opacity: 1
        }, 300);
    },
    
    fadeOut: function() {
        $(this.element).animate({
            opacity: 0
        }, 300);
    }
}, 
{
    PAGE: 'page'
}
);