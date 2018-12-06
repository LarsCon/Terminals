var friend='Bob';

switch(friend){
case 'Autumn':
    console.log('Hey Autumn, when are you going rock climbing');
    break;
case 'Dave':
    console.log('Hey Dave, how is cooper?');
    break;
case 'Alexc':
    console.log('Hey Alecx, when are we playing DnD');
    break;
default:
    console.log(`Im sorry, ${friend}, but do I know you?`);
}

let yep = -8;

switch(true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked!');
        break;
    default:
        console.log('didnt work');
}

let x = 6;

(x>0) ? console.log('yes') : console.log('no'); //yes (another way to write an if statement)

//goodbye (anoter way to write if else)
(x == 0) ? console.log('hello') : (x < 0) ? console.log('hi') : console.log('goodbye');

let age = 17;

(age >= 25) ? console.log ('car') : (age >= 21) ? console.log('drink') : (age >= 18) ? console.log('vote') : console.log('lol');

for(let i=0; i<=100; i++){
    (i%3 == 0 && i%5 == 0) ? console.log('FizzBuzz'):
    (i%5 == 0) ? console.log('Buzz'):
    (i%3 == 0) ? console.log ('Fizz'):
    console.log(i);
}