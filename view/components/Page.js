/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.Page",
    parent: view.components.UIComponent,
    
    constructor: function(id) {
        view.components.UIComponent.call(this, document.getElementById(id));
        this.index = id.split("_")[1];
        
        if(this.index == 0) {
            //this.setLeft(CSS.getLeft(document.getElementById("header")));
        }

        this.addEventHandler(window, events.Window.RESIZE, Delegate.create(this, this.resizeHandler));
        this.header = document.getElementById("header");
    }
},
{
    index: null,
    header: null,
    
    resizeHandler: function() {
        //this.setLeft(CSS.getLeft(this.header));
    },
    
    animate: function(index) {
        if(index == 0 || index == 1) {
            CSS.show(document.getElementById("page_0"));
            CSS.hide(document.getElementById("page_1"));
        }
        
        if(index == 1) {
            JSTweener.addTween(this.element.style, {
                time: 1,
                delay: 1,
                transition: 'linear'
            });
        } else if(index == 0) {
            JSTweener.addTween(this.element.style, {
                time: 1,
                delay: 0,
                transition: 'linear'
            });
        } else if(index == 2) { //online speed test
            CSS.hide(document.getElementById("page_0"));
            CSS.show(document.getElementById("page_1"));
        }
    },
    
    onCompleteHandler: function() {

    }
}, 
{
    PAGE: 'page'
}
);