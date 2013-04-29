	
/**********************************************************************************************/

var _menu_tablas = [
	{text:'Tabla 01',itemId:'idmn_tbl_01',handler: f__optionmenu},
	{text:'Tabla 02',itemId:'idmn_tbl_02',handler: f__optionmenu},

];


var _menu_reportes= [
	{text:'Bihorario',id:'idmn_rpt_bihorario' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Balance de Linea',id:'idmn_rpt_balancelinea' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Eficiencia',id:'idmn_rpt_eficiencia' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Pagos',id:'idmn_rpt_pagos' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Hoja de Ingenieria',id:'idmn_rpt_hojaingenieria' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Seguimiento Personal',id:'idmn_rpt_seguimientopersonal' ,handler: function(){  f__optionmenu(this.id);}}
];			



var _menu_seguridad= [
        {text:'Usuario',id:'idmn_seg_usuario' ,handler: function(){  f__optionmenu(this.id);}},
        {text:'Compa\u00f1ia',id:'idmn_tbl_compania' ,handler: function(){  f__optionmenu(this.id);}},
];			



// listener of Menu
function f__optionmenu(item){
    //Ext.example.msg('Menu Click', 'You clicked the "{0}" menu item.', item.text);
    console.log(item.itemId+' Menu Click', 'You clicked the "{0}" menu item.', item.text);
    //f__win_msj(__TW_System,'Menu Click', 'You clicked the "{0}" menu item.', item.text)

    switch(item.itemId){
            case 'idmn_tbl_01' : funcion_menu(); break;

            case 'idmn_tbl_color' : f_color__index(0); break;
            case 'idmn_tbl_zona' : f_zona__index(0); break;
    }


}

//funcion en cada modulo.js
function funcion_menu(){
    alert("hello mundo  menu CLICK");

}
	
	









var __menuprincipal = 	[ 
		{text:'Tablas'  ,icon        : '/assets/img/system/img/system/png/mant.png', menu: _menu_tablas },		
		{text:'Reportes',icon        : '/assets/img/system/img/system/png/report.png',menu:_menu_reportes},		 
		{text:'Seguridad',icon       : '/assets/img/system/img/system/png/security.png',menu:_menu_seguridad}  
	]


			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			