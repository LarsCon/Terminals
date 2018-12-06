let student = {name: 'Lars', awesome: true, course: 'Javascript'};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

var catArray = ['tabby', 'burmese', 'ragdoll', 'tortie'];
for(cat in catArray){
    console.log(cat);
}

var name = 'lArS';
var capName;

for(var letter in name){
    if (letter == 0){
        capName = name[letter].toUpperCase();
    } else{
        capName += name[letter].toLowerCase();
    }
}

console.log(capName);