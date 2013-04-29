Ext.Loader.setPath('Ext.ux', '/Extjs/ext-4.2.0/extra/ux'); //Extjs\ext-4.2.0\example\ux

Ext.require([
    //'Ext.form.*',
    //'Ext.layout.container.Column',
    //'Ext.tab.Panel'
    '*',
    'Ext.ux.DataTip'
]);

 
Ext.onReady(function(){
	Ext.QuickTips.init();


    //Ext.get('docbody').update('');
    f_seguridad__load_dwin_security();

    var name = Ext.get('login');
    var opt = {
        duration: 1000,
        easing: 'elasticIn',
        callback: function(){console.log("final animacion");},
        scope: this
    };
    name.frame("", 3, { duration: 1500 });

  


  	
});




















//-------------------------------------------
    // var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

    // var simple = Ext.widget({
    //     xtype: 'form',
    //     layout: 'form',
    //     collapsible: true,
    //     id: 'simpleForm',
    //     url: 'save-form.php',
    //     frame: true,
    //     title: 'Simple Form',
    //     bodyPadding: '5 5 0',
    //     width: 350,
    //     fieldDefaults: {
    //         msgTarget: 'side',
    //         labelWidth: 75
    //     },
    //     plugins: {
    //         ptype: 'datatip'
    //     },
    //     defaultType: 'textfield',
    //     items: [{
    //         fieldLabel: 'First Name',
    //         afterLabelTextTpl: required,
    //         name: 'first',
    //         allowBlank: false,
    //         tooltip: 'Enter your first name'
    //     },{
    //         fieldLabel: 'Last Name',
    //         afterLabelTextTpl: required,
    //         name: 'last',
    //         allowBlank: false,
    //         tooltip: 'Enter your last name'
    //     },{
    //         fieldLabel: 'Company',
    //         name: 'company',
    //         tooltip: "Enter your employer's name"
    //     }, {
    //         fieldLabel: 'Email',
    //         afterLabelTextTpl: required,
    //         name: 'email',
    //         allowBlank: false,
    //         vtype:'email',
    //         tooltip: 'Enter your email address'
    //     }, {
    //         fieldLabel: 'DOB',
    //         name: 'dob',
    //         xtype: 'datefield',
    //         tooltip: 'Enter your date of birth'
    //     }, {
    //         fieldLabel: 'Age',
    //         name: 'age',
    //         xtype: 'numberfield',
    //         minValue: 0,
    //         maxValue: 100,
    //         tooltip: 'Enter your age'
    //     }, {
    //         xtype: 'timefield',
    //         fieldLabel: 'Time',
    //         name: 'time',
    //         minValue: '8:00am',
    //         maxValue: '6:00pm',
    //         tooltip: 'Enter a time',
    //         plugins: {
    //             ptype: 'datatip',
    //             tpl: 'Select time {date:date("G:i")}'
    //         }
    //     }],

    //     buttons: [{
    //         text: 'Save',
    //         handler: function() {
    //             this.up('form').getForm().isValid();
    //         }
    //     },{
    //         text: 'Cancel',
    //         handler: function() {
    //             this.up('form').getForm().reset();
    //         }
    //     }]
    // });

    // simple.render(document.body);