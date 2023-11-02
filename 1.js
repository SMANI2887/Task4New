let obj1 = { name : "mani",location : "trichy"};
let obj2 = { location : "trichy",name : "mani"};

function mani(x, y){

let m = true;

if(Object.keys(x).lenght == Object.keys(y).length){

for(key in x){

if(x[key] == y[key]){

continue;

}else{

m = false;

break;

}

}

} else {

m = false;

}

console.log(m);

}
mani(obj1, obj2)