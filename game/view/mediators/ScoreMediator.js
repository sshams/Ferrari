/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.ScoreMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    nicknameProxy: null,
    
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Score.PRACTICE, Delegate.create(this, this.practiceHandler));
        this.viewComponent.addEventListener(game.view.components.Score.PLAY, Delegate.create(this, this.playHandler));
        
        this.nicknameProxy = this.facade.retrieveProxy(game.model.proxy.NicknameProxy.NAME);
    },
    
    practiceHandler: function(event) {
        ApplicationFacade.IS_GAME_MODE = false;
        
        this.facade.sendNotification(ApplicationFacade.SHOW_PRACTICE_MODE);
    },
    
    playHandler: function(event) {
        ApplicationFacade.IS_GAME_MODE = true;
        
        if(!ApplicationFacade.DEBUG && ApplicationFacade.SCORES.length == 0){
            this.nicknameProxy.check();
        } else if(ApplicationFacade.SCORES.length < 3){
            this.facade.sendNotification(ApplicationFacade.SHOW_ATTEMPTS);
        }
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_SCORE,
            ApplicationFacade.RESET
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_SCORE:
                if(ApplicationFacade.SCORES.length) {
                    this.viewComponent.showPlayForReal2();
                }
                this.viewComponent.show();
                this.viewComponent.displayPractice(!ApplicationFacade.IS_GAME_MODE);
                this.viewComponent.populate(notification.getBody());
                break;
                
            case ApplicationFacade.RESET:
                this.viewComponent.reset();
                break;
        }
    }
    
},
{
    NAME: "ScoreMediator"
}
);