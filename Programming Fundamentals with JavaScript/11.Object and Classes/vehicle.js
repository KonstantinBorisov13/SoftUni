function car() {
    class Vehicle {
        constructor(type, model, parts = {}, fuel, drive) {
            this.type = type;
            this.model = model;
            this.fuel = fuel;
            this.parts = {
                engine: 0,
                power: 0,
                quality: parts.engine * parts.power
            }
            fuel = Number(fuel);
            this.drive = (x) => {
                x = Number(x);
                this.fuel -= x;

            }

        }
    }
}

    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);


car()