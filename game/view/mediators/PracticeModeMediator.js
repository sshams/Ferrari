/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.PracticeModeMediator',
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
        this.facade.sendNotification(ApplicationFacade.SHOW_GAME);
    },
    
    listNotificationInterests: function() {
        return [ApplicationFacade.SHOW_PRACTICE_MODE];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_PRACTICE_MODE:
                this.viewComponent.show();
                this.viewComponent.startTimer();
                break;
        }
    }

},
{
    NAME: "PracticeModeMediator"
}
);