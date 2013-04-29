//addBehaviors

// FUNCION PARA AGREGAR EVNTOS A BODY U OTHER      
// puedes agregar este archivo en una pagina NORAML 
// no es necesario en READY


 Ext.addBehaviors({
    // add a listener for click on all anchors in element with id foo
    '#login a@click' : function(e, t){
        // do something
        alert("hellO CLIK");
    },

    // add the same listener to multiple selectors (separated by comma BEFORE the @)
    '#foo a, #bar span.some-class@mouseover' : function(){
        // do something
    }
});