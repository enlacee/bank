

// new Ext.Component({
//  	renderTo	: Ext.getBody(),        
//        html: 'INTERFAZ PARA MULTIUSUARIO!!'
//    });


// var filterPanel = Ext.create('Ext.panel.Panel', {
//     bodyPadding: 5,  // Don't want content to crunch against the borders
//     width: 300,
//     title: 'Filters',
//     items: [{
//         xtype: 'datefield',
//         fieldLabel: 'Start date'
//     }, {
//         xtype: 'datefield',
//         fieldLabel: 'End date'
//     }],
//     //renderTo: Ext.getBody()
// });
// filterPanel.doAutoRender();


// var container = Ext.create('Ext.container.Container', {
//     layout: {
//         type: 'vbox'
//     },
//     width: 400,
//     //renderTo: Ext.getBody(),
//     border: 1,
//     style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px'},
//     defaults: {
//         labelWidth: 80,
//         // implicitly create Container by specifying xtype
//         xtype: 'datefield',
//         flex: 1,
//         style: {
//             padding: '10px'
//         }
//     },
//     items: [{
//         xtype: 'datefield',
//         name: 'startDate',
//         fieldLabel: 'Start date'
//     },{
//         xtype: 'datefield',
//         name: 'endDate',
//         fieldLabel: 'End date'
//     }]
// });
// container.doAutoRender();




// // PANEL
// Ext.create('Ext.Panel', {
//     width: 500,
//     height: 400,
//     title: "VBoxLayout Panel",
//     frame:true,
//     id: 'panel_de_anibal',
//     icon: '/assets/img/system/ico/favicon.ico',
//     //fbar: [{ type: 'button', text: 'xx 1' }],
// 	//lbar: [{ xtype: 'button', text: 'Button 1' }],	
// 	tools: [{
//         type: 'help',
//         handler: function(){
//             // show help here
//         }
//     },{type:'close'}, {
//         itemId: 'refresh',
//         type: 'refresh',
//         hidden: true,
//         handler: function(){
//             // do refresh
//         }
//     }, {
//         type: 'search',
//         handler: function(event, target, owner, tool){
//             // do search
//             owner.child('#refresh').show();
//         }
//     }],
// 	dockedItems: [{
// 	    xtype: 'toolbar',
// 	    dock: 'bottom',//right
// 	    items: [
// 	        { xtype: 'label', text: 'Infinity24 @2013',position: 'right'}
// 	    ]
// 	}],
//     listeners: {
//         click: {
//             element: 'el', //bind to the underlying el property on the panel
//             fn: function(){ console.log('click el PANEL '+this.id); }
//         },
// 		dblclick: {
//             element: 'body', //bind to the underlying body property on the panel
//             fn: function(){ console.log('dblclick body'); }
//         }        
//     },
//     loader: {
//         url: 'hola.html',
//         autoLoad: true
//     },    
//     //disabled: true,
//     layout: {
//         type: 'vbox',
//         align: 'stretch',
//         defaultMargins : {top: 5, right: 10, bottom: 15, left: 20},
//         padding: '10px'
//     },
//     renderTo: document.body,
//     items: [{
//         xtype: 'panel',
//         title: 'Inner Panel One',
//         width: 250,
//         flex: 2
//     },
//     {
//         xtype: 'panel',
//         title: 'Inner Panel Two',
//         width: 250,
//         flex: 4
//     },
//     {
//         xtype: 'panel',
//         title: 'Inner Panel Three',
//         width: '50%',
//         flex: 4
//     }]
// });



// // PANEL BORDER COLAPSE
// var panel = Ext.create('Ext.panel.Panel', {
//     width: 500,
//     height: 300,
//     title: 'Border Layout',
//     layout: 'border',
//     shadow: {mode:'drop'},
//     items: [{
//         title: 'South Region is resizable',
//         region: 'south',     // position for region
//         xtype: 'panel',
//         height: 100,
//         split: true,         // enable resizing
//         margins: '0 5 5 5'
//     },{
//         // xtype: 'panel' implied by default
//         title: 'West Region is collapsible',
//         region:'west',
//         xtype: 'panel',
//         margins: '5 0 0 5',
//         width: 200,
//         collapsible: true,   // make collapsible
//         id: 'west-region-container',
//         layout: 'fit'
//     },{
//         title: 'Center Region',
//         region: 'center',     // center region is required, no width/height specified
//         xtype: 'panel',
//         layout: 'fit',
//         margins: '5 5 0 0'
//     }],
//     //renderTo: Ext.getBody()
// });

// panel.doAutoRender();
// panel.center();
// panel.disable();
// panel.hide(null,function(){console.log("cerro")},'');
// panel.show();
// panel.setTitle('pepe lucho');



