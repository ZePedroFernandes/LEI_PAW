var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is:", this.engine);
    };
    return Car;
}());
var myCar = new Car("V8 12L");
myCar.disp();
