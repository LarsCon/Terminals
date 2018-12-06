let students = ['Tony', 'Marshall', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']]
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][0])
console.log('Hello ' + students[6][1] + ' waddup');

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
for (f in food){
}
food.push('porkchop')
for (f in food) {
}



food.splice(1,1, 'Bananas')
for (f in food){
}
food.splice(2,0, 'Pie')
for (f in food){
    console.log(food[f])
}



let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
food.forEach(f => {console.log(f);})



let movies = ['Star Wars', 'Star Trek', 'Harry Potter', 'Indiana Jones'];
movies.splice(2,0, 'Beuty and the Beast')
for (f in movies){}
movies.splice(1,1, 'Sharknado')
for (f in movies){}
movies.forEach(f => {console.log(f);})

let long = [1,2,3,4,5,6,7,8,9,10]
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(typeof colors);
console.log(colors.length);
console.log(typeof colors.toString());
colors.forEach(c => console.log(c));

let arr = [1,2,3,4,5]
if (arr instanceof Array === true){
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
}