/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.AttemptsMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Attempts.NEXT, Delegate.create(this, this.nextHandler));
    },

    nextHandler: function() {
        this.facade.sendNotification(ApplicationFacade.SHOW_GAME);
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_ATTEMPTS
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_ATTEMPTS:
                this.viewComponent.show();
                this.viewComponent.showAttempt(ApplicationFacade.SCORES.length);
                break;
        }
    }
    
},
{
    NAME: "AttemptsMediator"
}
);