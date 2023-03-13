//lafuncion de validacion

function calificacion()
{
    let calificacion_final, examen_final, parcial_1, parcial_2, parcial_3;
    let promedio_parciales, trabajo_final;

    examen_final = parseFloat (document.formulario4.examen_final.value);
    parcial_1 = parseFloat (document.formulario4.parcial_1.value);
    parcial_2 = parseFloat (document.formulario4.parcial_2.value);
    parcial_3 = parseFloat (document.formulario4.parcial_3.value);
    
    trabajo_final = parseFloat (document.formulario4.trabajo_final.value);
    promedio_parciales=(parcial_1+parcial_2+parcial_3)/3;
    calificacion_final=promedio_parciales*0.55+examen_final*0.3+trabajo_final*0.15;
    document.formulario4.calificacion_final.value = calificacion_final;
    document.formulario4.promedio_parciales.value = promedio_parciales;
}