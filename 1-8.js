//(1.7). Write 6 statement which provide truthy & falsey values.

// // all true
// 1 == '1';
// 1 == [1];
// '1' == [1];

if(1 == '1' && 1 == [1] && '1' == [1]){
    console.log("condition is ture");
}else{
    console.log("condition is false");
}

// // all false
// 1 === '1';
// 1 === [1];
// '1' === [1];

if(1 === '1' && 1 === [1] && '1' === [1]){
    console.log("condition is ture");
}else{
    console.log("condition is false");
}
