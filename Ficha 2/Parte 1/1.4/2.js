"use strict"

// nome
// age 
// numero de telefone 
// email 
// alcunhas
var contacts = [];


function createContact(name = "DefaulName", age = 0, telephone = 123456789, email = "defaulEmail@email.com", alcunhas = []) {
    if (name.charAt(0) === name.charAt(0).toLowerCase()) {
        throw new Exception("Illegal name");
    }
    if (telephone.toString().length != 9) {
        throw new Exception("Illegal telephone");
    }

    return {
        name: name,
        age: age,
        telephone: telephone,
        email: email,
        alcunhas: alcunhas
    };
};

function addContact(contact) {
    if (!contact) {
        throw new Exception("No contact");
    }
    var pos = contacts.length;
    contacts[pos] = contact;
};

function removeContact(pos = contacts.length) {
    if (contacts.length === 0) {
        return;
    }

    for (var i = pos; i < contacts.length - 1; i++) {
        contacts[i] = contacts[i + 1];
    }

    contacts.length -= 1;

};

function updateContact(contactPos = 0, name, age, telephone, email, alcunhas) {
    if (name) {
        contacts[contactPos].name = name;
    }
    if (age) {
        contacts[contactPos].age = age;
    }
    if (telephone) {
        contacts[contactPos].telephone = telephone;
    }
    if (email) {
        contacts[contactPos].email = email;
    }
    if (alcunhas) {
        contacts[contactPos].alcunhas = alcunhas;
    }
};

function getOlder(age) {
    var result = [];
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].age > age) {
            result[result.length] = contacts[i];
        };
    };
    return result;
};

var ze = createContact("José", 19, 123456789, "jose@email.com", ["Zé", "Pedro"]);
var joao = createContact("Joao", 20, 123456789, "joao@email.com", ["Jonas", "Misty"]);

addContact(ze);
addContact(joao);
updateContact(0, "Zé");

console.log(getOlder(19));
