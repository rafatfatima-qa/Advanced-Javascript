window.onload = function (){

    var str1= "graaaaaavy";
    var str2 = "goodbye";
    var youSay =  "goodbye";
    var test = "My name is Rafat";

    console.log(str1.repeat(5)); //repeat function repeats an string ur desired no. of times
    
    console.log(str2.startsWith("good")); //returns true or false ; this will be true
    console.log(str2.startsWith("bye")); //this will be false
    console.log(str2.startsWith("bye", 4)); //give position index to checking starts with, this will be true now

    console.log(str2.endsWith("bye")); //this will be true
    console.log(str2.endsWith("good")); //returns false
    console.log(str2.endsWith("good", str2.length - 3)); //returns true now

    if (youSay.startsWith("goodbye")){
        var iSay = "Hello";
    }
    console.log(`you sau ${youSay}, I say ${iSay}`);

    console.log(test.includes("name")); //returns true or false
}