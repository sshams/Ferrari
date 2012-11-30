/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'view.mediators.CopyRightMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.fadeOut();
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_PAGE
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_PAGE:
                this.viewComponent.animate(notification.getBody());
                break;
        }
    }
    
},
{
    NAME: "CopyRightMediator"
}
);