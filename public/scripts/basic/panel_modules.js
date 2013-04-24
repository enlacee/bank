var __pmdl_top={
        region          : 'north',
        xtype           : 'panel',
        id		: "div_panel_mdl_top",
        html            : '',
        height          : 55,
        split           : true,
        //collapsible: true,
        collapseMode    : 'mini'

};
var __pmdl_left={
        region			: 'west',
        id			: "div_panel_mdl_left",
        xtype			: 'panel',
        split			: true,
        collapsible             : true,
        collapseMode            : 'mini',
        title			: '',
        bodyStyle               : 'padding:5px;',
        width			: 220,
        minSize                 : 220,
        html			: ''
};

var __pmdl_center={
        region 		: 'center',
        id		: "div_panel_mdl_center",
        xtype 		: 'panel',			
        html 		: ''
};

var __pmdl_right={
        region 		: 'east',
        id		: "div_panel_mdl_rigth",
        split		: true,
        collapsible	: true,
        collapseMode    : 'mini',
        title		: '',
        bodyStyle	: 'padding:5px;',
        width		: 200,
        minSize		: 200,
        html 		: ''
}

var __pmdl_bottom={
        region 		: 'south',
        id		: "div_panel_mdl_bottom",
        xtype 		: 'panel',
        html 		: ''
};


{}[]

		
var __FlagConsulta = false;
var __panelPrincipal = '';
var __CodUsuario = '';

	
/**********************************************************************************************/


