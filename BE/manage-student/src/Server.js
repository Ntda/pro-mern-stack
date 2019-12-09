const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/add-new',(req,res)=>{
    const info=req.body;
    console.log(info);
    info.description='info';
    res.json(info);
});

app.listen(3000, () => {
    console.log('Server start at port: 3000');
});