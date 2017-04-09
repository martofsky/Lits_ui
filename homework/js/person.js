var person = {
    name: 'Nikolay',
    last_name: 'Nikolaev',
    address: {
        city: 'Moskow',
        street: 'some_street'
    },
    children: [
        {
            name: 'Petr',
            last_name: 'Nikolaev'
        },
        {
            name: 'Ann',
            last_name: 'Nikolaeva'
        }
    ],
    work: function() {
        console.log(this.name + ' is working');
    }
}
//startCloning
function extend(from, to)
{
//clone all attr for future time, because Ganchin is unpredictable :)
    if (from == null || typeof from != "object") return from;
    if (from.constructor != Object && from.constructor != Array) return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
        from.constructor == String || from.constructor == Number || from.constructor == Boolean)
        return new from.constructor(from);
    to = to || new from.constructor();
    for (var name in from)
    {
        to[name] = typeof to[name] == "undefined" ? extend(from[name], null) : to[name];
    }
    return to;
}
//testing
var person2 = extend(person);
person2.name = 'BlaBla';
person2.work(); // BlaBla is working
person.work(); // Nikolay is working