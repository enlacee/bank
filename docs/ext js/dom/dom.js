

//01

Ext.getBody();

 var el = Ext.get('login');

// 02 animacion
 var opt = {
    duration: 1000,
    easing: 'elasticIn',
    callback: function(){console.log("final animacion");},
    scope: this
};
el.setWidth(700, opt);

// 03 id
console.log("id = ",el.id);

// 04 class
el.addCls('pepelucho');


//03 agregar eventos ANTES = addListener NOW = on

el.on('click', this.onClick, this, {
    single: true,
    delay: 100,
    stopEvent : true,
    forumId: 4
});

// 06 efecto

 el.fadeOut(
{
    opacity: 0.98, //can be any value between 0 and 1 (e.g. .5)
    easing: 'easeOut',
    duration: 500
}
);

// 07 
el.getAttribute('href');

// 08
var ide = el.getById('password',true);
ide.value = "123456789";

//09 captura todo en array las iamgenes de : el 

var img = el.query('img');

// 10 html
el.setHTML('');

// 11 size and style

el.setSize(500);
el.setStyle('border','1px solid red');