var _menu_tablas = [
	{text:'Talla',id:'idmn_tbl_talla' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Color',id:'idmn_tbl_color' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Zona',id:'idmn_tbl_zona' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Linea',id:'idmn_tbl_linea' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Cargo',id:'idmn_tbl_cargo' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Cliente',id:'idmn_tbl_cliente' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Bloque',id:'idmn_tbl_bloque' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Operacion',id:'idmn_tbl_operacion' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tipo Pago',id:'idmn_tbl_tipopago' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tipo Producto',id:'idmn_tbl_tipoproducto' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Unidad Medida',id:'idmn_tbl_unidadmedida' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Banco',id:'idmn_tbl_banco' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tipo Documento',id:'idmn_tbl_tipodocumento' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Partida',id:'idmn_tbl_partida' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tipo Prenda',id:'idmn_tbl_tipoprenda' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tipo Personal',id:'idmn_tbl_tipopersonal' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Orden Produccion',id:'idmn_tbl_ordenproduccion' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Persona',id:'idmn_tbl_persona' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Producto',id:'idmn_tbl_producto' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Semana',id:'idmn_tbl_semana' ,handler: function(){  f__optionmenu(this.id);}}
];

var _menu_procesos = [
	{text:'Generar Pedidos',id:'idmn_pro_gnrpedido' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Liquidar Pedidos',id:'idmn_pro_liquidarpedido' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Orden de Fabricacion ',id:'idmn_pro_ordenfabricacion' ,handler: function(){  f__optionmenu(this.id);}},
	  //menu:[
		//{text:'Generar ticket',id:'idsmn_pro_gnrticket' ,handler: function(){  f__optionmenu(this.id);}},
		//{text:'Generar Planilla de Paquetes',id:'idsmn_pro_gnrplantillapa' ,handler: function(){  f__optionmenu(this.id);}},								
	  //]},
	{text:'Registrar Calificacion de pymes',id:'idmn_pro_regcalipymes' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Captura de Tickets Manual',id:'idmn_pro_capticketmanual' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Captura de Tickets Masivo',id:'idmn_pro_capticketmasivo' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Tiempo Estandar',id:'idmn_pro_tiempoestandar' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Modifica Movimiento (Ticket)',id:'idmn_pro_modmovticket' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Registrar Entregas Parciales Pedido',id:'idmn_pro_regentregasparciales' ,handler: function(){  f__optionmenu(this.id);}}
];							


var _menu_reportes= [
	{text:'Bihorario',id:'idmn_rpt_bihorario' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Balance de Linea',id:'idmn_rpt_balancelinea' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Eficiencia',id:'idmn_rpt_eficiencia' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Pagos',id:'idmn_rpt_pagos' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Hoja de Ingenieria',id:'idmn_rpt_hojaingenieria' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Seguimiento Personal',id:'idmn_rpt_seguimientopersonal' ,handler: function(){  f__optionmenu(this.id);}}
];			



var _menu_indicadores= [
	{text:'Ranking Empresarial',id:'idmn_ind_rankingempresarial' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Produccion Semanal',id:'idmn_ind_produccionsemanal' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Avances de Produccion',id:'idmn_ind_avancesproduccion' ,handler: function(){  f__optionmenu(this.id);}},
	{text:'Pedidos Consolidado',id:'idmn_ind_pedidosconsolidado' ,handler: function(){  f__optionmenu(this.id);}}
];			



var _menu_seguridad= [
        {text:'Usuario',id:'idmn_seg_usuario' ,handler: function(){  f__optionmenu(this.id);}},
        {text:'Compa\u00f1ia',id:'idmn_tbl_compania' ,handler: function(){  f__optionmenu(this.id);}},
];			



	
	
function f__optionmenu(idmenu){

    switch(idmenu){
            case 'idmn_tbl_talla' : f_talla__index(0); break;
            case 'idmn_tbl_color' : f_color__index(0); break;
            case 'idmn_tbl_zona' : f_zona__index(0); break;
            case 'idmn_tbl_linea' : f_linea__index(0); break;
            case 'idmn_tbl_cargo' : f_cargo__index(0); break;
            case 'idmn_tbl_compania' : f_compania__index(0); break;
            case 'idmn_tbl_cliente' : f_cliente__index(0); break;
            case 'idmn_tbl_bloque' : f_bloque__index(0); break;
            case 'idmn_tbl_operacion' : f_operacion__index(0); break;
            case 'idmn_tbl_tipopago' : f_tipopago__index(0); break;
            case 'idmn_tbl_tipoproducto' : f_tipoproducto__index(0); break;
            case 'idmn_tbl_unidadmedida' : f_unidadmedida__index(0); break;
            case 'idmn_tbl_banco' : f_banco__index(0); break;
            case 'idmn_tbl_tipodocumento' : f_tipodocumento__index(0); break;
            case 'idmn_tbl_partida' : f_partida__index(0); break;
            case 'idmn_tbl_tipoprenda' : f_prendatipo__index(0); break;
            case 'idmn_tbl_tipopersonal' : f_tipopersonal__index(0); break;
            case 'idmn_tbl_ordenproduccion' : f_ordenproduccion__index(0); break;
            case 'idmn_tbl_persona' : f_persona__index(0); break;
            case 'idmn_tbl_producto' : f_producto__index(0); break;
            case 'idmn_tbl_semana' : f_semana__index(0); break;

            case 'idmn_pro_tiempoestandar' : f_tiempostandar__index(0); break;
            case 'idmn_pro_ordenfabricacion' : f_ordenfabrica__index(0); break;

            case 'idmn_rpt_hojaingenieria' : f_tiempostandar__hoja_ingenieria(0); break;
            case 'idmn_pro_capticketmanual' : f_controltickets__index(0); break;
            case 'idmn_pro_capticketmasivo' : f_controlticketsmasivo__index(0); break;
            case 'idmn_pro_modmovticket' : f_controltl__index(0); break;
            case 'idmn_rpt_bihorario' : f_bihorario__index(0); break;
            case 'idmn_pro_gnrpedido' : f_pedido__index(0,1); break;
            case 'idmn_pro_liquidarpedido' : f_pedido__index(0,2); break;
            case 'idmn_pro_regentregasparciales' : f_pedido__index(0,3); break;
            case 'idmn_rpt_seguimientopersonal' : f_controltl__formseguimiento(0); break;
            case 'idmn_rpt_pagos' : f_controltl__formpagos(0); break;
            case 'idmn_rpt_eficiencia' : f_controltl__formeficiencia(0); break;
            case 'idmn_ind_avancesproduccion' : f_produccion__index(0); break;
            case 'idmn_ind_produccionsemanal' : f_produccionsemanal__index(0); break;
            case 'idmn_ind_pedidosconsolidado' : f_pedido__form_consolidados(0); break;
            case 'idmn_ind_rankingempresarial' : f_pedido__form_rankingempresarial(0); break;
            case 'idmn_rpt_balancelinea' : f_balance__index(0); break;    
                

            

            case 'idmn_seg_usuario' : f_user__index(0); break;


    }
	
} 








var __menuprincipal = 	[ 
		{text:'Tablas'  ,icon        : '/resources/assets/img/system/png/mant.png', menu: [_menu_tablas ]},
		{text:'Procesos',icon        : '/resources/assets/img/system/png/process.png',menu:[_menu_procesos]},  
		{text:'Reportes',icon        : '/resources/assets/img/system/png/report.png',menu:[_menu_reportes]},  
		{text:'Indicadores',icon        : '/resources/assets/img/system/png/indicator.png',menu:[_menu_indicadores]},  
		{text:'Seguridad',icon        : '/resources/assets/img/system/png/security.png',menu:[_menu_seguridad]}  
	]


			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			