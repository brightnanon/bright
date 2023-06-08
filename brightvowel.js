let vowel = ["a","e","i", "o", "u", "A","E","I", "O", "U"]
let str = "Hello W0rld"

function remove(str){
const chars = str.split('');
const result = chars.filter(char => !vowel.includes(char));
const newStr = result.join('');
return newStr
}

const newStr = remove(str);
console.log(newStr);
