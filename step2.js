const fs = require('fs');
const axios = require('axios').default;

filename = process.argv[2]

if (isValidHttpUrl(filename)){
    webCat(filename)
}else{
    cat(filename)
}



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
function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
