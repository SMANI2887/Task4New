const friendsInfo = [6,12,"Mari",1,true,"Munnabai",200,"JCaptainAmerica",8,10]; 
const onlyNumbers = friendsInfo.filter( element => typeof element === 'number' ); 
let sum = 0; 
for (let i = 0; i < onlyNumbers.length; i++) { 
    sum += onlyNumbers[i]; 
    
} 
console.log(sum);