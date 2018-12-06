let weather = 75;

if (weather < 70) {
    console.log('Wear a Jacket');
} else {
    console.log('No Jacket necessary')
}

let name = 'Lars';
if (name == 'Lars'){
    console.log('Sup cuz')
} else {
    console.log('Who you is?')
}


let cap = 'lars'
cap = cap.charAt(0).toUpperCase() + cap.slice(1).toLowerCase();
console.log(cap);

//_________________________________________________

let age = 21;
if(age >= 25){
    console.log('get a house')
}else if(age >= 21){
    console.log('go party')
}else if(age >= 18){
    console.log('go vote')
}else{
    console.log('lol')
}