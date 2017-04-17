var Cars = (function() { //namespace
    var Car = function(wheels, speed) {
        var privateWheels = wheels || '--';
        var privateSpeed = speed || '--';

        this.getWheels = function() {
            return  privateWheels;
        }
        this.getSpeed = function() {
            return privateSpeed;
        }
    }
    Car.prototype.drive = function() {
            return console.log('Driving on car' + this.getSpeed + 'kms per hour');
    }
    var Truck = function(speed) { 
    Car.call(this, 6, speed); 
    } 
    Truck.prototype = Object.create(Car.prototype);
    var Bycicle = function() { 
    Car.call(this, 2, 20); 
    }
    Bycicle.prototype = Object.create(Car.prototype);
    return {
        Truck: Truck,
        Bycicle: Bycicle
    }
})();

    var car = new Car(4, 40);
    var truck = new Truck(6);
    var bycicle = new Bycicle(2, 20);
