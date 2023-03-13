class FiguraGeometrica{
    constructor(){

    }
    area(){

    }
    perimetro(){
        console.log("este metodo calula el perimetro");

    }
}

class Rectancgulo extends
FiguraGeometrica{
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._ActualizarArea = false;
        this._ActualizarPerimetre = false;
    }

    calcularArea(){
        return this._base * this._perimetro;
    }

    calcularPerimetro(){
        return this._base + this._perimetro;
    }

    set altura(altura){
        this._altura = altura;
        this._ActualizarArea = true;
        this._ActualizarPerimetre = true;
    }

    set base(base){
        this._base= base;
        this._ActualizarArea = true;
        this._ActualizarPerimetre = true;
    }

    get area(){
        if(this._ActualizarArea || this._area){
            this._area =this.calcularArea();
        }
        return this._area
    }

    get perimetro(){
        if(this._ActualizarPerimetre || this._perimetro){
            this._perimetro =this.calcularPerimetro();
        }
        return this._perimetro
    }
}
const objetoRectangulo = new Rectancgulo(2, 5);
console.log (objetoRectangulo.area);


const arregloOrdenadoMayorMenor =[10, 9, 8, 7, 6, 5, ,4, 3, 2, 1, 0];

console.log(`arregloOrdenadoMayorMenor: ${arregloOrdenadoMayorMenor}`); 

const[valorMasGrande] = arregloOrdenadoMayorMenor;
console.log(`valorMasGrande: ${valorMasGrande}`);

const[valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;

console.log(`valorMasGrande1, valorMasGrande2, valorMasGrande3, ... restoVlores: ${valorMasGrande1}, ${valorMasGrande2}, 
${valorMasGrande3}, ${restoValores}`);


const resultadoDBusqueda = {
    resultados:[
        "resultado 1",
        "resultado 2",
        "resultado 3",
        "resultado 4",
        "resultado 5",
        "resultado 6",
        "resultado 7",
    ],
    total : 7,
    mejorCoincidencia : "resultado 3"

};

