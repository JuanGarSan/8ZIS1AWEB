//lafuncion de validacion

function leer_2num()
{
    let a, b, suma;

    a = parseFloat (document.formulario7.a.value);
    b = parseFloat (document.formulario7.b.value);
    
    

    if(a == b)
    
    document.formulario7.suma.value = a*b;
    else
    
    if(a > b)
    
    document.formulario7.suma.value = a-b;
    else
    document.formulario7.suma.value = a+b;
    
}