
const express =require('express')
const cors=require('cors');
const mongoose= require('mongoose');
const { response } = require('express');


const app=express();
app.use(express.json());
app.use(cors());

const mongoUrl="mongodb+srv://ciseteam:M4fkbschjMs3bKQ@cluster0.02ybbwu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('DB is conntected');
}).catch((e)=>console.log(e));
const port=5000;
require('./userDetails');
const User= mongoose.model('Usertbl');

app.post('/register',async(req,res)=>
{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.email;
  const signup= new User({name:name,email:email,password:password});
  try
  {
    await signup.save();
    res.send({status:"ok"});
  }
  catch(err)
  {
    console.log(err);
    res.send({status:"error"});
  }
});
app.post('/login',async(req,res,next)=>
{
    const email=req.body.email;
    const password=req.body.password;
    const user= await User.findOne({email:email});
    if(user)
    {
        if(user.password==password)
        {
            return res.status(200).json({message:'Work'});
        }
        else 
        {
            return res.status(401).json({message:'error'});
        }
    }
    else 
    {
        return res.status(401).json({message:'sth wrong'});
    }
}
);
require('./Models/BookDetails');
const BookDetails=mongoose.model('BookDetails');
app.get('/BookDetails', async (req,res)=>
{
    BookDetails.find({},(err,result)=>
  {
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(result)
    }
  })
})

app.get("/BookDetailsFind",async(req,res) =>{
    const q = req.query.q;
    console.log(q);
    const keys=['title','authors']
let data = await BookDetails.find(
    {
        "$or":[
            {title:{$regex: q,  '$options' : 'i'}},
            {authors:{$regex: q,'$options' : 'i'}},
            {source:{$regex: q,'$options' : 'i'}},
        ]
    }
)
res.send(data);
});
app.get("/BookDetailsEvidence",async(req,res) =>{
    BookDetails.find({},{evidence: 1 },(err,result)=>
    {
      if(err)
      {
        res.send(err);
      }
      else
      {
        res.send(result)
      }
    })
});


app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})