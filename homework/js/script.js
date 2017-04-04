var a = 1;

var b; //var b =undefined;

// js types:
// number = 1, 5, 0, Infinity, -Infinity, NaN, 0.56, 1e23
// boolean = true, false
// string = 'test', '214124231', "21435342"
// null = null
// undefined = undefined

var aaa = 1;
aaa = "test";

aaa = true;

if (typeof(aaa) == "string") {
	alert("STRING IS HERE")
} else if (typeof(aaa) == "boolean") {
	alert("IT'S NOT A STRING")
} else {
	alert("SMTH NEW IS HERE")
}

aaa = "1111";

if (typeof(aaa) == "string" || typeof(aaa) == "boolean") {

}

switch(typeof(aaa)) {
	case "string":
		alert("STRING IS HERE");
		break;
	case "boolean":
		alert("BOOLEAN IS HERE");
		break;
	default:
		alert("SMTH NEW IS HERE");
}

// =>

//elem = "style = 'display: none;'";

var c = 5;
car d = c + 10; // 15
d = x - 10; // -5
d = c * 10; // 50
d = c / 10; // 0.5

d = 'test' + 5; // 'test5'
d = true - undefined;
d = false * Infinity;

// 2.5 => 2.499999999999999999999999999999999999998

// Math - sin, cos, tan, arcos, pow, sqrt

/*
var i = 1;
for (;;) {
	

}
*/

for (var i = 1; i < 10; i = i + 1) {
	console.log(i);
}

i = 0;
while (i < 10) {
	console.log(i);
	i = i + 1;
}

i = 1;
do {
	console.log(i)
	i = i + 1;
}
while (i < 10)
}

/* FACTORIAL 10*/

var f = 10, res = 1; //10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

while (f > 1) {
	res = res * f;
	f = f - 1;
}

console.log(res);

/*functions*/

function factor(num) {
	var res = 1;
	while (num > 1) {
		res = res * f;
		num = num - 1;
	}	

	return res;
}



function add(a, b) {
	return a + b;
}

console.log(add(5, 10));


// Calc :
// a + b
// a - b
// a * b
// a /0 (check if zero)
// Math.pow
// Math.sqrt

// validation message = 'wrong values'