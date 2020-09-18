const fs = require('fs');
fs.readdir(".", (err,filenames) =>{
    if (err){
        //run some error code
        console.log(err);
        throw new Error(err);

    }
    console.log(filenames);
});