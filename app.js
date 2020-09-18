const fs = require('fs');
fs.readdir(".", (err) =>{
    if (err){
        //run some error code
        console.log(err);
        throw new Error(err);

    }else{
        
    }
});