module.exports = class Lista {
    #elmentos;    //elementos de la lista

    //Metodo privado para saber si existe una clave en una lista y si existe retorna el indice de la lista
    //si la clave no existe en la lista devuelve -1
    #existe = (clave) => {
        if(this.#elmentos.length > 0){
            for(var i=0; i < this.#elmentos.length; i++) {
                if(this.#elmentos[i].clave == clave){
                    return i;
                 }
            }
        }
        return -1;
    }
    
    //Constructo de la clase
    constructor(){
        this.#elmentos = [];

    }

    //Retorna la cantidad de elementos de la lista
    count() {
        return this.#elmentos.length;
    }

    //Devuelve el valor de la clave pasada como parametro
    find(clave){
        var indice = this.#existe(clave);
        if (indice >= 0){
            return this.#elmentos[indice].valor;
        }
        return NaN;
    }

    //Agrega un elemento en la lista, en caso de que la clave ya exista actualiza el valor 
    //dado que no puede haber dos claves repetidas
    add(clave, valor){

        var indice = this.#existe(clave);
        if (indice >= 0){
            this.#elmentos[indice].valor = valor;
        }
        else{
            this.#elmentos.push({clave,valor});
        }
    }

    //Elimina un elemento con la clave pasada como parametro
    delete(clave){ 
        var indice = this.#existe(clave);
        if (indice >= 0){
            this.#elmentos.splice(indice,1);
        }
    }

    //Devuelve los elemetnos de la lista tal como se ingresaron
    elementos(){

        return this.#elmentos;
    }

    //Devuelve los elemetnos de la lista ordenados por clave, la mayor clave primero
    elementosOrdenados(){
        //En el metodo sort() se pasa como parametro una funcion de comparacion para ordenar or clave
        var listaordenada = this.#elmentos.sort(function(a, b){ 
            if (a.clave > b.clave) {
                return -1; //Se ordena de mayor a menor
            }
        });

        return listaordenada;
    }

};