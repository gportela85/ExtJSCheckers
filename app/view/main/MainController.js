Ext.define('Checkers.view.main.MainController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.MainController',
    timer: null,
    seconds: 0,
    minutes: 0,
    hours: 0,

    restartGame: function() {
        var vm = this.getViewModel(),
            board = this.lookupReference('checkersboard'),
            boardController = board.getController();

        boardController.resetBoard();

        vm.set({
            turn: 'clear',
            gameTime: '00:00:00',
            clearMoves: 0,
            darkMoves: 0,
            clearPieces: 12,
            darkPieces: 12
        });

        this.resetTimer();
    },

    startTimer: function() {
        var me = this;
        if (!me.timer) {
            me.timer = window.setInterval(function() {
                me.add.call(me);
            }, 1000);
        }
    },

    add: function() {
        var me = this,
            vm = this.getViewModel();

        me.seconds++;
        
        if (me.seconds >= 60) {
            me.seconds = 0;
            me.minutes++;
            if (me.minutes >= 60) {
                me.minutes = 0;
                me.hours++;
            }
        }
    
        vm.set('gameTime', (me.hours ? (me.hours > 9 ? me.hours : "0" + me.hours) : "00") + ":" + (me.minutes ? (me.minutes > 9 ? me.minutes : "0" + me.minutes) : "00") + ":" + (me.seconds > 9 ? me.seconds : "0" + me.seconds));
    },

    resetTimer: function() {
        window.clearInterval(this.timer);
        this.timer = null;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    },
});