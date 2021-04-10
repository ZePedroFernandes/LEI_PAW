'use strict'
/*
   |1 |2 |3 |4 |5 |6 |7 |8 |9 |10|
A  |  |  |  |  |  |  |  |  |  |  |
B  |  |  |  |  |  |  |  |  |  |  |
C  |  |  |  |  |  |  |  |  |  |  |
D  |  |  |  |  |  |  |  |  |  |  |
E  |  |  |  |  |  |  |  |  |  |  |
F  |  |  |  |  |  |  |  |  |  |  |
G  |  |  |  |  |  |  |  |  |  |  |
H  |  |  |  |  |  |  |  |  |  |  |
I  |  |  |  |  |  |  |  |  |  |  |
J  |  |  |  |  |  |  |  |  |  |  |

A - 65;
J - 74;

Um objeto será o tabuleiro, contém dimensão (10 x 10);
  - Uma matriz de strings (nome do navio);

Para adicionar diz-se o ponto de origem e o de destino, nenhum barco pode ser colocado na diagonal, apenas totalmente na horizontal ou na vertical.

*/

class Table {
    table;
    shipNumber;

    constructor() {
        this.table = [[], [], [], [], [], [], [], [], [], []];
        this.shipNumber = 0;
        this.plays = 0;
    }

    addShip(startLetter = "A", endLetter = "A", startNumber = 1, endNumber = 1) {
        startLetter = startLetter.toUpperCase();
        endLetter = endLetter.toUpperCase();

        if (startLetter === endLetter) {
            let shipLenght = Math.abs(startNumber - endNumber) + 1;
            if (shipLenght <= 4) {
                for (let i = 0; i < shipLenght; i++) {
                    this.table[startLetter.charCodeAt(0) - 65][startNumber + i - 1] = "Navio" + (this.shipNumber + 1);
                }
            }
        } else if (startNumber === endNumber) {
            var tmp = (startLetter.charCodeAt(0) - endLetter.charCodeAt(0));
            let shipLenght = Math.abs(tmp) + 1;
            if (shipLenght <= 4) {
                for (let i = 0; i < shipLenght; i++) {
                    this.table[startLetter.charCodeAt(0) + i - 65][startNumber - 1] = "Navio" + (this.shipNumber + 1);
                }
            }
        } else {
            throw new Exception("Impossible ship positions");
        }
        this.shipNumber++;
    }

    shootShip(letter = "A", number = 1) {
        letter = letter.toUpperCase();
        if(this.table[letter.charCodeAt(0) - 65][number]){
            console.log("Ship " + this.table[letter.charCodeAt(0) - 65][number] + " shooted!");
            this.table[letter.charCodeAt(0) - 65][number] = undefined;
        }else{
            console.log("No ship found");
        }
    }

    printTable() {
        console.table(this.table);
    }
}

var table1 = new Table();

table1.addShip("A", "A", 9, 10);
table1.addShip("A", "B", 1, 1);
table1.addShip("B", "E", 2, 2);

//table1.printTable();

table1.shootShip("A",0);
table1.shootShip("B",0);
table1.printTable();
