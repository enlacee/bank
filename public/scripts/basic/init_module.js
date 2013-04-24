Ext.Loader.setPath('Ext.ux', '/Extjs/ext-4.2.0/examples/ux');

Ext.require([
    //'Ext.form.*',
    //'Ext.layout.container.Column',
    //'Ext.tab.Panel'
    '*',
    'Ext.ux.DataTip'
]);

Ext.onReady(function(){
	Ext.QuickTips.init();

	// f_seguridad__load_dwin_security();
	f__open_winLogin('id_login', 'Iniciar Session', 300, 200,true);



	
});


	
// var viewport = new Ext.Viewport({
// 			layout		: 'border',
// 			renderTo	: Ext.getBody(),
// 			items       : [
// 									//__pmdl_top
// 									//,__pmdl_left
// 									__pmdl_center
// 									//,__pmdl_right
// 									//,__pmdl_bottom
// 							]
// });
