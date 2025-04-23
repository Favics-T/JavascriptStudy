// tHis is a callback hell

function fetchData(callback){
    setTimeout
       (()=>{
            console.log("Fetch Data");
            callback();
        },1000        
       )
}

function processingData(callback){
    setTimeout(
        ()=>{
            console.log("Data Processed")
            callback();
        },1000
    )};

    function displayData(){
        setTimeout(()=>{
            console.log("Data displayed")
        },1000)
    };

    fetchData(()=>{
        processingData(()=>{
            displayData()

        })
    })

    // better option with promise

    function fetchData(){

        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                const success  = true;
                if(success){
                    resolve("Data fetched succesfully ")
                }
                else{
                    reject("Failed to fecth data")
                }
            },1000)
        })
    }

    fetchData()
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.err("failed to fetch data");
    })
