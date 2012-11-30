/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.ResultMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    saveProxy: null,
    rankProxy: null,
    
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Result.SAVE, Delegate.create(this, this.saveHandler));
        this.viewComponent.addEventListener(game.view.components.Result.THANKS, Delegate.create(this, this.thanksHandler));
        this.viewComponent.addEventListener(game.view.components.Result.RESET, Delegate.create(this, this.resetHandler));
        this.saveProxy = this.facade.retrieveProxy(game.model.proxy.SaveProxy.NAME);
        this.rankProxy = this.facade.retrieveProxy(game.model.proxy.RankProxy.NAME);
    },
    
    saveHandler: function(event) {
        if(!ApplicationFacade.DEBUG) {
            this.saveProxy.submit(ApplicationFacade.player, event.body);
            window.setTimeout(updateLeaderboard, 3000);
        }
    },
    
    thanksHandler: function(event) {
        if(ApplicationFacade.DEBUG) {
            this.facade.sendNotification(ApplicationFacade.SHOW_THANKS, 11)
        } else {
            this.rankProxy.fetch();
        }
    },

    resetHandler: function(event) {
        this.facade.sendNotification(ApplicationFacade.RESET);
    },

    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_RESULT
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_RESULT:
                this.viewComponent.show();
                this.viewComponent.populate(ApplicationFacade.SCORES);
                break;
        }
    }
    
},
{
    NAME: "ResultMediator"
}
);