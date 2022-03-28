function CalculadoraIVA (precioProducto){
    let impuesto = precioProducto*7/100
    console.log(`SUBTOTAL: ${precioProducto}`)
    console.log(`IVA: ${impuesto}`)
    let precioFinal= impuesto + precioProducto;
    console.log(`TOTAL: ${precioFinal.toFixed(2)}`)
};
