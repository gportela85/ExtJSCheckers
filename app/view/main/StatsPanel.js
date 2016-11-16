Ext.define('Checkers.view.main.StatsPanel',{
    extend: 'Ext.panel.Panel',
    xtype: 'statspanel',
    title: 'Game Stats',
    border: true,
    collapsible: true,
    cls: 'x-checkers-stats',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        margin: 5
    },
    items: [{
        xtype: 'label',
        bind: {
            html: '<span class="property">Turn:</span> <span class="value">{turn}</span>'
        }
    },{
        xtype: 'label',
        bind: {
            html: '<span class="property">Clear Piece Moves:</span> <span class="value">{clearMoves}</span>'
        }
    },{
        xtype: 'label',
        bind: {
            html: '<span class="property">Dark Piece Moves:</span> <span class="value">{darkMoves}</span>'
        }
    },{
        xtype: 'label',
        bind: {
            html: '<span class="property">Remaining Clear Pieces:</span> <span class="value">{clearPieces}</span>'
        }
    },{
        xtype: 'label',
        bind: {
            html: '<span class="property">Remaining Dark Pieces:</span> <span class="value">{darkPieces}</span>'
        }
    },{
        xtype: 'label',
        bind: {
            html: '<span class="property">Total Game Time:</span> <span class="value">{gameTime}</span>'
        }
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        ui: 'footer',
        items: ['->',{
            text: 'Restart Game',
            handler: 'restartGame'
        },'->']
    }]
});