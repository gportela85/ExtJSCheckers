Ext.define('Checkers.view.main.Main',{
    extend: 'Ext.panel.Panel',
    requires: [
        'Checkers.view.main.MainController',
        'Checkers.view.board.Board',
        'Checkers.view.main.StatsPanel'
    ],
    title: 'ExtJS Checkers',
    cls: 'x-checkers',
    controller: 'MainController',
    viewModel: {
        data: {
            turn: 'clear',
            gameTime: '00:00:00',
            clearMoves: 0,
            darkMoves: 0,
            clearPieces: 12,
            darkPieces: 12
        }
    },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'container',
        layout: 'center',
        flex: 1,
        items: [{
            xtype: 'checkersboard',
            reference: 'checkersboard'
        }]
    },{
        xtype: 'container',
        margin: 5,
        width: 200,
        items: [{
            xtype: 'statspanel'
        }]
    }]
});