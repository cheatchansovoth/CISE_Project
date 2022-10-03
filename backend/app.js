const express =require('express')
const cors=require('cors');
const mongoose= require('mongoose');

const app=express();
app.use(express.json());
app.use(cors());

const mongoUrl="mongodb+srv://chansovoth:FMpO0En5ytbaKsi1@cluster0.n1ovkfy.mongodb.net/?retryWrites=true&w=majority";
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
require('./BookDetails');
const BookDetails=mongoose.model('BookDetails');

app.get('/',(req,res,next)=>
{
    res.send(`Port is running at ${port}`);
})
app.listen(port,(req,res)=>
{
    console.log(`App is running at port ${port}`);
})