

// const usersList = document.getElementById('usersList');
// usersList.innerHTML = '<li>Loading...</li>';
let allUsers = [];

async function fetchUser(){
    try{

        const usersList = document.getElementById('usersList');
usersList.innerHTML = '<li>Loading...</li>';

        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();

        allUsers = data;  // Store all users for filtering
        renderUsers(allUsers); //show all initially
         
         usersList.innerHTML = ''; // Clears "Loading..."
       data.map((user)=>{
        let li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        usersList.appendChild(li);
       })
       


    }
    catch(error){
            console.error("error fetching data")
    }
}
// const usersList = document.getElementById('usersList');
// usersList.innerHTML = '<li>Loading...</li>';

//  Reusable render function
function renderUsers(users){
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '';

    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        usersList.appendChild(li);
    });
}

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredUsers = allUsers.filter(user =>
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText)
    );
    renderUsers(filteredUsers);
});


const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.addEventListener('click', fetchUser);

fetchUser();




