const friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    function dataHandling(input, name){
    for (var i = 0; i < input.length; i++) {
        if(input[i] === name){
            console.log("found");
            break
        }
    
    }
    }
    
    dataHandling(friends,"Jeff");
    
    