const mongoose = require('mongoose');
const dbconnect = async()=>{
    try{

      await  mongoose.connect('mongodb://127.0.0.1:27017/Mern');
      console.log('connected to server');
    }
    catch(e){
        console.log(e);
    }
}
module.exports = dbconnect;