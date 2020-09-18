const fs = require('fs');
// proces is global everywhere
fs.readdir(process.cwd(), (err,filenames) =>{
    if (err){
        //run some error code
        console.log(err);
        throw new Error(err);

    }
    console.log(filenames);
});