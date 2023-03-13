//lafuncion de validacion

function algoritmo()
{
    let horas_trabajadas, pago_horas_extra, salario, total_del_salario;
    horas_trabajadas = parseInt (document.formulario9.horas_trabajadas.value);
    if(horas_trabajadas>40)
    {
        salario=40*20;
        pago_horas_extra=(horas_trabajadas-40)*20*2;
    }
    else
    {
        salario=horas_trabajadas*20;
        pago_horas_extra=0;
    }

    if(horas_trabajadas<48)
    {
        salario=40*20 ;
        pago_horas_extra=(horas_trabajadas-40)*20*3;
    }
    else
    total_del_salario=salario+pago_horas_extra;
    document.formulario9.pago_horas_extra.value = pago_horas_extra;
    document.formulario9.salario.value = salario;
    document.formulario9.total_del_salario.value = total_del_salario;
    
    
}