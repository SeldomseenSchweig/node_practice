const fs = require('fs');
const axios = require('axios').default;

filename = process.argv[2]

function cat(path) {

    fs.readFile(path, "utf8", (err, data)=> {
        if(err){
            console.log(err)
            process.kill(1)
            
        }
        console.log(data)
    })
   
}


async function webCat(path) {
    try {
        const response = await axios.get(path);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

    
   
}

