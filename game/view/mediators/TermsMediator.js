/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: 'game.view.mediators.TermsMediator',
    parent: puremvc.Mediator,
    
    constructor: function(component) {
        puremvc.Mediator.call(this, this.constructor.NAME, component);
    }
},
{
    onRegister: function() {
    },
    
    listNotificationInterests: function() {
        return [];
    },
    
    handleNotification: function(notification) {
        switch(notification.getName()) {

        }
    }
    
},
{
    NAME: "TermsMediator"
}
);