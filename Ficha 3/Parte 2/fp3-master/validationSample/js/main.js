
document.getElementById("submeter").addEventListener("click", function (ev) {
    validateFromData(ev);
})


function validateFromData(ev) {
    ev.preventDefault();
    debugger
    const user = document.getElementsByName("uname")[0].value;
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (user.length < 7) {
        alert("Username invalid (too short)");
        return false;
    }

    if (pass1 !== pass2) {
        alert("Diferent passwords!");
        return false;
    }

    if (pass1.lenght < 6) {
        alert("Short passwords!");
        return false;
    }

    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g
    if (!pass1.match(reg)) {
        alert("Invalid password");
        return false;
    }

    alert("Successful login");
}