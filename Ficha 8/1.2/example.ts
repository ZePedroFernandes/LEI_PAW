class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    disp(): void {
        console.log("Engine is:", this.engine);
    }
}

const myCar = new Car("V8 12L")

myCar.disp();