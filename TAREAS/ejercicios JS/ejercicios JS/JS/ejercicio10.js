//lafuncion de validacion

function algoritmo()
{
    let antiguedad, salario, utilidades;
    antiguedad = parseFloat (document.formulario10.antiguedad.value);
    salario = parseFloat (document.formulario10.salario.value);
    utilidades=0;
    if(antiguedad<1)
        utilidades=0.05*salario;
    if(antiguedad>=1&&antiguedad<2)
        utilidades=0.07*salario;
    if(antiguedad>=2&&antiguedad<5)
        utilidades=0.1*salario;
    if(antiguedad>=5&&antiguedad<10)
        utilidades=0.15*salario;
    if(antiguedad>=10)
        utilidades=0.2*salario;
    document.formulario10.utilidades.value = utilidades;
    
}