//thru objects

// let car = {
//     model: 1994,
//     driveCar: function(){
//         console.log("Started driving");
//     }
// };

// console.log(car.model);
// car.driveCar;

// let anothercar = {
//     model: 2021,
//     driveCar: function(){
//         console.log("Started driving");
//     }
// };

// console.log(car.model);
// car.driveCar;



//thru factory function
// function createCar(model){
//     return {
//         model,
//         driveCar: function () {
//             console.log("started driving");
//         }
//     };
// }

// let car1 = createCar(1994);
// let car2 = createCar(2000);
// let car3 = createCar(2021);
// console.log(car1.model);
// console.log(car2.model);
// console.log(car3.model);
// car1.driveCar();

//thru constructor function

function Car(model){

    this.model = model;
    this.driveCar = function (){
        console.log("started driving");
        console.log(this.model);
    }
}

let myCar = new Car(1994);
console.log(myCar);
let myFriendsCar = new Car(2000);
console.log(myFriendsCar);
let myParentsCar = new Car(2021);
console.log(myParentsCar);




