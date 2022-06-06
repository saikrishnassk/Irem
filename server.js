const express = require('express');
const app = express();

app.get('/api', (req,res)=>{
    console.log("came into server");
    res.send({"data":"got data from server"});
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})