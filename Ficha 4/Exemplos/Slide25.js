function workA() {
    let p = new Promise(function (resolve, reject) {
        console.log("Do Work");
        // If there are no errors
        resolve()
        // If there may be errors
        // reject('Error Message’)
    })
    return p;

}

function workB() {
    let p = new Promise(function (resolve, reject) {
        console.log("Do more work");
        // If there are no errors
        resolve()
        // TIf there may be errors
        // reject('Error Message")
    })
    return p;
}

workA().then(function () {
    return workB()
}).then(() => {
    console.log("Chained work ends")
}).catch((error) => {
    console.log("An exception was thrown in one of the promisses");
})

