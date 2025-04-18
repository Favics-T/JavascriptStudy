async function fetchUser(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        const usersList = document.getElementById('usersList');
        

    }
    catch(error){

    }
}
fetchUser();