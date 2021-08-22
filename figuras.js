//Código del Cuadrado
// console.group("Cuadrados")
//Lado del cuadrado
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado
const perimetroCuadrado = (lado) => (lado * 4);
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
//Area del cuadrado
const areaCuadrado = (lado) => lado * lado;
// console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
// console.groupEnd();


//Código del Triangulo
// console.group("Triangulo");
//Lados de triangulo
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo =5;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
// console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
const perimetroTriangulo = (lado1, lado2, base) => (lado1 + lado2 + base);
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
const areaTriangulo = (base, altura) => (base * altura) / 2;
// console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
// console.groupEnd();


//Código del Circulos
// console.group("Circulos");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = (radio) => radio * 2;
// console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
// console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
// console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = (radio) => PI * (radio**2);
// console.log("El area del circulo es " + areaCirculo + " cms.");
// console.groupEnd();
