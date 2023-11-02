var friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];
let b = 0;
let c = 0;
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i].length)
    b += friends[i].length;
    c = b / friends.length;

}
console.log(c.toFixed(2))