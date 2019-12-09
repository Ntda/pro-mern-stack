const express=require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/',(req,res)=>{
    const info=req.body;
    console.log(req);
    info.description='info';
    res.json(info);
});

app.listen(3000, () => {
    console.log('Server start at port: 3000');
});