
"use strict"
//Função de multiplicação
function multiplication(a = 1, b = 1) {
    return a * b;
}

//console.log(multiplication(1, 2));

//----------------------------------------

// Array de Strings
function getLenghthiestString(strArray = []) {
    return strArray.sort((word1, word2) => {
        return word1.length - word2.length
    })[strArray.length - 1];
}

//arr = [1, 2, 3, 45];
//console.log(getLenghthiestString(arr));


//Primeira letra para maiúscula
function capitalize(word = "") {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
}


//var a = "pizza!"
//console.log(capitalize(a));

//------------------------------------------------------------------------


//Numero que mais vezes aparece num array

function getMostRepeated(numbers = []) {
    var sortedNumbers = numbers.sort((number1, number2) => {
        return number1 - number2;
    });
    var mostRepeated;
    let repeats = 0;

    for (let i = 0; i < sortedNumbers.length; i++) {
        let current = sortedNumbers[i];
        i++;
        let currentRepeats = 1;
        while (sortedNumbers[i] == current && i < sortedNumbers.length) {
            currentRepeats++;
            i++;
        }
        if (currentRepeats > repeats) {
            mostRepeated = current;
            repeats = currentRepeats;
        }
    }

    return mostRepeated;
}

// var result = getMostRepeated(numbers)

//console.log(sortedNumbers.toString());
/* sortedNumbers.forEach((element, index, array) => {
    console.log("P[" + index + "]: " + element);
}) */
// console.log(result);


// Valide que uma string passada como argumento representa um email válido. A função deve retornar um booleano (true/fasle)

function isValidEmail(email = "") {
    var valid = false;
    const rule = /[a-z.]+@[a-z.]+.[a-z]$/;
    return rule.test(email.toLowerCase());
}

//console.log(isValidEmail("jose.fernandes.aiao@gmail.com"));

//Formate um número recebido como argumento para apresentar exatamente 9 dígitos e
//retorne o valor com formato string. Se o número tiver menos de 9 dígitos devem ser
//adicionados zeros à esquerda. Caso o número tenha mais de 9 dígitos deve lançar uma
//1exceção.

function convertToString(number = 918290193) {
    var result = "" + number;
    if (result.length > 9) {
        throw new Exception();
    }
    var zeros = "";
    if (result.length < 9) {
        for (let i = result.length; i < 9; i++) {
            zeros += "0";
        }
    }

    return zeros + result;
}

// console.log("018290193" === convertToString(18290193));

//Calcular se o um número passado como argumento é um número primo. A função deve
//retornar um booleano (true/fasle).

function isPrime(number = 1) {
    if (number === 2 || number === 3) {
        return true;
    }
    for (let i = 2; i < Math.sqrt(number) + 1; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//console.log(isPrime(10));

// Converta um valor em cêntimos de euro nas respetivas moedas e retorne as moedas sobre
// a forma de array. Exemplo: 46 retorna [20,20,5,1], um conjunto de moedas que perfazem
// o valor pretendido


/*
2€ - 200
1€ - 100
0.5€ - 50
0.2€ - 20
0.1€ - 10
0.05€ - 5
0.02€ - 2
0.01€ - 1
*/
function toCoins(centimos = 0) {
    var resultado = [];
    var moedas = [20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    // moedas.sort((moeda1, moeda2) => {
    //     return moeda2 - moeda1;
    // });

    if (centimos <= 0) {
        return resultado;
    }
    var moeda = 0;
    var i = 0;
    while (moeda < moedas.length) {
        var coinNumber = getNumberOfPossibleCoins(centimos, moedas[moeda]);
        for (let j = 0; j < coinNumber; j++) {
            resultado[i] = moedas[moeda];
            centimos -= moedas[moeda];
            i++;
        }
        moeda++;
    }

    return resultado;
}

function getNumberOfPossibleCoins(centimos = 0, valorMoeda = 1) {
    return Math.floor(centimos / valorMoeda);
}

//console.log(toCoins(99800));


// Crie uma função que verifique se uma palavra passada como argumento é um palíndromo
// e retorne um booleano (true/fasle).

function isPalindromo(string = "") {
    var lenght = Math.floor(string.length / 2);
    var str1 = string.slice(0, lenght);
    var tmp = string.slice(-lenght, string.length);
    var str2 = "";

    for (let i = 0; i <= tmp.length; i++) {
        str2 += tmp.charAt(tmp.length - i);
    }

    return str1 === str2;
}

//console.log(isPalindromo("polilop"));

// Crie uma função que retorne o número de dias do mês de uma data passada como
// parâmetro. (Nota: tenha em consideração o Objecto Date e o facto de existirem anos
// bissextos.)

function monthNumberOfDays(date = new Date()) {
    var month = date.getMonth() + 1;
    var days;
    if (month === 2) {
        if (date.getFullYear() % 4 === 0) {
            days = 29;
        } else {
            days = 28;
        }
    } else {
        if (month <= 7) {
            days = 30 + (month % 2);
        } else {
            days = 31 - (month % 2);
        }
    }
    return days;
}

var date = new Date("2001-02-01")
console.log(date);
console.log(monthNumberOfDays(date));
console.log(monthNumberOfDays(new Date("2020-01-01")));
console.log(monthNumberOfDays(new Date("2020-02-01")));
console.log(monthNumberOfDays(new Date("2020-03-01")));
console.log(monthNumberOfDays(new Date("2020-04-01")));
console.log(monthNumberOfDays(new Date("2020-05-01")));
console.log(monthNumberOfDays(new Date("2020-06-01")));
console.log(monthNumberOfDays(new Date("2020-07-01")));
console.log(monthNumberOfDays(new Date("2020-08-01")));
console.log(monthNumberOfDays(new Date("2020-09-01")));
console.log(monthNumberOfDays(new Date("2020-10-01")));
console.log(monthNumberOfDays(new Date("2020-11-01")));
console.log(monthNumberOfDays(new Date("2020-12-01")));