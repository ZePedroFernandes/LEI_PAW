async function workA() {
    console.log("Do Work");
}

async function workB() {
    console.log("Do More Work");
}

workA()
    .then(() => workB())
    .then(() => {
        console.log("Chained work ends")
    }).catch((error) => {
        console.log("An exception was thrown in one of the promisses");

    })
