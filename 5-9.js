const friends = ["Mari","MaryJane","CaptainAmerica","Munnabai","Jeff","AAK Chandran"]; 
let lengthArray = friends.map(lengthFunction); 
function lengthFunction(str) { 
    return str.length; 
    
} 
const minLength = Math.min(...lengthArray); 
const index = lengthArray.indexOf(minLength); 
let minLengthString = friends[index]; 
console.log(minLengthString+ ':' +minLength);