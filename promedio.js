//Promedio
function calcularMediaArimtetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++){
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length

  return promedioLista;
}

// Mediana

function calcularMediana(lista) {
  lista.sort((a, b) => a - b);
  const mitadLista = parseInt(lista.length / 2);
  let mediana;
  if(lista.length % 2 == 0){
    mediana = calcularMediaArimtetica([
      lista[mitadLista - 1],
      lista[mitadLista],
    ]);
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
}

//Moda

function calcularModa(lista) {
  const listaCount = {}
  lista.map(
    function (elemento) {
      if (listaCount[elemento]){
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1;
      }
    }
  );
  const listaArray = Object.entries(listaCount).sort(
    function (valorAcumulado, nuevoValor) {
      return valorAcumulado[1] - nuevoValor[1];
    }
  );
  const moda = listaArray[listaArray.length - 1];
  return moda;
}

