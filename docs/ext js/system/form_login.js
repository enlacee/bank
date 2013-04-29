
function f__open_winLogin(pcapa, ptitulo, pancho, palto,pmodal){
	

	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
//-- 02

    // var top = Ext.widget({
    //     xtype: 'form',
    //     id: 'multiColumnForm',
    //     url: '/security/index/login',//save-form.php
    //     //jsonSubmit: true,
    //     //collapsible: true,
    //     frame: true,
    //     border:0,
    //     //title: 'Multi Column, Nested Layouts and Anchoring',
    //     bodyPadding: '5 5 0',
    //     width: 290,
    //     fieldDefaults: {
    //         labelAlign: 'top',
    //         msgTarget: 'side'
    //     },

    //     items: [{
    //         xtype: 'container',
    //         anchor: '100%',
    //         layout: 'hbox',
    //         items:[{
    //             xtype: 'container',
    //             flex: 1,
    //             layout: 'anchor',
    //             items: [{
    //                 xtype:'textfield',
    //                 fieldLabel: 'Usuario',
    //                 afterLabelTextTpl: required,
    //                 allowBlank: false,
    //                 name: 'user',
    //                 anchor:'95%',
    //                 value: ''
    //             }, {
    //                 xtype:'textfield',
    //                 inputType: 'password',
    //                 fieldLabel: 'Contraseña',
    //                 afterLabelTextTpl: required,
    //                 allowBlank: false,
    //                 name: 'password',
    //                 anchor:'95%'
    //             }]
    //         }]
    //     }],

    //     buttons: [{
    //         text: 'Aceptar',


	   //      handler: function() {
	   //          var form = this.up('form').getForm();
	   //          if (form.isValid()) {

	   //              form.submit({	                	
	   //                  success: function(form, action) {
	   //                     Ext.Msg.alert('Success', 'OK '+action.result.msg);
	   //                     console.log(form,action);
	   //                  },
	   //                  failure: function(form, action) {
	   //                      Ext.Msg.alert('Failed', 'ERROR '+action.result.msg);
	   //                      console.log(form,action);
	   //                  }
	   //              });
	   //          }
	   //      }



    //     },{
    //         text: 'Cancelar',
    //         handler: function() {
    //             this.up('form').getForm().reset();
    //         }
    //     }]
    // });



// Define the model for a State
Ext.define('State', {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'abbr'},
        {type: 'string', name: 'name'},
        {type: 'string', name: 'slogan'}
    ]
});

// The data for all states
function createStore() {
    var store = Ext.create('Ext.data.Store', {
        autoDestroy: true,
        model: 'State',
        proxy: {
            type: 'ajax',
            url : '/security/index/load-combo'
        }
    });
    // {"abbr":"1","name":"ADMINISTRADOR","slogan":"ADMINISTRADOR"},
    store.load();
    return store;
}


Ext.define('KitchenSink.view.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'login-form',
    //title: 'Seleccion de rol',
    frame:false,
    //width: 320,
    url: '/security/index/login-rol',
    bodyPadding: 10,    
    defaultType: 'textfield',
    defaults: {
    anchor: '100%'
    },
    
    items: [
        {
            allowBlank: false,
            fieldLabel: 'Email',
            name: 'user',
            emptyText: 'user id',
            value:'acopitan@gmail.com',
            readOnly:true
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password',
            value : '123',
            readOnly:true
        },
        {   allowBlank: false,            
            xtype:'combobox',
            fieldLabel: '<strong>Select Rol</strong>',
            name: 'rol',
            editable: false,
            displayField: 'name', //model
            valueField: 'abbr',   //model
            store: createStore(),
            queryMode: 'local',

            //allQuery: 'a',
            forceSelection:false,
            blankText: 'Seleccione combo',
            
            selectOnFocus:false, 
            selectOnTab:true,       
            autoSelect : true,
            //enableRegEx : true,
            //typeAhead: true,
            listeners: {
                afterrender: function(cmp){
                    // After rendering the component will have a title property
                    //console.log("pinto combooo",this);
                    //console.log(this.store);
                    //this.store = createStore();
                },
                select: function(combo,data){ 
                    console.log('data value es = ',data[0].data.abbr);
                }

            }




        },

    ],
    
    buttons: [
        { text:'Aceptar',
        handler: function() {
            // The getForm() method returns the Ext.form.Basic instance:
            var form = this.up('form').getForm();

            // console.log('form',form);
            // console.log('form.monitor',form.monitor.items.items);
            // var dataForm = form.monitor.items.items
            // var bandera = true;
            // for(var i=0;dataForm.length>0;i++){
            //     if(dataForm[i].value =='' || dataForm[i].value == null ){
            //         bandera = false;
            //         break;
            //     }
            // }
            // console.log('bandera',bandera);
            // console.log('form.isValid()',form.isValid());
            // if(bandera == false){f__win_msj(__TW_System,'No se permite Campos vacios'); return false;}

            if (form.isValid() /*&& bandera*/) {
                // Submit the Ajax request and handle the response
                form.submit({
                    success: function(form, action) {
                       Ext.Msg.alert('Success', action.result.message);
                           
                    },
                    failure: function(form, action) {                        
                        Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                    }
                });
            }
        }



        },
        { text:'Cancelar' }
    ]
});
var obj = new KitchenSink.view.form.LoginForm();
//obj.doAutoRender();





//-- 02
    // simple.render(document.body);	

	if( $('#'+pcapa).length == 0 ){


				
			var _ventana = new Ext.Window({
					id: pcapa,
					title: ptitulo,
					closable: true,
					plain: true,
					layout: 'fit',
                    // layout: {
                    //     //type: 'vbox',       // Arrange child items vertically
                    //     align: 'stretch',    // Each takes up full width
                    //     //padding: 5
                    // },                    
					width: pancho,
					height: palto,
					minWidth: pancho,
					minHeight: palto,					
					resizable: false, 
					border: false,
					modal: pmodal,
					//closeAction: 'hide',
					maximized: false,
					constrain: true,
					maximizable: false,
					minimizable: false,
					collapsible: false,
					autoScroll: false,
					//bodyStyle: 'background:#fff',
					//padding: '10px',
					items: {xtype:'panel', id:'panel_'+pcapa, items:[obj]}

				});
			
			Ext.getCmp(_ventana.id).show().el.center();				
		
	}

}

