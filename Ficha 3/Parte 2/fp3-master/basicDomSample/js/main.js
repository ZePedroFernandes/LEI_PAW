
window.addEventListener("load", function (ev) {
    document.getElementById("myForm").addEventListener("submit", function (ev) {
        ev.preventDefault();
        return false;
    })

    document.getElementById("submeter").addEventListener("click", function (ev) {
        readFromData(ev);
    }
    )
})

function placeInfoByID(attributeID, attributeDisplayID) {
    const attributeValue = document.getElementById(attributeID).value;
    const attributeDisplay = document.getElementById(attributeDisplayID);
    attributeDisplay.innerText = attributeValue;
}

function placeRadio(attributeClass, attributeDisplayId) {
    const value = document.querySelector(attributeClass).value;
    const display = document.getElementById(attributeDisplayId);
    display.innerText = value;
}

function readFromData(ev) {
    ev.preventDefault();
    placeInfoByID("nome", "nameDisplay");
    placeInfoByID("idade", "ageDisplay");
    placeInfoByID("satisfaction", "satisfactionDisplay");
    placeInfoByID("cor", "colorDisplay");
    placeInfoByID("time", "hourDisplay");
    placeInfoByID("data", "dateDisplay");
    placeRadio('input[name="estudar"]:checked', "studyDisplay");
    placeInfoByID("weekDay", "weekDayDisplay")
    placeRadio('input[name="gender"]:checked', "genreDisplay")

    return false;
}