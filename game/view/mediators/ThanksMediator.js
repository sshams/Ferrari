/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.ThanksMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    mobileProxy: null,
    
    onRegister: function() {
        this.viewComponent.addEventListener(game.view.components.Thanks.SUBMIT, Delegate.create(this, this.submitHandler));
        this.viewComponent.addEventListener(game.view.components.Thanks.RESET, Delegate.create(this, this.resetHandler));
        this.mobileProxy = this.facade.retrieveProxy(game.model.proxy.MobileProxy.NAME);
    },
    
    submitHandler: function(event) {
        ApplicationFacade.mobile = event.body;
        this.mobileProxy.submit(event.body);
    },
    
    resetHandler: function(event) {
        this.facade.sendNotification(ApplicationFacade.RESET);
    },
    
    listNotificationInterests: function() {
        return [
            ApplicationFacade.SHOW_THANKS,
            ApplicationFacade.THANKS_DONE
        ];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {
            case ApplicationFacade.SHOW_THANKS:
                if(ApplicationFacade.nickname && ApplicationFacade.mobile) {
                    this.viewComponent.mode2();
                } else {
                    this.viewComponent.mode1();
                }
                this.viewComponent.populate(notification.getBody());
                this.viewComponent.show();
                break;
            case ApplicationFacade.THANKS_DONE:
                this.viewComponent.mode2();
                break;
        }
    }
    
},
{
    NAME: "ThanksMediator"
}
);