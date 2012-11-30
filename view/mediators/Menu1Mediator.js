/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'view.mediators.Menu1Mediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(view.components.Menu1.PAGE, Delegate.create(this, this.pageHandler));
    },

    pageHandler: function(event) {
        this.facade.sendNotification(ApplicationFacade.SHOW_PAGE, event.body);
    },
    
    listNotificationInterests: function() {
        return [
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {

        }
    }
    
},
{
    NAME: "Menu1Mediator"
}
);