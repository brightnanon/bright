let num = [3, 10, 12, 13, 15, 28, 30];
let b = num.filter(bangboom);

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
