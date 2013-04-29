
// Login js
var __datosUsuario; // data JSON data



// Funcion Iniciadora = ready. InitModule.js       f__win_msj(__TW_System,'hello anibal');
function f_seguridad__load_dwin_security(){

    $('#a__LoginIniciarSesion').bind('click', function(){    	
    	$('#username').focus(); 
 	});
 	
    $('#btn__LoginCancelarSesion').bind('click', function(){
    	$("fieldset#signin_menu").hide();
    });

    $('#btn__LoginIniciarSesion').click(function(){     	   	
    	f_seguridad__login(false);
    });

}



// Carga de Datos de Usuario Todo JS.
function f_seguridad__login(pReconnect){

	if($('#username').val()==''){f__win_msj(__TW_System,'EMAIL ingresado <strong>NO ES VALIDO</strong>'); return false;}
	if($('#password').val()==''){f__win_msj(__TW_System,'PASSWORD ingresado <strong>NO ES VALIDO</strong>'); return false;}


	var _url = '/security/index/login';
	var _data = { 
		cache: Math.random() * 999999			
		, pUsuario 			: $('#username').val()
		, pClave			: ($('#password').val())
		};
		
	$.post(_url, _data,
		function(_rtnAjax){	
			// Data Json
			if(_rtnAjax.login==false){f__win_msj(__TW_System,'EMAIL O PASSWORD INCORRECTO!.'); return false;}

			__datosUsuario = {
				'id'			: _rtnAjax['rows'][0]['id'],
				//'id_user_level' : '',
				'nombres' 		: _rtnAjax['rows'][0]['cell'][1],
				'apellidos'		: _rtnAjax['rows'][0]['cell'][2],
				'dni'			: _rtnAjax['rows'][0]['cell'][3],
				'correo'		: _rtnAjax['rows'][0]['cell'][4],
				'clave'			: ($('#password').val()),
                'id_rol'        : '',
                'rol_descripcion': '',

			};		
			
			if(__datosUsuario.id != '' || __datosUsuario.id == 'undefined'){ //undefined
				$("fieldset#signin_menu").hide();
				f__open_winLogin('id_login', 'Iniciar Session', 320, 180,true,__datosUsuario);

			}else{
				alert("Error");
			}
			

		}
	);


}//EndFunction






function f__open_winLogin(pcapa, ptitulo, pancho, palto,pmodal,userData){

// 01 Model for Store = webstore html
Ext.define('State', {
    extend: 'Ext.data.Model',
    fields: [
        {type: 'string', name: 'abbr'},
        {type: 'string', name: 'name'},
        {type: 'string', name: 'slogan'}
    ]
});

// 02 StoreThe data for all states
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

// 03 Formulario Login
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
            value: userData.correo,
            readOnly:true
        },
        {
            allowBlank: false,
            fieldLabel: 'Password',
            name: 'pass',
            emptyText: 'password',
            inputType: 'password',
            value : userData.clave,
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
                    //console.log('data value es = ',data[0].data.abbr);
                }
            }
        },
    ],    
    buttons: [
        { text:'Aceptar',
        handler: function() {
            // The getForm() method returns the Ext.form.Basic instance:
            var form = this.up('form').getForm();

            if (form.isValid()) {
                // Submit the Ajax request and handle the response
                form.submit({
                    success: function(form, action) {
                       //Ext.Msg.alert('Success', action.result.message);
                       userData.id_rol = action.result.id_rol;
                       userData.rol_descripcion = action.result.rol_descripcion;

                       f_seguridad__cargar_modulos(userData);

                       // function new Interfaz For application

                           
                    },
                    failure: function(form, action) {                        
                        Ext.Msg.alert('Failed', action.result ? action.result.message : 'No response');
                    }
                });
            }
        }

        },
        { text:'Cancelar',
        handler: function() {           
            Ext.getCmp(pcapa).close();
        }


         }
    ]
});
    var formLogin = new KitchenSink.view.form.LoginForm();

    //-- 02    
	if( $('#'+pcapa).length == 0 ){ // que no exista id				
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
    			items: {xtype:'panel', id:'panel_'+pcapa, items:[formLogin]}
    		});			
    	Ext.getCmp(_ventana.id).show().el.center();
	}

}



// Cargar Modulos 'Sistema Produccion'
function f_seguridad__cargar_modulos(userData){
    //$("body").html("");
    Ext.get('docbody').update('');

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
            items:[
            { xtype: 'button', 
              icon: '/assets/img/system/img/system/png/ico_grabar.png', // xtype = splitbutton
              cls: 'x-btn-text-icon',            
              text: 'Tablas',
              menu: _menu_tablas,
            },        
            { xtype: 'button',
              icon: '/assets/img/system/img/system/png/report.png',         
              text: 'Other',
              menu: _menu_tablas,
            },
            { xtype: 'button', icon: 'preview.png',         
              text: 'New',
              menu: _menu_tablas,
            },
            //{ xtype: 'tbspacer', width: 50 }, // add a 50px space        
        ]
    });
	
    var viewport2 = new Ext.Viewport({
    		layout: 'border',
    		//,renderTo: Ext.getBody()
    		items: [
            {
			  region : 'center',
			  xtype : 'panel',
			  title : 'SISTEMA BANCARIO',
			  html : '',
			  bodyStyle : 'background:#EDF2F8',
              tbar : [toolbar, '->', 'USUARIO: '+userData.nombres,'-','TIPO: '+userData.rol_descripcion],
			  //,bbar			: statusbar
    		}]
    });    
    viewport2.doAutoRender();

    // OBTENER REFERCIA AL COMPONENTE.
    // var p1 = scrollMenu.getComponent('menu-anb-1');	
    // console.log(' menu-anb-1 p1',p1); 
}

