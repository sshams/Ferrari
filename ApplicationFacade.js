/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


puremvc.define(
{
    name: 'ApplicationFacade',
    parent: puremvc.Facade
},
{
    startup: function() {
        if(!this.initialized) {
            this.initialized = true;
            this.registerCommand(ApplicationFacade.STARTUP, controller.commands.StartupCommand);
            this.sendNotification(ApplicationFacade.STARTUP);
        }
    },
    
    startGame: function() {
        if(!this.initialized) {
            this.initialized = true;
            this.registerCommand(ApplicationFacade.GAME_STARTUP, game.controller.commands.StartupCommand);
            this.sendNotification(ApplicationFacade.GAME_STARTUP);
        }
    }
},
{
    getInstance: function(multitonKey) {
        var instanceMap = puremvc.Facade.instanceMap;
        instance =instanceMap[multitonKey];
        if(instance) {
            return instance;
        }
        
        return instanceMap[multitonKey] = new ApplicationFacade(multitonKey);
    },
    
    DEBUG: false,
    
    NAME: "BeFirst",
    STARTUP: "startup",
    SHOW_PAGE: "showPage",
    
    GAME: "Game",
    GAME_STARTUP: "gameStartup",
    SHOW_INSTRUCTIONS: "showInstructions",
    SHOW_PRACTICE_MODE: "showPracticeMode",
    SHOW_GAME_MODE: "showGameMode",
    SHOW_GAME: "showGame",
    SHOW_ATTEMPTS: "showAttempts",
    START_TIME: "startTime",
    SHOW_SCORE: "showScore",
    SHOW_BIO: "showBio",
    SHOW_RESULT: "showResult",
    SHOW_THANKS: "showThanks",
    THANKS_DONE: "thanksDone",
    RESET: "reset",
    LOSE: "lose",
    
    IS_GAME_MODE: false,
    SCORES: [],
    player: null,
    mobile: null,
    nickname: null
}
);