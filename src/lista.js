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

    //Agrega un elemento en la lista,
    //verifica que la clave sea del tipo string 
    //en caso de que la clave ya exista actualiza el valor 
    //dado que no puede haber dos claves repetidas
    add(clave, valor){

        if(typeof clave == 'string'){        
            var indice = this.#existe(clave);
            if (indice >= 0){
                this.#elmentos[indice].valor = valor;
            }
            else{
                this.#elmentos.push({clave,valor});
            }
            return true;
        }
        return false;
    }

    //Elimina un elemento con la clave pasada como parametro
    //si la clave no existe devuelve false
    delete(clave){ 
        var indice = this.#existe(clave);
        if (indice >= 0){
            this.#elmentos.splice(indice,1);
            return true;
        }
        return false;
    }

    //Devuelve las claves de la lista ordenados, alfabeticamente de manera ascendete de la A a la Z
    clavesOrdenadas(){
        var claves = [];
        //En el metodo sort() se pasa como parametro una funcion de comparacion para ordenar or clave
        var listaordenada = this.#elmentos.sort(function(a, b){ 
            if (a.clave < b.clave) {
                return -1; //Se ordena alfabeticamente de manera ascendete de la A a la Z
            }
        });

        for(var i=0; i < listaordenada.length; i++) {
            claves[i] = listaordenada[i].clave;
        }

        return claves;
    }

};