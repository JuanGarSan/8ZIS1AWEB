var instrucciones = ["Utilizar las flehcas para mover las piezas", "Ordenar las pierzas hasta alcanzar la imagen objetivo"];
var movimientos = [];
var rompe = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var rompeCorrecto = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var filaVacia = 2;
var columnaVacia = 2;

function mostrarInstrucciones(instrucciones){
    for(var i = 0; i < instrucciones.length; i++){
        mostrarInstruccionesEnlista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionesEnlista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

function agregarUltimoMovimiento(direccion){
    movimientos.push(direccion);
}

function checarSiGano(){
    for(var i = 0; i < rompe.length; i++){
        for(var j = 0; j < rompe[i].length; j++){
            //que i = ij
            var rompeActual = rompe[i][j];
            if(rompeActual != rompeCorrecto[i][j]){
                return false;
            }
        }
    }
    return true;
}

function mostrarCartelGanador(){
    if(checarSiGano()){
        alert("Wiiiii a mimir");
    }
    return false;
}

arreglo[1][2] = arreglo[0][0];
arreglo[0][0] = arreglo[1][2];

function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columaPos2){
    var pos1 = rompe[filaPos1][columnaPos1];
    var pos2 = rompe[filaPos2][columaPos2];

    rompe[filaPos1][columnaPos1] = pos2;
    rompe[filaPos2][columaPos2] = pos1;
}

function actualizarPosicionVacia(nuevaFila, nuevaColumna){
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

function posicionValida(fila, columna){
    return(fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2);
}

function moverEnDireccion(direccion){
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    if(direccion === codigosDireccion.ABAJO){
        nuevaFilaPiezaVacia = filaVacia + 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    else if(direccion === codigosDireccion.ARRIBA){
        nuevaFilaPiezaVacia = filaVacia - 1;
        nuevaColumnaPiezaVacia = columnaVacia;
    }

    else if(direccion === codigosDireccion.DERECHA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia + 1;
    }

    else if(direccion === codigosDireccion.IZQUIERDA){
        nuevaFilaPiezaVacia = filaVacia;
        nuevaColumnaPiezaVacia = columnaVacia - 1;
    }

    if(posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)){
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);

        agregarUltimoMovimiento(direccion);
    }


}

var codigosDireccion= {
    IZQUIERDA : 37,
    ARRIBA : 38,
    DERECHA : 39,
    ABAJO: 40
};

function intercambiarPosiciones(fila1, columna1, fila2, columna2){
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila1][columna2];

    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2);
    intercambiarPosiciones('pieza ' + pieza1, 'pieza' + pieza2);

}

function intercambiarPosicionesDOM(idpieza1, idpieza2){
    var elementoPieza1 = document.getElementById(idpieza1);
    var elementoPieza2 = document.getElementById(idpieza2);

    var padre = elementoPieza1.parentNode;

    var clonElemeento1 = elementoPieza1.cloneNode(true);
    var clonElemeento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(clonElemeento1, elementoPieza1);
    padre.replaceChild(clonElemeento2, elementoPieza2);   
}

function actualizarUltimoMovimiento(direccion){
    ultimoMov = document.getElementById('flecha');
    switch(direccion){
        case codigosDireccion.ARRIBA:
            ultimoMov.textContent = '↑';
            break;
        case codigosDireccion.ABAJO:
            ultimoMov.textContent = '↓';
            break;
        case codigosDireccion.DERECHA:
            ultimoMov.textContent = ' →';
            break;
        case codigosDireccion.IZQUIERDA:
            ultimoMov.textContent = '←';
            break;
    }
}

function mostrarInstruccionesEnlista(instruccion, idLista){
    var ul = document.getElementById(idLista);
    var li = document.createElement("li");
    li.textContent = instruccion;
    ul.appendChild(li);
}

function mezclarPiezas(veces){
    if(veces <= 0){
        return;
    }
    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA,
    codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
    moverEnDireccion(direccion);
    setTimeout(function(){
        mezclarPiezas(veces - 1);
    }, 100);
}
function capturarTeclas(){
    document.body.onkeydown = (function(evento){
        if(evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.ARRIBA || 
            evento.which === codigosDireccion.DERECHA || evento.which === codigosDireccion.IZQUIERDA){
                moverEnDireccion(evento.which);
                actualizarUltimoMovimiento(evento.which);

                var gano = checarSiGano();
                if(gano){
                    setTimeout(function(){
                        mostrarCartelGanador();
                    }, 500);
                }
                evento.preventDefault;
            }
    }); 
}


function iniciar(){
    mezclarPiezas(30);
    capturarTeclas();
}

iniciar();

mostrarInstrucciones