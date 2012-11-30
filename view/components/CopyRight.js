/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.CopyRight",
    parent: view.components.UIComponent,
    
    constructor: function(id) {
        view.components.UIComponent.call(this, document.getElementById(id));
        this.header = document.getElementById("header");
    }
},
{
    index: null,
    header: null,
    
    animate: function(index) {
        if(this.index == index || index == 2) return;
        
        var diff = this.getLeft() - (CSS.getLeft(this.header) + CSS.getWidth(this.header) - this.getWidth()) + 30;
        $(this.element).animate({
            left: -diff,
            opacity: 0
        }, 10);
        
        if(index == 1) {
            this.fadeIn();
        } else if(index == 0) {
            this.fadeOut();
        }
        this.index = index;

    },
    
    fadeIn: function() {
        $(this.element).delay(1100).animate({
            opacity: 1
        }, 500);
    },
    
    fadeOut: function() {
        $(this.element).animate({
            opacity: 0
        }, 500);
    }
}, 
{
    PAGE: 'page'
}
);