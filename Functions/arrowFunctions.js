let coffee = () => {
    console.log('Coffee is better with Vodka');
}
 coffee();

 let dog = (doggy) => console.log(`${doggy} is my dog`)

 dog('Spot');

 function captializeName(name){
     let capName = '';
     for (let l in name){
         if (l==0){
             capName += name[l].toUpperCase();
         } else {
             capName += name[l].toLowerCase();
         }
     }
 console.log(capName);
 return capName
    }

captializeName('lArS');
const newName = capitializeName('laRs');
console.log(newName + 'How are you?');

function tipCalc(amount){
    let tip = '$' + .15 * amount;
    return suggested;
}
console.log(tip)