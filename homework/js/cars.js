var Car = function(num_of_wheels, speed) {
    this.num_of_wheels = num_of_wheels || '--';
    this.speed = speed || '--';
}
Car.prototype.method_drive = function() {
        return console.log('Driving on ' + this.speed + 'kms per hour');
    }
var truck = new Car(6);
var bycicle = new Car(2, 20);

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