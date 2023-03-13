//lafuncion de validacion

function porcentaje_MH()
{
    let estudiantes, genero, hombres, mujeres;
    let porcentaje_hombres, porcentaje_mujeres;

    
    mujeres= parseFloat (document.formulario5.mujeres.value);
    hombres= parseFloat (document.formulario5.hombres.value);

    estudiantes= mujeres+hombres

    

    porcentaje_mujeres=100.0*mujeres/estudiantes;
    
    porcentaje_hombres=100.0*hombres/estudiantes;

    document.formulario5.porcentaje_hombres.value = porcentaje_hombres;
    document.formulario5.porcentaje_mujeres.value = porcentaje_mujeres;
}