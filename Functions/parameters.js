function pet(animal){
    console.log(`I have a ${animal} for a pet`);
}

pet('dog');

function pet2(animal, owner){
    console.log(`${owner} has a ${animal} for a pet`)
}

pet2('dog', 'Bill');
pet2('cat', 'Alex');
pet2('fish', 'Sally');

function name(first, last){
    let fullName = `${first} ${last}`;
    console.log('My name is ' + fullName);
}

name('Lars', 'Conard');
