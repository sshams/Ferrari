/**
* @author Saad Shams :: sshams@live.com
* Copy or reuse is prohibited.
* */

puremvc.define(
{
    name: "game.controller.commands.StartupCommand",
    parent: puremvc.SimpleCommand
},
{
    execute: function(notification) {
        this.facade.registerProxy(new game.model.proxy.SaveProxy());
        this.facade.registerProxy(new game.model.proxy.NicknameProxy());
        this.facade.registerProxy(new game.model.proxy.RankProxy());
        this.facade.registerProxy(new game.model.proxy.MobileProxy());
        
        this.facade.registerMediator(new game.view.mediators.TermsMediator(new game.view.components.Terms()));
        this.facade.registerMediator(new game.view.mediators.MenuMediator(new game.view.components.Menu()));
        this.facade.registerMediator(new game.view.mediators.ScoreboardMediator(new game.view.components.Scoreboard()));
        this.facade.registerMediator(new game.view.mediators.InstructionsMediator(new game.view.components.Instructions()));
        this.facade.registerMediator(new game.view.mediators.PracticeModeMediator(new game.view.components.PracticeMode()));
        this.facade.registerMediator(new game.view.mediators.GameModeMediator(new game.view.components.GameMode()));
        this.facade.registerMediator(new game.view.mediators.BioMediator(new game.view.components.Bio()));
        this.facade.registerMediator(new game.view.mediators.AttemptsMediator(new game.view.components.Attempts()));
        this.facade.registerMediator(new game.view.mediators.FalseStartMediator(new game.view.components.FalseStart()));
        this.facade.registerMediator(new game.view.mediators.LightsMediator(new game.view.components.Lights()));
        this.facade.registerMediator(new game.view.mediators.TimerMediator(new game.view.components.Timer()));
        this.facade.registerMediator(new game.view.mediators.ScoreMediator(new game.view.components.Score()));
        this.facade.registerMediator(new game.view.mediators.ResultMediator(new game.view.components.Result()));
        this.facade.registerMediator(new game.view.mediators.ThanksMediator(new game.view.components.Thanks()));
    }
}
);