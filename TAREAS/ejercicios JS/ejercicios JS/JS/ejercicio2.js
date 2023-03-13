//lafuncion de validacion

function algoritmo()
{
    let n;
    let comisiones, pago, sueldo_base, venta_1, venta_2;
    let venta_3;

    sueldo_base = parseFloat (document.formulario2.sueldo_base.value);
    venta_1 = parseFloat (document.formulario2.venta_1.value);
    venta_2 = parseFloat (document.formulario2.venta_2.value);
    venta_3 = parseFloat (document.formulario2.venta_3.value);
   
    comisiones=(venta_1+venta_2+venta_3)*0.1;
    pago=sueldo_base+comisiones;
    document.formulario2.comisiones.value = comisiones;
    document.formulario2.pago.value = pago;
}