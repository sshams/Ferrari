/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "controller.commands.StartupCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.facade.registerMediator(new view.mediators.Menu1Mediator(new view.components.Menu1()));
        this.facade.registerMediator(new view.mediators.PageMediator(new view.components.Page("page_0")));
        this.facade.registerMediator(new view.mediators.PageMediator(new view.components.Page("page_1")));
        this.facade.registerMediator(new view.mediators.CarMediator(new view.components.Car()));
        this.facade.registerMediator(new view.mediators.CopyLeftMediator(new view.components.CopyLeft("copy_left")));
        this.facade.registerMediator(new view.mediators.CopyRightMediator(new view.components.CopyRight("copy_right")));
        
        this.facade.registerMediator(new view.mediators.OverlayMediator(new view.components.Overlay("overlay")));
    }
}
);