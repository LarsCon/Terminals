var on = true;
console.log(on)
var off = false
console.log(off)

//booleans can rep true/false, yes/no, on/off

var empty = null;
console.log(empty);
var undef = undefined;
console.log(undef);

var numbersAreHard = (.2 *10 + .1 *10) / 10;
console.log(numbersAreHard) //follows PEMDAS

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);
console.log (typeof first, typeof second); //Type of variable

var firstName = 'Lars';
var lastName = 'Conard';
var houseNumber = '102';
var street = 'South Allen Dr';
var city = 'Lebanon';
var state = 'Indiana';
var zipcode = '46052';

console.log(firstName, lastName, 'lives at:', '\n' + houseNumber, street, city, state, zipcode);

var burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};
console.log(burritosNow);