window.onload =   function () {

    var tempstring = `Hello
    I am an student of TechKaro


    
    I am learning ES6 right now
    `; //it also includes white spaces
    
    console.log(tempstring);

    function logNinja(name, age){

        console.log("My name is " + name + " and my age is "+age);
        console.log(`My name is ${name} and my age is ${age}`);
        console.log(`My name is ${name} and my age is ${age + 2}`); // u can give expression too inside curly brackets
    }
    logNinja("Rafat", 24);
}