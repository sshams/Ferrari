/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.FalseStartMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.FalseStart.NEXT, Delegate.create(this, this.nextHandler));
    },
    
    nextHandler: function() {
        if(!ApplicationFacade.IS_GAME_MODE) { //practice mode
            this.facade.sendNotification(ApplicationFacade.SHOW_GAME);
        } else if(ApplicationFacade.IS_GAME_MODE && ApplicationFacade.SCORES.length < 3) {
            this.facade.sendNotification(ApplicationFacade.SHOW_ATTEMPTS);
        } else {
            this.facade.sendNotification(ApplicationFacade.SHOW_RESULT);
        }
    },

    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.LOSE
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.LOSE:
                this.viewComponent.show();
                this.viewComponent.startTimer();
                break;
        }
    }
    
},
{
    NAME: "FalseStartMediator"
}
);