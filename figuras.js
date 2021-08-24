//Código del Cuadrado
const perimetroCuadrado = (lado) => (lado * 4);
const areaCuadrado = (lado) => lado * lado;


//Código del Triangulo
const perimetroTriangulo = (lado1, lado2, base) => (lado1 + lado2 + base);

const alturaTriangulo = (lado1, lado2, base) => {
  const cosA = (lado1 ** 2 + base ** 2 - lado2 ** 2) / (2 * lado1 * base);
  const alpha = Math.acos(cosA);
  const altura = lado1 * Math.sin(alpha);
  return altura;
}

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
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloL1");
  const inputLado2 = document.getElementById("InputTrianguloL2");
  const inputBase = document.getElementById("InputTrianguloBase");
  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const base = Number(inputBase.value);
  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro)
}

function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloL1");
  const inputLado2 = document.getElementById("InputTrianguloL2");
  const inputBase = document.getElementById("InputTrianguloBase");
  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const base = Number(inputBase.value);
  const altura = alturaTriangulo(lado1, lado2, base);
  const area = areaTriangulo(base, altura);
  alert(area)
}
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  alert(perimetro)
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  alert(area)
}