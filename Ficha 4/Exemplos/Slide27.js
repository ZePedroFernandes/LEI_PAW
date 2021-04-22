async function workA(args) {
    console.log("Do Work");
}

async function workB(args) {
    console.log("Do More Work!");
}

async function assincronousExecution(args) {
    let resl = await workA(args);
    let res2 = await workB(args);
    console.log("Chained work ends")
}

assincronousExecution("lol").catch((error) => {
    console.log("An exception was thrown in one of the promisses");
})