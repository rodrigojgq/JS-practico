const precioOriginal = 100;
const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = precio * porcentajeConDescuento / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const inputDiscount = document.getElementById("InputDiscount");
  
  const price = inputPrice.value;
  const discount = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(price, discount);

  const resultP = document.getElementById("ResultPrice");
  resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}