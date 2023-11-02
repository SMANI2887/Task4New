var test =  new XMLHttpRequest();
test.open('GET','https://restcountries.com/v2/all',true)
test.send();
test.onload=function(){
    if(test.status == 200){
        var data = JSON.parse(test.responseText);
        for(let i=0;i<data.length;i++){
            console.log(data[i].name,data[i].subregion,data[i].region,data[i].population);
        }
        
    }
}