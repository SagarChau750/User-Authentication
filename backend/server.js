const express = require('express');
const app = express();
const User = require('./db/user');
const cors = require('cors');

app.use(cors());

const port = 8000;
app.use(express.json());
const connect = require('./db/dbconnnection');
connect();

app.post('/signup',async (req,res)=>{
    try{
        const{username, password} = req.body;
        console.log(req.body);
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message :"registratin success"});
    }catch{
        res.status(500).json({error :'Reginstrioa failed'});
    }
})
//login
app.post('/login', async(req, res)=>{
    try{ 
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(401).json({error :'Invalid username'});
        }
        if(user.password !== password){
            res.status(401).json({error:'invalid password'});
        }
        res.status(201).json({message:'login successfully'});
    }catch{
        
        res.status(500).json({error :'login failed'});

    }
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})