{
    let x = 2;
  }
  // x can NOT be used here
 // console.log(x);


  {
    var y = 2;
  }
  // y CAN be used here
  //console.log(y);




  // code here can NOT use carName
  console.log(carName);

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
  console.log(carName);
}

// code here can NOT use carName
console.log(carName);

function myFunction1() {
  var carName = "Volvo";   // Function Scope
}

function myFunction2() {
  let carName = "Volvo";   // Function Scope
}

function myFunction3() {
  const carName = "Volvo";   // Function Scope
}