//lafuncion de validacion

function algoritmo()
{
    let a, b, c, mayor, menor;
    a = parseFloat (document.formulario8.a.value);
    b = parseFloat (document.formulario8.b.value);
    c = parseFloat (document.formulario8.c.value);
    if(a>b)
    {
        mayor=a;
        menor=b;
    }
    else
    {
        mayor=b;
        menor=a;
    }
    if(mayor<c)
        mayor=c;
    if(menor>c)
        menor=c;
    document.formulario8.mayor.value = mayor;
    document.formulario8.menor.value = menor;
    
    
}