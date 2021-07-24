window.onload =  function (){

    function log(number=10){
        console.log(number);
    }
    log(123); //it will overwrite the number given in parameters

    function logNinja(name="abc", belt="white", age=56){
        console.log("My name is: " + name +
        " my age is " + age +
        " my belt color is " + belt);
    }
    logNinja("Rafat", "black", 12); //it will overwrite the number given in parameters
    logNinja(); // if nothing is provided in arguments it will take the parameters values i.e. name="abc", belt="white", age=56


}