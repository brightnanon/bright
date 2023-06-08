let num = [3, 10, 12, 13, 15, 28, 30];
//const num =  15;

function bangboom(num){
if (num % 3 == 0 && num % 5 != 0 ){
    console.log('BANG');
}
else if (num % 5 == 0 && num % 3 != 0 ){
    console.log('BOOM');
}
else if (num % 3 == 0 && num % 5 == 0){
    console.log('BANGBOOM');
}
else{
    console.log('MISS');
}
}
console.log(num.filter(bangboom));

//let a = arr.filter(num => num % 3 == 0 && num % 5 != 0);
//let b = arr.filter(num => num % 5 == 0 && num % 3 != 0);
//let c = arr.filter(num => num % 3 == 0 && num % 5 == 0);
//let d = arr.filter(num => num % 3 != 0 && num % 5 != 0);

//a.forEach(item => {console.log(a + '= BANG')} );
//b.forEach(item => {console.log(b +'= BOOM')} );
//c.forEach(item => {console.log(c + '= BANGBOOM')} );
//d.forEach(item => {console.log(d + '= MISS')} );
