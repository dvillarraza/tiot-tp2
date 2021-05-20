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
    })

    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    })

})  

//Cuando se agrega una elemento a una lista vacia, 
//se comprueba que el elemnto exista despues que se agrega
//se comprueba que el elemento de la lista sea igual al que se agrgega
describe("cuando se agrega un elemento a una lista vacia" , function() {
    var lista = new Lista();

    lista.add("clave","valor");

    it("hay un elemento", function() { 
        assert.equal(lista.count(),1);
    })

    it("se puede recuperar el valor a partir de la clave", function() { 
        assert.equal(lista.find("clave"),"valor");
    })

})  

// Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente.
describe("cuando se agrega una clave a una lista" , function() {
    var lista = new Lista();

    lista.add("clave","valor");

    lista.add("clave","actualizado");

    it("ya esta en la lista", function() { 
        assert.equal(lista.find("clave"),"actualizado");
    })

})  

//En una lista con un elemento, se borrar un elemento de la lista y
//se comprueba que no exista 
describe("cuando se borra una elemento de la lista" , function() {
    var lista = new Lista();

    lista.add("clave","valor");

    lista.delete("clave");

    it("no esta en la lista", function() {
        assert.isNaN(lista.find("clave"));
    })

})  

//En una lista con elementos se debe poder recuperar la cantidad de elementos almacenados en la lista.
describe("cuando se recuperar los elementos de la lista" , function() {
    var lista = new Lista();

    lista.add("clave","valor");
    lista.add("clave4","valor4");
    lista.add("clave3","valor3");
    lista.add("clave2","valor2");

    //Controla que la cantidad de elementos de la lista sean 4
    it("la cantidad de elementos de la lista es 4", function() {
        assert.equal(lista.count(),4);
    })

    //controla que devuelva los elementos de la lista tal como se agregaron
    it("la cantidad de elementos de la lista", function() {
        assert.deepEqual(lista.elementos(),[{ clave: 'clave', valor: 'valor' },
                                        { clave: 'clave4', valor: 'valor4' },
                                        { clave: 'clave3', valor: 'valor3' },
                                        { clave: 'clave2', valor: 'valor2' }]); 
    })

    //controla que devuelva los elementos de la lista ordenados por clave
    it("la cantidad de elementos de la lista ordenados por clave", function() {
        assert.deepEqual(lista.elementosOrdenados(),[{ clave: 'clave4', valor: 'valor4' },
                                        { clave: 'clave3', valor: 'valor3' },
                                        { clave: 'clave2', valor: 'valor2' },
                                        { clave: 'clave', valor: 'valor' }]); 
    })

})  

