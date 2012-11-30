/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.Car",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, document.getElementById("car"));
        this.header = document.getElementById("header");
        this.copy_right = document.getElementById("copy_right");
    }
},
{
    index: 0,
    header: null,
    copy_right: null,
    
    animate: function(index) {
        if(this.index == index || index == 2) return;
        
        if(index == 0) {
            this.moveRight();
        } else if(index == 1) {
            this.moveLeft();
        }
        this.index = index;
    },
    
    moveLeft: function() {
        var diff = this.getLeft() - (CSS.getLeft(this.header) + CSS.getWidth(this.header) - this.getWidth() - CSS.getWidth(this.copy_right));
        
        $(this.element).delay(500).animate({
            left: -diff
        }, 400);   
    },
    
    moveRight: function() {
         $(this.element).delay(500).animate({
            left: 0
        }, 400);
    }
}, 
{
    PAGE: 'page'
}
);