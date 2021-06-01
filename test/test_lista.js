/* Requermientos 
A. La lista debe almacenar pares clave:valor.
B. Las claves almacenadas en la lista deben ser únicas.
C. Las claves son cadenas de texto.
D. Se debe poder recuperar un valor a partir de una clave.
E. Se debe poder actualizar el valor asociado a una clave.
F. Se debe poder borrar una pareja a partir de la clave.
G. Se debe poder recuperar la cantidad de elementos almacenados en la lista.
H. Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.
*/

const assert = require("chai").assert;
const Lista = require("../src/lista.js");

//Si la lista esta vacia,
//se comprueba que la cantidad de elementos sea 0
//se comprueba que no exsite ningun elemento
describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() { 
        assert.equal(lista.count(),0);
    });

    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    });

});

//Cuando se agrega una elemento a una lista vacia, 
//se comprueba que el elemnto exista despues que se agrega
//se comprueba que el elemento de la lista sea igual al que se agrgega
describe("cuando se agrega un elemento a una lista vacia" , function() {
    var lista = new Lista();

    it("la clave agregada es del tipo string", function() { 
        assert.equal(lista.add("clave","valor"),true);
    });   
    
    it("hay un elemento", function() { 
        assert.equal(lista.count(),1);
    });

    it("se puede recuperar el valor a partir de la clave", function() { 
        assert.equal(lista.find("clave"),"valor");
    });

});  

// Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
describe("cuando se agrega una clave a una lista" , function() {
    var lista = new Lista();
    
    it("la claves agregadas son del tipo string", function() { 
        assert.equal(lista.add("clave","valor"),true);
        assert.equal(lista.add("clave","actualizado"),true);
    });    

    it("ya esta en la lista", function() { 
        assert.equal(lista.find("clave"),"actualizado");
    });

});

//En una lista con un elemento, se borrar un elemento de la lista y
//se comprueba que no exista 
describe("cuando se borra una elemento de la lista" , function() {
    var lista = new Lista();

    it("la clave agregada es del tipo string", function() { 
        assert.equal(lista.add("clave","valor"),true);
    });    

    it("la clave a borrar existe", function() { 
        assert.equal(lista.delete("clave"),true);
    });    

    it("no esta en la lista", function() {
        assert.isNaN(lista.find("clave"));
    });

});

//En una lista con elementos se debe poder recuperar la cantidad de elementos almacenados en la lista.
describe("cuando se recuperan los elementos de la lista" , function() {
    var lista = new Lista();

    it("la claves agregadas son del tipo string", function() { 
        assert.equal(lista.add("clave","valor"),true);
        assert.equal(lista.add("clave4","valor4"),true);
        assert.equal(lista.add("clave3","valor3"),true);
        assert.equal(lista.add("clave2","valor2"),true);
    });

    //Controla que la cantidad de elementos de la lista sean 4
    it("la cantidad de elementos de la lista es 4", function() {
        assert.equal(lista.count(),4);
    });
}); 

//Se debe poder recuperar una lista ordenada de las claves almacenadas en la lista.
describe("cuando se recuperan las claves de la lista" , function() {
    var lista = new Lista();

    it("la claves agregadas son del tipo string", function() { 
        assert.equal(lista.add("claveT","valor"),true);
        assert.equal(lista.add("claveZ","valor4"),true);
        assert.equal(lista.add("claveX","valor3"),true);
        assert.equal(lista.add("claveB","valor2"),true);
    });
 
    //controla que devuelva las claves de la lista ordenadas alfabeticamente de manera ascendete de la A a la Z
    it("las claves estan ordenadas alfabeticamente de manera ascendete de la A a la Z", function() {
        assert.deepEqual(lista.clavesOrdenadas(),['claveB', 'claveT', 'claveX', 'claveZ']); 
    });

});
