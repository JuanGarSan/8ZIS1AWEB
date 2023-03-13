window.onload = () => {

    const imagenes = [
        "https://images.alphacoders.com/127/1277109.jpg",
        "https://images4.alphacoders.com/801/80134.jpg",
        "https://images8.alphacoders.com/356/356391.jpg",
        "https://images8.alphacoders.com/371/371786.jpg"
    ];

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    const imagenActual = 0;

    const imagenSiguiente = () => {
        if(imagenActual < imagenes.length - 1){
            imagenActual++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };

    const imagenAnterior = () => {
        if(imagenActual > 0){
            imagenActual--;
        }else{
            imagenActual = imagenes.length -1;
        }
        display.src = imagenes[imagenActual];
    }

    const pantallaCompleta = () => {
        display.requestFullscreen;
    }

    const mostrarMensaje = () => {
        mensajes.innerHTML += `${campoMensaje.value}<br/>`;
        campoMensaje.value = "";
       
    };

    const cambiarColor = () => {
        colorValor.click();
    }

    const inicializar = () => {
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensaje").onclick = mostrarMensaje;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        colorValor.onchange = () => {
            mensajes.style.color = colorValor.value;
        };

        display.src = imagenes[0];
    };

    inicializar();



}