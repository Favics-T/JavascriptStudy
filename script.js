//refreshing my memory
let posts = [
    {title:"Post one", body:"This is Post One"},
    {title:"Post Two", body:"This is Post Two"},
    {title:"Post Three", body:"This is Post Three"},
    {title:"Post Four", body:"This is Post Four"},
];

const getPosts = ()=>{
    setTimeout(
        ()=>{
            let output = '';
            posts.map((p,index)=>{
                output += `<li> ${p.title}</>`
            })
            document.body.innerHTML = output
        },1000
    )  
}

function createPost(post){
   setTimeout(
    ()=>{
        posts.push(post)
    },2000
   ) 
}

getPosts();
createPost({title:"Post five", body:"This is post five"});