/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.ScoreboardMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_ATTEMPTS,
            ApplicationFacade.SHOW_SCORE,
            ApplicationFacade.SHOW_RESULT,
            ApplicationFacade.LOSE,
            ApplicationFacade.RESET
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_ATTEMPTS:
                this.viewComponent.showAttempt(ApplicationFacade.SCORES.length);
                break;
            case ApplicationFacade.SHOW_SCORE:
            case ApplicationFacade.SHOW_RESULT:
            case ApplicationFacade.LOSE:
                if(ApplicationFacade.IS_GAME_MODE ) {
                    this.viewComponent.update(notification.getBody());
                }
                break;
            case ApplicationFacade.RESET:
                ApplicationFacade.IS_GAME_MODE = false;
                ApplicationFacade.player = "";
                ApplicationFacade.SCORES = [];
                this.viewComponent.reset();
                break;
        }
    }
    
},
{
    NAME: "ScoreboardMediator"
}
);