/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.InstructionsMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Instructions.NEXT, Delegate.create(this, this.nextHandler));
    },
    
    nextHandler: function(event) {
        this.facade.sendNotification(ApplicationFacade.SHOW_PRACTICE_MODE);
    },
    
    listNotificationInterests: function() {
        return [ApplicationFacade.SHOW_INSTRUCTIONS];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_INSTRUCTIONS:
                this.viewComponent.show();
                break;
        }
    }
},
{
    NAME: "InstructionsMediator"
}
);