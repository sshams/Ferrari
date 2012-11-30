/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "view.components.Pages",
    parent: view.components.UIComponent,
    
    constructor: function() {
        view.components.UIComponent.call(this, this.pages);
        this.pages = [document.getElementById("page_0"), document.getElementById("page_1"), document.getElementById("page_2")];
        
        this.car = document.getElementById("car");
        this.content = document.getElementById("content");
        this.content1 = document.getElementById("content1");
        
        this.hideContent1();
        this.content.filter = 'alpha(opacity=100)';
        this.content.opacity = 100;
    }
},
{
    pages: null,
    car: null,
    content: null,
    content1: null,

    showPage: function(page) {
        
        if(page == 0) {
            CSS.show(this.pages[0]);
            CSS.hide(this.pages[2]);
            
            this.hideContent1();
            
            JSTweener.addTween(this.pages[0].style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                width: 1024
            });
            
            JSTweener.addTween(this.car.style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                left: 0,
                onComplete: Delegate.create(this, this.showContent)
            });
            
            JSTweener.addTween(this.content1.style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                left: 200
            });
        }

        if(page == 1) {
            CSS.show(this.pages[0]);
            CSS.hide(this.pages[2]);
            
            this.hideContent();
            
            this.content.style.filter = 'alpha(opacity=0)';
            this.content.style.opacity = 0;
            
            JSTweener.addTween(this.pages[0].style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                width: 1600
            });
            
            JSTweener.addTween(this.car.style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                left: -900,
                onComplete: Delegate.create(this, this.showContent1)
            });
            
            JSTweener.addTween(this.content1.style, {
                time: 1,
                delay: 1,
                transition: 'linear',
                left: -200
            });
        }
        
        if(page == 2) {
            CSS.hide(this.pages[0]);
            CSS.show(this.pages[2]);
        }
    },
    
    hidePages: function() {
        for(var i=0; i<this.pages.length; i++) {
            CSS.addClass(this.pages[i], "hidden");
        }
    },
    
    showContent: function() {
        JSTweener.addTween(this.content.style, {
                time: 1,
                transition: 'linear',
                onUpdate: function() {
                    var d = new Date();
                    var progress = (1 - (this.endTime - d.getTime()) / (this.time*1000));
                    this.target.filter = 'alpha(opacity='+(progress*100)+')';
                    this.target.opacity = progress;
                }
        });
    },
    
    hideContent: function() {
        JSTweener.addTween(this.content.style, {
                time: 1,
                transition: 'linear',
                onUpdate: function() {
                    var d = new Date();
                    var progress = 1 - (1 - (this.endTime - d.getTime()) / (this.time*1000));
                    progress = Math.round(progress * 100)/100;
                    this.target.filter = 'alpha(opacity='+(progress*100)+')';
                    this.target.opacity = progress;
                }
        });
    },
    
    showContent1: function() {
        JSTweener.addTween(this.content1.style, {
                time: 1,
                transition: 'linear',
                onUpdate: function() {
                    var d = new Date();
                    var progress = (1 - (this.endTime - d.getTime()) / (this.time*1000));
                    this.target.filter = 'alpha(opacity='+(progress*100)+')';
                    this.target.opacity = progress;
                }
        });
    },
    
    hideContent1: function() {
        JSTweener.addTween(this.content1.style, {
                time: 1,
                transition: 'linear',
                onUpdate: function() {
                    var d = new Date();
                    var progress = 1 - (1 - (this.endTime - d.getTime()) / (this.time*1000));
                    this.target.filter = 'alpha(opacity='+(progress*100)+')';
                    this.target.opacity = progress;
                }
        });
    }
}, 
{
    PAGE: 'page'
}
);