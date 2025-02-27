
//Callback
const posts =[
    {title:'Post one', body:"This is post one"},
    {title:'Post Two', body:"This is post two"}
];

function getPosts(){
    setTimeout(
        ()=>{
            let output ='';
            posts.forEach((post,index)=>{
                output += `<li>${post.title}</li>`
                            })
            document.body.innerHTML=output;
        },1000
    )
}
getPosts();

function createPost(post,callback){
    setTimeout(
        ()=>{
            posts.push(post);
            callback();
        },2000
    )
}

createPost({title:'Post Three', body:'This is Post Three'},getPosts);

//Promises

const cars = [
    {name:'Mustang',body:'This is a Mustang'},
    {name:'Ford', body:'This is a Ford'}
];

function getCarList(){
    setTimeout(
        ()=>{
            let output ='';
            cars.forEach((car,index)=>{
                output += `<li>${car.name}</li>`
            })
            document.body.innerHTML = output;
        },1000
    )
}

function createCar(car){
    return new Promise((resolve,reject) =>{
        setTimeout(
            ()=>{
                cars.push(car)

                const error = false;

                if(!error){
                    resolve();
                }
                else{
                    reject('Error: could not add car to list')
                }
            },2000);

    });
    
};

createCar({name:'Toyota', body:"This is Toyota"}).then(getCarList).catch(err=>console.log(err));

// if you have a lot of promise to make,instead of using .then- multiple times you can use .all

/*
CALLBACKS
callbacks can get messy wit nested callbacks
simple and works fine

PROMISES
handles async operation better, 
requires .then and .catch

ASYNC/AWAIT
cleanest and the most readble 
requires try/catch for error handling

use call back for simple case
use promise if dealing with multiple async operations
use async await for cleaner and readable code

*/