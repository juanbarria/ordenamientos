function azar(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarAnios(arreglo:number[], cantidad:number) {
  let i: number;
  for ( i=0 ; i < cantidad; i++) {
    arreglo[i] = azar(6, 80);
  }
}

function cargarAlturas(arreglo: number[], cantidad: number) {
  let i: number;
  for ( i= 0; i < cantidad; i++) {
    arreglo[i] = azar(1100, 2000);
  }
}

function cargarNombre(arreglo: string[], cantidad: number) {
  let i: number;
  for ( i= 0; i < cantidad; i++) {
    arreglo[i] = prompt(`Indique el Nombre`);
  }
}


function mostrar(arreglo: number[], cantidad: number, titulo: string) {
  let i:number;
  let vector: string = "";
  for ( i= 0; i < cantidad; i++) {
    vector += `${arreglo[i]} `;
  }
  console.log(vector);
}

function mostrarTexto(arreglo: string[], cantidad: number, titulo: string) {
  let i:number;
  let vector: string = "";
  for (i= 0; i < cantidad; i++) {
    vector += `${arreglo[i]} `;
  }
  console.log(vector);
}

function intercambiar(arreglo: number[], j: number, k: number) {
  let aux: number;
  aux = arreglo[j];
  arreglo[j] = arreglo[k];
  arreglo[k] = aux;
}

function intercambiarTexto(arreglo: string[], j: number, k: number) {
  let aux: string;
  aux = arreglo[j];
  arreglo[j] = arreglo[k];
  arreglo[k] = aux;
}



function ordenarBubble(arreglo1: string[],arreglo2: number[],
  arreglo3: number[],
  cantidad: number
) {
  for (let i: number = 0; i < cantidad -1; i++) {
    for (let j: number = 0; j < cantidad -1- i; j++) {
      if (
        arreglo2[j] > arreglo2[j + 1] ||
        (arreglo2[j] === arreglo2[j + 1] && arreglo3[j] > arreglo3[j + 1])
      ) {
        intercambiarTexto(arreglo1, j, j + 1);
        intercambiar(arreglo2, j, j + 1);
        intercambiar(arreglo3, j, j + 1);
      }
    }
  }
}

function ordenarSelection(
  arreglo1: string[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
) {
  let posMinimo: number;
  for (let i: number = 0; i < cantidad - 1; i++) {
    posMinimo = i;
    for (let j: number = i + 1; j < cantidad; j++) {
      if (
        arreglo2[j] < arreglo2[posMinimo] ||
        (arreglo2[j] === arreglo2[posMinimo] &&
          arreglo3[j] < arreglo3[posMinimo])
      ) {
        posMinimo = j;
      }
    }
    if (posMinimo !== i) {
      intercambiar(arreglo2, i, posMinimo);
      intercambiarTexto(arreglo1, i, posMinimo);
      intercambiar(arreglo3, i, posMinimo);
    }
  }
}

let longitudArrays: number = Number(
  prompt("Indique la cantidad de Personas")
);

let nombre0: string[] = new Array(longitudArrays);
let anios0: number[] = new Array(longitudArrays);
let altura0: number[] = new Array(longitudArrays);

let nombre1: string[] = new Array(longitudArrays);
let anios1: number[] = new Array(longitudArrays);
let altura1: number[] = new Array(longitudArrays);

cargarNombre(nombre0, longitudArrays);
cargarAnios(anios0, longitudArrays);
cargarAlturas(altura0, longitudArrays);

nombre1 = nombre0;
anios1 = anios0;
altura1 = altura0;

console.log("Ordenamiento por Selección  ");
mostrarTexto(nombre0, longitudArrays, "Cargado Nombre: ");
mostrar(anios0, longitudArrays, "Cargado Años: ");
mostrar(altura0, longitudArrays, "Cargado Alturas: ");

ordenarSelection(nombre0, anios0, altura0, longitudArrays);


console.log(" Ordenamiento por Bubble ");
mostrarTexto(nombre1, longitudArrays, "Cargado Nombre: ");
mostrar(anios1, longitudArrays, "Cargado Años: ");
mostrar(altura1, longitudArrays, "Cargado Alturas: ");

ordenarBubble(nombre1, anios1, altura1, longitudArrays);
