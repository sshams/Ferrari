/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.MenuMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    nicknameProxy: null,
    
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Menu.PRACTICE, Delegate.create(this, this.menu_practiceHandler));
        this.viewComponent.addEventListener(game.view.components.Menu.PLAY, Delegate.create(this, this.menu_playHandler));
        
        this.nicknameProxy = this.facade.retrieveProxy(game.model.proxy.NicknameProxy.NAME);
    },
    
    menu_practiceHandler: function() {
        ApplicationFacade.IS_GAME_MODE = false;
        this.facade.sendNotification(ApplicationFacade.SHOW_INSTRUCTIONS);
    },
    
    menu_playHandler: function() {
        ApplicationFacade.IS_GAME_MODE = true;
        
        if(ApplicationFacade.DEBUG) {
            this.facade.sendNotification(ApplicationFacade.SHOW_GAME_MODE);
        } else {
            this.nicknameProxy.check();
        }
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.RESET
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.RESET:
                this.viewComponent.show();
                break;
        }
    }
},
{
    NAME: "MenuMediator"
}
);