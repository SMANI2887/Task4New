var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    
    function dataHandling(input){
        let friends3 = [...friends1,...friends2];
        friends3.sort();
        console.log(friends3);
    }
    
    dataHandling(friends1);