const fs = require('fs');
const axios = require('axios').default;





if (process.execArgv[0] !=='--out')
{
    filename = process.argv[2]
    if (isValidHttpUrl(filename)){
         data = webCat(filename)
         console.log(data)
    }else{
        data = cat(filename)
        console.log(data)
    }
}else{
    path = process.argv[2]
    filename = process.argv[3]
    if (isValidHttpUrl(filename)){
        webCatWrite(path,filename)

   }else{
        catWrite(path,filename)
   }
}





function cat(path) {

    fs.readFile(path, "utf8", (err, data)=> {
        if(err){
            console.log(err)
            process.kill(1)
            
        }
        return data
    })
   return data
}


async function webCat(path) {
    try {
        const response = await axios.get(path);
        data= response.data;
        return data
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


  function catWrite(path,filename){
     data = cat(filename)
     fs.writeFile(path, data, (err)=>{
        if (err) {
            console.log(err)
            console.log(`The path: ${err} is not valid`)
            process.kill(1)
        }
        else{
            console.log("Successful writing!")
        };
        
     })
      


  }

  async function webCatWrite(path, filename ) {
    data = webCat(filename)
    fs.writeFile(path, data, (err)=>{
        if (err) {
            console.log(err)
            console.log(` The path: ${err} is not valid`)
            process.kill(1)
        }
        else{
            console.log("Successful writing!")
            }
        })
    }