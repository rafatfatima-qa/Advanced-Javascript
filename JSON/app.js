/* Display date */
// fetch ('people.json'). then( function (response){
//     console.log(response, 'Response');
//     return response.json();

// }).then (function (dateObj){
//         console.log(dateObj);
//         document.getElementById("date-container").innerHTML = dateObj.date;
       
// });



/* Fetch only first posts record */
// fetch ('https://jsonplaceholder.typicode.com/posts'). then( function (response){
//     console.log(response, 'Response');
//     return response.json();

// }).then (function (postsArray){
//     console.log('All posts', postsArray);
//     document.getElementsByClassName("class-body")[0].innerHTML = postsArray[0].id;
//     document.getElementsByClassName("class-body")[1].innerHTML = postsArray[0].userId;
//     document.getElementsByClassName("class-body")[2].innerHTML = postsArray[0].title;
//     document.getElementsByClassName("class-body")[3].innerHTML = postsArray[0].body;       
// });



/* Fetch all posts records */
// fetch ('https://jsonplaceholder.typicode.com/posts'). then( function (response){
//     console.log(response, 'Response');
//     return response.json();

// }).then (function (postsArray){
//             document.getElementById('allPosts').innerHTML = postsArray.map(post => 
//                 `<div>
//                   <div>Id: ${post.id}</div>
//                   <div>User Id: ${post.userId}</div>
//                   <div>Title: ${post.title}</div>
//                   <div>Body: ${post.body}</div>
//                 </div>`
//             ).join('') //join('') removes comma after every item of array, check effect on browser by removing this function
     
// });

fetch ('https://jsonplaceholder.typicode.com/posts'). then( function (response){
    console.log(response, 'Response');
    return response.json();

}).then (function (postsArray){
                document.getElementById('allPosts').innerHTML = postsArray.map(post => 

                {
                document.getElementsByClassName("class-body").innerHTML = post.id;
                document.getElementsByClassName("class-body").innerHTML = post.userId;
                document.getElementsByClassName("class-body").innerHTML = post.title;
                document.getElementsByClassName("class-body").innerHTML = post.body; 
                // console.log(post);
                console.log(post.id);
                console.log(post.userId);
                console.log(post.title);
                console.log(post.body);
        }  
                )
});









// fetch ('people.json'). then( function (response){
//     console.log(response, 'Response');
//     return response.json();
// }).then (function (obj){
//     console.log(obj);
//     document.getElementById("date-container").innerHTML = obj.date;
// }).catch (function (error){
    
//     // console.error ('Something went wrong with returning the people');
//     // console.error(error);
//     document.getElementById("date-container").innerHTML = "Something went wrong with returning the people";
//     document.getElementById("date-container").innerHTML = error;
// });

