window.onload =   function () {

    var meats = ["ham", "mutton", "chicken","beef", "salami", "bacon"];
    console.log(meats);
    console.log(...meats); //spread operator is 3 dots before array name



    var nums1 = [1,2,3];
    var nums2 = [4,5,6];
    var nums3 = [nums1,4,5,6];//without spread operator
    var nums4 = [...nums1,4,5,6]; //with spread operator

    console.log(nums2);
    console.log(nums3);
    console.log(nums4);

    function addNumbers(a,b,c){

        console.log(a+b+c);
    }
    addNumbers(nums1); //it will give undefined in result because this function expects 3 values
    addNumbers(...nums1); //spread operator will give 3 values

    //Take a constant array of cities and print with spread operator
    const cities = ["Karachi", "Islamabad", "Lahore"];
    console.log(cities);
    console.log(...cities);

    function sum(x, y, z, n) {
        return x + y + z + n;
      }
    console.log(sum(...nums1, 2));

    const initialName = ["Rafat", "Fatima"];
    const finalName = ["Syeda",...initialName];
    console.log(finalName);

}

