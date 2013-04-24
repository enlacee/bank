

function f__open_winLogin(pcapa, ptitulo, pancho, palto,pmodal){
	

	var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
    var simple = Ext.widget({
        xtype: 'form',
        layout: 'form',
        collapsible: false,
        id: 'formLogin',
        url: 'save-form.php',
        frame: true,
        //title: 'Form Login',
        bodyPadding: '5 5 0',
        width: 350,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        plugins: {
            ptype: 'datatip'
        },
        defaultType: 'textfield',


        // items: [{        	
        //     fieldLabel: 'Codigo de Usuario',
        //     afterLabelTextTpl: required,
        //     name: 'user',
        //     allowBlank: false,
        //     tooltip: 'Ingrese Nombre de Usuario'
        // }, {
        //     fieldLabel: 'Contraseña',            
        //     afterLabelTextTpl: required,
        //     inputType: 'password',
        //     name: 'password',
        //     allowBlank: false,            
        //     tooltip: 'Ingrese su contraseña'
        // }],
        buttons: [{
            text: 'Aceptar',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: 'Cancelar',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
    });



//-- 02

    var top = Ext.widget({
        xtype: 'form',
        id: 'multiColumnForm',
        url: '/security/index/login',//save-form.php
        //jsonSubmit: true,
        //collapsible: true,
        frame: true,
        border:0,
        //title: 'Multi Column, Nested Layouts and Anchoring',
        bodyPadding: '5 5 0',
        width: 290,
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },

        items: [{
            xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
            items:[{
                xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items: [{
                    xtype:'textfield',
                    fieldLabel: 'Usuario',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'user',
                    anchor:'95%',
                    value: ''
                }, {
                    xtype:'textfield',
                    inputType: 'password',
                    fieldLabel: 'Contraseña',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'password',
                    anchor:'95%'
                }]
            }]
        }],

        buttons: [{
            text: 'Aceptar',


	        handler: function() {
	            var form = this.up('form').getForm();
	            if (form.isValid()) {

	                form.submit({	                	
	                    success: function(form, action) {
	                       Ext.Msg.alert('Success', 'OK '+action.result.msg);
	                       console.log(form,action);
	                    },
	                    failure: function(form, action) {
	                        Ext.Msg.alert('Failed', 'ERROR '+action.result.msg);
	                        console.log(form,action);
	                    }
	                });
	            }
	        }



        },{
            text: 'Cancelar',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
    });

//-- 02
    // simple.render(document.body);	

	if( $('#'+pcapa).length == 0 ){

			var _tabsmat = {
					tab1 : { 
							id      		: 'tab_'+pcapa+'_access',
							title   		: 'Usuario',
							width   	: '100%',
						   // html			: ''
						   items			:top,
							},
					tab2 : { 
							id      		: 'tab_'+pcapa+'_help',
							title   		: 'Ayuda',
							width   	: '100%',
							}                                          
					};


			var _tabPanelMat = new Ext.TabPanel({
							activeTab     			: 0,
							id                		: 'tab_'+pcapa,
							enableTabScroll   		: true,
							border           		: false,
							width   				: '100%',
							height  				: '100%',               					
							items            		: [ _tabsmat.tab1, _tabsmat.tab2 ]
						});
				
			var _ventana=			new Ext.Window({
					id          			: pcapa,
					title       			: ptitulo,
					closable				: false,
					//plain				: true,
					//layout 				: 'fit',
					width       		: pancho,
					height      		: palto,
					minWidth    	: pancho,
					minHeight   	: palto,					
					resizable 		: false, 
					border     		: true,
					modal      		: pmodal,
					//closeAction 	: 'hide',
					maximized   	: false,
					constrain   		: true,
					maximizable 	: false,
					minimizable 	: false,
					collapsible 		: false,
					autoScroll  		: false,
					bodyStyle		: 'background:#fff',
					//padding 			: '10px',
					items      		 	: _tabPanelMat

				});
			
			Ext.getCmp(_ventana.id).show().el.center();				
		
	}

}



function f__win_msj(_titulo,_mensaje){
	Ext.Msg.minWidth = 360;
	Ext.Msg.alert(_titulo,_mensaje);

}
