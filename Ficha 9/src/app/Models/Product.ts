export class Product {
    _id: String;
    name: String;
    description: String;
    quantity: Number;

    constructor(_id: String, name: String, description: String, quantity: Number) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
    }
}