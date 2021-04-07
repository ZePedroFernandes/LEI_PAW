function soma(a = 0, b = 0) {
    return a + b
}
console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())

function concat(a = "a", b = "b") {
    return a + b
}
console.log(concat("Hello ", "World"))
console.log(concat(""))
console.log(concat())

function odd_demo2(a, b) {
    if (a && !b) {
        console.log(a)
    } else if (!a && b) {
        console.log(b)
    } else if (a && b) {
        console.log(a + " " + b)
    } else {
        console.log("a and b");
    }
}
odd_demo2(1)
odd_demo2("hello", 3)
odd_demo2()

function element(index) {
    var arr = [1, 2, 3];
    let targetPosition = Math.abs(index);
    let result;
    if (targetPosition <= arr.length) {
        result = arr[targetPosition]
    } else {
        result = arr[0];
    }
    return result;
}
console.log(element(-1));

function sample(c = "c") {
    console.log(c)
}
sample()