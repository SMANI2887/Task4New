const friends = ["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK Chandran"]; 
let lengthArray = friends.map(lengthFunction); 
function lengthFunction(str) { 
    return str.length; 
    
} 
const maxLength = Math.max(...lengthArray); 
const index = lengthArray.indexOf(maxLength); 
let maxLengthString = friends[index]; 
console.log(maxLengthString+ ':' +maxLength);