/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.TimerMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Timer.NEXT, Delegate.create(this, this.nextHandler));
        this.viewComponent.addEventListener(game.view.components.Timer.LOSE, Delegate.create(this, this.loseHandler));
    },
    
    nextHandler: function(event) {
        if(ApplicationFacade.IS_GAME_MODE) {
            ApplicationFacade.SCORES.push(event.body);
        }
        
        if(ApplicationFacade.SCORES.length < 3) {
            this.facade.sendNotification(ApplicationFacade.SHOW_SCORE, event.body);
        } else {
            this.facade.sendNotification(ApplicationFacade.SHOW_RESULT, event.body);
        }
    },
    
    loseHandler: function(event) {
        if(ApplicationFacade.IS_GAME_MODE) {
            ApplicationFacade.SCORES.push(event.body);
        }
        this.facade.sendNotification(ApplicationFacade.LOSE, event.body);
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_GAME,
            ApplicationFacade.START_TIME
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_GAME:
                this.viewComponent.reset();
                this.viewComponent.show();
                break;
            case ApplicationFacade.START_TIME:
                this.viewComponent.reset();
                this.viewComponent.start();
                break;
        }
    }
    
},
{
    NAME: "TimerMediator"
}
);