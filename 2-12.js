// Area Of Isosceles Triangle

var side1=prompt("Enter the side1 :");
var side2=prompt("Enter the side2 :");
var side3=prompt("Enter the side3 :");
var s=(side1+side2+side3)/2;
var area=Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);