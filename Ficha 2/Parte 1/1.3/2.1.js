
//Função de multiplicação
function multiplication(a = 1, b = 1) {
    return a * b;
}

//console.log(multiplication(1, 2));

//----------------------------------------

// Array de Strings
function getLenghthiestString(strArray = []) {
    return strArray.sort(function (word1, word2) {
        return word1.length - word2.length
    })[strArray.length - 1];
}

arr = [1, 2, 3, 45];
console.log(getLenghthiestString(arr));


//Primeira letra para maiúscula
function capitalize(word = "") {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
}


var a = "pizza!"
console.log(capitalize(a));

//------------------------------------------------------------------------


//Numero que mais vezes aparece num array


