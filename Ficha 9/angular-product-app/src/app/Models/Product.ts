export class Product {
    __id: String;
    name: String;
    description: String;
    quantity: Number;

    constructor(__id: String, name: String, description: String, quantity: Number) {
        this.__id = __id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}