var x=12;

function scope(){
    var x=33
    console.log(x);
}//scope provides a field were inside its parameters, it's variables have nothing to do with outside functions, as long as they do not claim exsisting variables

scope()//33
console.log(x);//12
//_______________________________
var x=12;

function scope(){
    var x=33
    if (true){
        let x=45; //let works only for this block of code
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x)

/*
variable grammared    obeys functional scope  obeys block scope   can be mutated(changed after initialization)
var                   x                       -                   x
let                   x                       x                   x
const                 x                       x                   -
*/