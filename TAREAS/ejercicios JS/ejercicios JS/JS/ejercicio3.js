//lafuncion de validacion

function descuentos()
{
    let costo_del_articulo_1, costo_del_articulo_2, costo_del_articulo_3, descuento, pago_final;
    let total_de_la_compra;
    costo_del_articulo_1 = parseFloat (document.formulario3.costo_del_articulo_1.value);
    costo_del_articulo_2 = parseFloat (document.formulario3.costo_del_articulo_2.value);
    costo_del_articulo_3 = parseFloat (document.formulario3.costo_del_articulo_3.value);
    total_de_la_compra=costo_del_articulo_1+costo_del_articulo_2+costo_del_articulo_3;
    
    if(total_de_la_compra>10)
        descuento=total_de_la_compra*0.15;
    else
        descuento=0;
    pago_final=total_de_la_compra-descuento;
    document.formulario3.descuento.value = descuento;
    document.formulario3.pago_final.value = pago_final;
    document.formulario3.total_de_la_compra.value = total_de_la_compra;
}