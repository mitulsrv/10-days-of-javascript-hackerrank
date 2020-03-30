function vowelsAndConsonants(s) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for(var i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) > -1){
            console.log(s[i]);
        }
    }
    for(var k = 0; k < s.length; k++){
        if(vowels.indexOf(s[k]) < 0){
            console.log(s[k]);
        }
    }

}