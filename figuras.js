//Código del Cuadrado
const perimetroCuadrado = (lado) => (lado * 4);
const areaCuadrado = (lado) => lado * lado;


//Código del Triangulo
const perimetroTriangulo = (lado1, lado2, base) => (lado1 + lado2 + base);

const areaTriangulo = (base, altura) => (base * altura) / 2;


//Código del Circulos
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * (radio**2);

// Interacción con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area)
}