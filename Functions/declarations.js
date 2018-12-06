function hi(){
    console.log('HI!');
}

var hey = function hey(){
    console.log('I already said hi!');
}

hi();
hey();

function numbers(){
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}

numbers();

let arr = ['This', 'Is', 'Really', 'Lame'];
function array(){
    for(variable of arr){
        console.log(variable);
    }
}
array()