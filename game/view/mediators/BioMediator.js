/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.BioMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Bio.NEXT, Delegate.create(this, this.nextHandler));
    },
    
    nextHandler: function(event) {
        ApplicationFacade.player = event.body;
        this.facade.sendNotification(ApplicationFacade.SHOW_GAME_MODE);
    },
    
    listNotificationInterests: function() {
        return [ApplicationFacade.SHOW_BIO];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_BIO:
                this.viewComponent.show();
                break;
        }
    }
    
},
{
    NAME: "BioMediator"
}
);