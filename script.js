//CONDICIONALES
//EJERCICIO Nº1
//EJERCICIO Nº2
let edad = parseInt(prompt("ingrese su edad"));

if (edad < 18) {
    alert("usted es menor de edad!!");
} else {
    alert("usted es mayor de edad");
}



//EJERCICIO Nº3
let cobChoco;
let precio;
const mensaje = "tu helado de ";
const helado = 150;
const cobertura = 30;
const sabores = ["limon", "dulce de leche", "crema americana", "chocolate", "naranja"];
let sabor = parseInt(prompt("elija un sabor:\n1-limon\n2-dulce de leche\n3-crema americana\n4-chocolate\n5-naranja\n6-kinotos al w\n7-vengo otro dia"));
while (sabor !== 1 && sabor !== 2 && sabor !== 3 && sabor !== 4 && sabor !== 5 && sabor !== 6 && sabor !== 7) {
    sabor = parseInt(prompt("elija un sabor:\n1-limon\n2-dulce de leche\n3-crema americana\n4-chocolate\n5-naranja\n6-kinotos al w\n7-vengo otro dia me olvide el dinero"));

}
if (sabor < 5 && sabor > 0) {
    cobChoco = prompt("lo quieres con cobertura de chocolate?\nS-si\nN-no");
    while (cobChoco.toUpperCase() !== "S" && cobChoco.toUpperCase() !== "N") {
        cobChoco = prompt("lo quieres con cobertura de chocolate?\nS-si\nN-no");
    }

    if (cobChoco.toUpperCase() === "S") {
        precio = helado + cobertura;
        alert(mensaje + " " + sabores[sabor - 1] + " " + "cuesta:  " + " " + precio + "$");
    } else {
        alert(mensaje + " " + sabores[sabor - 1] + " " + "cuesta:  " + " " + helado + "$");
    }
    alert("adios gracias por venir!!");

} else if (sabor == 5 || sabor == 6) {
    alert("no me quedo ese sabor hoy salio muchisimo\ndisculpas mañana seguro lo tenemos");
} else {
    alert("dale que tengas un buen dia");
}



//EJERCICIO Nº4
let numA = parseInt(prompt("ingrese un numero"));
let numB = parseInt(prompt("ingrese un 2º numero"));

let numC = numA + numB;
if (numC % 2 == 0) {
    alert("el numero es par");
} else {
    alert("el numero es impar")
}



//EJERCICIO Nº5
let num = parseInt(prompt("ingrese un numero"));

if (num < 0) {
    alert("el numero es negativo");

} else if (num == 0) {
    alert("el numero ingresado es cero");
} else {
    alert("el numero es positivo");
}



//EJERCICIO Nº6
let importe = parseFloat(prompt("ingrese importe"));
let total;
let desc;

if (importe > 2000) {
    desc = (importe * 10) / 100;
    total = importe - desc;
    alert("El total con descuento es: " + total + " $");
} else {
    alert("El total a abonar es: " + importe + " $");
}



//EJERCICIO Nº7
let palabra = prompt("ingrese una palabra");
let position = parseInt(prompt("ingeser una posicion a mostrar"));

let letra;

if (position >= 1 && position <= palabra.length) {

    alert(palabra.charAt(position - 1));
    letra = palabra.charAt(position - 1);
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert("es una vocal");
        position = position - 1;
        console.log("se detecto una vocal en la posicion: " + position + " " + "del string\n" + palabra.toUpperCase());

    } else if (letra == palabra.includes("/\s/g")) {
        alert("es un espacio");
        position = position - 1;
        console.log("se detecto un espacio en la posicion: " + position + " " + "del string\n" + palabra.toUpperCase());
    } else if (letra == '"') {
        alert("son comillas dobles");
        console.log("se detecto comillas dobles en la posicion: " + position + " " + "del string");
    } else {

        alert(" es consonante");
        position = position - 1;
        console.log("se detecto una consonante en la posicion: " + position + " " + "del string\n" + palabra.toUpperCase());
    }


} else {
    alert("la posicion es inexistente");
}



