async function fetchUser(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        const usersList = document.getElementById('usersList');
      
       data.map((user)=>{
        let li = document.createElement('li');
        li.textContent = user.name;
        usersList.appendChild(li);
       })
       


    }
    catch(error){
            console.error("error fetching data")
    }
}
fetchUser();