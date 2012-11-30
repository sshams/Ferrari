/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.GameModeMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.PracticeMode.NEXT, Delegate.create(this, this.nextHandler));
    },
    
    nextHandler: function() {
        this.facade.sendNotification(ApplicationFacade.SHOW_ATTEMPTS);
    },
    
    listNotificationInterests: function() {
        return [ApplicationFacade.SHOW_GAME_MODE];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_GAME_MODE:
                this.viewComponent.show();
                this.viewComponent.startTimer();
                break;
        }
    }

},
{
    NAME: "GameModeMediator"
}
);