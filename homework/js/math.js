var Square = function(a) {
    this.a = a;
}
Square.prototype.equals = function(area, per) {
    var area = Math.pow(this.a, 2);
    var per = 4 * this.a;
    console.log('Area = ' + area + ', Perimeter = ' + per);
}
var sqr = new Square (2);

/*
Square.prototype.sides = function() {
    return [this.a, this.a, this.a, this.a];
}
*/

var Rectangle = function(a, b) {
    Square.call(this, a)
    this.b = b;
}
Rectangle.prototype.equals = function(area, per) {
    var area = this.a * this.b;
    var per = 2 * (this.a + this.b);
    console.log('Area = ' + area + ', Perimeter = ' + per);
}
var rect = new Rectangle (2, 4);

var Parallelepiped = function(a, b, c) {
    Rectangle.call(this, a, b)
    this.c = c;
}
Parallelepiped.prototype.equals = function(area, per) {
    var area = 2 * ((this.a * this.b) + (this.b * this.c) + (this.a * this.c));
    var per = 4 * (this.a + this.b + this.c);
    console.log('Area = ' + area + ', Perimeter = ' + per);
}
var ppiped = new Parallelepiped (2, 4, 3);



