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
var d = c + 10; // 15
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



	function add(a, b) {
		if (check(a, b)) {
			return a + b;
		} else {
			console.log('wrong walue')
			return;
		}
	}

		function divide(a, b) {
		if (check(a, b) && b != 0) {
			return a / b;
		} else {
			console.log('wrong walue')
			return;
		}
	}


	function check(a, b) {
		return typeof(a) == 'number' && typeof(b) == 'number';
	}

//---------------------------------


//var add = function (...) {....}

//1
var obj = {}
addKey(obj, 'test', 50);
console.log(obj.test);

//2
addKey = function(test) {
	var obj = {
		test: 50
	}
	return obj[test];
}
//3
var addKey = (function() {
    var obj = {
        a: 50,
    };

    return function(test) {
        return obj[test];
    }
})();

//4
var obj = {
  a:100,
  b:11,
  c:200
}

addKey = function (obj, key, value) {
  obj[key]=value;
};

addKey(obj, 'test', 50);

console.log(obj);

addKey = function (obj, key, value) {
	var obj {}
  obj['test']=50;
};
console.log(obj);