//EJERCICIO Nº8
let nota = parseFloat(prompt("ingresar la nota del examen"));
if (nota <= 3 && nota >= 0) {
    alert("estas aplazado");
} else if (nota >= 4 && nota <= 5) {
    alert("estas reprobado");
} else if (nota >= 6 && nota <= 10) {
    alert("estas aprobado");
} else {
    alert("has ingresado un dato erroneo");
}



//EJERCICIO Nº9
let numero = parseInt(prompt("ingrese un numero"));
let numeroA = parseInt(prompt("ingrse otro numero"));

if (numero === numeroA) {
    alert("los numero son iguales")
} else if (numero < numeroA) {
    alert("el segundo numero es el mayor" + " " + numeroA);
} else {
    alert("el primer numero es el mayor" + " " + numero);
}



//EJERCICIO Nº10
let mes = parseInt(prompt("ingrese el mes del 1 al 12"));
const meses = ["Enero", "Febrero", "marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let bisiesto;
while (mes < 1 || mes > 12) {
    mes = parseInt(prompt("Incorrecto!!\ningrese nuevamente el mes del 1 al 12"));
}
if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    alert(meses[mes - 1] + ", el mes tiene 30 dias");
} else if (mes == 2) {
    bisiesto = prompt("indique si es bisciesto:\n1- es bisiesto\n2-no es bisiesto");
    if (bisiesto == 1) {
        alert("Año bisiesto, " + meses[mes - 1] + " tiene 29 días");
    } else {
        alert(meses[mes - 1] + ", el mes tiene 28 días");
    }
} else {
    alert(meses[mes - 1] + ", el mes tiene 31 días");
}



//EJERCICIO Nº11
let numA = parseInt(prompt("ingrese numero"));
let numB = parseInt(prompt("ingrese otro numero"));
let numC = parseInt(prompt("ingrese un ultimo numero"));
const mensaje = "el numero mayor es: ";
if (numA != numB && numA != numC && numB != numC) {
    if (numA > numB && numA > numC) {
        alert(mensaje + " " + numA);
    } else if (numB > numA && numB > numC) {
        alert(mensaje + " " + numB);
    } else {
        alert(mensaje + " " + numC);
    }
} else {
    alert("los numeros son iguales");
}



//EJERCICIO Nº12


let bebidas = ["cerveza", "jugo", "agua mineral"];
let cerveza = 50;
let jugo = 30;
let agua = 25;
let paga;
let total;
let mensaje = "su vuelto es: ";
let bebida = parseInt(prompt("Elija la bebida a comprar\n1-Cerveza\n2-Jugo\n3-Agua mineral"));

alert("elegiste\n" + bebidas[bebida - 1] + "?" + "\na continuacion ingresa tu edad");
let edad = parseInt(prompt("ingrese su edad"));
if (edad < 18 && bebida == 1) {
    alert("usted es menor!!!\nNO PUEDE COMPRAR\nALCOHOL!!!");
} else {
    if (bebidas[bebida - 1]) {
        paga = parseFloat(prompt("si abonas justo?\ningrese 1\nsino ingrese monto"));
        if (paga === 1) {
            alert("gracias por abonar con cambio");
            //sin vuelto
        } else {
            if (bebidas[bebida - 1] === "cerveza") {
                while (paga < cerveza && paga != 3 && paga != 1) {
                    alert("falta dinero");
                    paga = parseFloat(prompt("si abonas justo?\ningrese 1\nsino ingrese monto\n3-ingresa 3 si vuelves luego"));


                }
                if (paga == 3) {
                    alert("hasta luego");
                } else if (paga === 1) {
                    alert("gracias por el cambio");
                } else {
                    total = paga - cerveza;
                    alert(mensaje + " " + total);

                }



            } else if (bebidas[bebida - 1] === "jugo") {
                total = paga - jugo;
                alert(mensaje + " " + total);
            } else {
                total = paga - agua;
                alert(mensaje + " " + total);
            }

        }
    }
}



//EJERCICIO Nº13
let mes = parseInt(prompt("ingrese del 1 al 12 el mes que quiere en pantalla"));
let meses = ["Enero", "Febrero", "marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
while (mes < 1 || mes > 12) {
    mes = parseInt(prompt("Error al ingresar dato\ningrese del 1 al 12 el mes que quiere en pantalla"));
}
alert("Hola como estas?\nsoy el mes de : " + meses[mes - 1]);