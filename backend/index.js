const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { default: axios } = require("axios");
const PORT = 3001;
const pvt_key = process.env.PVT_KEY;

app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate",async (req,res)=>{
    const {username} = req.body;
    try{
        const response = await axios.put("https://api.chatengine.io/users/",{
            username:username,
            secret:username,
            first_name:username
        },
        {
            headers:{"private-key":pvt_key}
        });
        return res.status(response.status).json(response.data);
    }catch(e){
        return res.status(e.response.status).json(e.response.data);
    }
    // return res.json({username:username,secret:"sha256..."});
});


app.listen(PORT,(req,res)=>{
    console.log("server is running on port "+PORT);
});