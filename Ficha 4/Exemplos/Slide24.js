function callback2(args) {
    console.log(args);
}

function callback() {
    console.log("Do Work");
    setTimeout(() => { callback2("222") }, 1000);
}

function workA() {
    // Do work after 1000s 
    console.log("A");
    setTimeout(callback, 1000);
}

workA()
