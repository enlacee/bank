Ext.application({
	name: 'S',
	appFolder:'scripts/security',
	controllers: ['Usuario'],
	launch : function(){
		console.log("INICIO APP DENTRO -----------");
		Ext.create('Ext.container.Viewport',{
			layout: 'fit',
			items:[
				{
					xtype: 'panel',
					title: 'Panel Security',
					html:  'lista de usuarios'
				}
			],
			controller: ['Usuario']
		})//EndCreate
		console.log("END APP DENTRO-------------");
	}//EndLaunch
});
