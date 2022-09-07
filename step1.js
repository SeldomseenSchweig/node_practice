const fs = require('fs')

function cat(path) {

    fs.readFile(path, "utf8", (err, data)=> {
        if(err){
            console.log(err)
            process.kill(1)
            
        }
        console.log(data)
    })
   
}
filename = process.argv[2]
console.log(filename)
cat(filename)