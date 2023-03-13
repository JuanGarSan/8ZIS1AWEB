//lafuncion de validacion

function calcular_()
{
    let anno_actual, anno_de_nacimiento, dia_actual, dia_de_nacimiento, edad;
    let mes_actual, mes_de_nacimiento;
    anno_actual = parseInt (document.formulario6.anno_actual.value);
    anno_de_nacimiento = parseInt (document.formulario6.anno_de_nacimiento.value);
    dia_actual = parseInt (document.formulario6.dia_actual.value);
    dia_de_nacimiento = parseInt (document.formulario6.dia_de_nacimiento.value);
    mes_actual = parseInt (document.formulario6.mes_actual.value);
    mes_de_nacimiento = parseInt (document.formulario6.mes_de_nacimiento.value);
    edad=anno_actual-anno_de_nacimiento;
    if(mes_de_nacimiento>mes_actual||(mes_de_nacimiento==mes_actual&&dia_de_nacimiento>dia_actual))
        edad=edad-1;
    document.formulario6.edad.value = edad;
}