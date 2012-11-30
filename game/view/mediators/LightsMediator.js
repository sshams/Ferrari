/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.LightsMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Lights.START_TIMER, Delegate.create(this, this.startTimerHandler));
    },
    
    startTimerHandler: function(event) {
        this.facade.sendNotification(ApplicationFacade.START_TIME);
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_GAME,
            ApplicationFacade.LOSE,
            ApplicationFacade.RESET
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_GAME:
                this.viewComponent.reset();
                this.viewComponent.startGame();
                break;
            case ApplicationFacade.LOSE:
                this.viewComponent.stopTimer();
                break;
            case ApplicationFacade.RESET:
                this.viewComponent.reset();
                break;
        }
    }
    
},
{
    NAME: "LightsMediator"
}
);