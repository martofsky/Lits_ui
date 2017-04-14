var Car = function(num_of_wheels, speed) {
    this.num_of_wheels = num_of_wheels || '--';
    this.speed = speed || '--';
}
Car.prototype.drive = function() {
        return console.log('Driving on car' + this.speed + 'kms per hour');
}

var Truck = function(num_of_wheels, speed) { 
 Car.call(this, num_of_wheels, speed); 
} 
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.drive = function () {
 console.log('Driving on truck' + this.speed + 'kms per hour');
}

var Bycicle = function(num_of_wheels, speed) { 
 Car.call(this, num_of_wheels, speed); 
 this.num_of_wheels = num_of_wheels || 2;
 this.speed = speed || 20;
}
Bycicle.prototype = Object.create(Car.prototype);
Bycicle.prototype.drive = function () {
 console.log('Driving on bycicle' + this.speed + 'kms per hour');
}

var car = new Car(4, 40);
var truck = new Truck(6);
var bycicle = new Bycicle(2, 20);

/*
function closure(num_of_wheels, speed) {
    Car.call(this, num_of_wheels, speed);
    return {
        get: function(num_of_wheels, speed) {
            return JSON.parse(JSON.stringify(num_of_wheels, speed));
        },
        set: function(newNum_of_wheels, newSpeed) {
            if (typeof (newNum_of_wheels, newSpeed) === "object") {
                value = JSON.parse(JSON.stringify(newNum_of_wheels, newSpeed));
            }
        }
    }
}

var newCar = closure();
*/