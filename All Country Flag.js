let a = new XMLHttpRequest();
a.open('GET','https://restcountries.com/v2/all',true)
a.send();
a.onload = function(){
    if(a.status == 200){
        var data = a.responseText;
         data = JSON.parse (a.responseText);
         for( let i=0; i<data.length; i++)
        console.log(data[i].flags);
    }
}