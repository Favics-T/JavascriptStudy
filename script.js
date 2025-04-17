
const post = [
    {title:"Post one",body:"This is post one"},
    {title:"Post two", body:"This is post two"}
];

function getPost(){
    setTimeout(
        ()=>{
           post.map((p,index)=>{
            console.log(p)
           })
        },1000
    )
}
    getPost();

    let names = ["Taiwo", "Kehinde"];

    names.map((name)=> console.log(name))

    const sayHi = () => {
        console.log("Hey!");
      }
      

    setTimeout(() => {
        console.log("Waited 1 second");
      }, 1000);
      

      const fakeAPI = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded"), 2000);
      });
      
      fakeAPI.then((data) => console.log(data));

      async function getData() {
        const response = await fakeAPI;
        console.log(response);
      }
      getData();
      