const express =require('express')
const cors=require('cors');
const mongoose= require('mongoose');

const jwt=require('jsonwebtoken');
const app=express();
app.use(express.json());
app.use(cors());

const JWT_SECRET='umi@mooni'
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
    const password=req.body.password;
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
app.get('/finduser/:id',async (req,res)=>
{
  const id=req.params.id;
  User.findById(id, function (err, result) {
    if (err){
      res.json({message:'not find user'});
    }
    else{
      console.log('find user');
    }
})
})
<<<<<<< Updated upstream
=======

const sendEmail=(link,userEmail,name)=>
{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cheatchansovoth@gmail.com',
      pass: 'wsuizluhrmmmtrcu'
    }
  });
  
  var mailOptions = {
    from: 'cheatchansovoth@gmail.com',
    to: `${userEmail}`,
    subject: 'Request new password',
    html: `
      <h1>Hi ${name}</h1>
      <b>Please no not share this link.</b><br/>
      ${link}
    `,
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
})
}
>>>>>>> Stashed changes
app.post('/reset-password',async(req,res)=>
{
  const email=req.body.email;
  const oldUser= await User.findOne({email:email});
  if(!oldUser)
  {
    res.status(401).json({error:'Incorrect Email'})
  }
  else 
  {
    const secret=JWT_SECRET+oldUser.password;

    const payload={
      email:oldUser.email,
      id:oldUser._id,
    }
    const token=jwt.sign(payload,secret,{expiresIn:'15m'})

    const link=`http://localhost:5000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
<<<<<<< Updated upstream
    res.status(200).json({result:link});
=======
    res.status(200).json({result:link,userID:oldUser._id});
    sendEmail(link,oldUser.email,oldUser.name);
>>>>>>> Stashed changes
  }
})
app.get('/reset-password/:id/:token',async (req,res)=>
{
    const id=req.params.id;
    const token=req.params.token;
    User.findById(id, function (err, result) {
    if (err){
      console.log(' not find user');
    }
    else{
      console.log('find user');
      res.json({User:result})
    }
  
})
})
app.put('/updateUser',async(req,res)=>
{
  const newName=req.body.newName;
  const newPassword=req.body.newPassword;
  const id=req.body.id;

  try{
    User.findById(id,(err,updateInfo)=>
    {
      updateInfo.name=newName;
      updateInfo.password=newPassword;
      updateInfo.save();
      res.send(updateInfo);
    })
  }catch(err)
  {
    res.send(err)
  }
})
<<<<<<< Updated upstream
=======
app.put('/resetPasswordUser',async(req,res)=>
{
  const id=req.body.id;
  const newPassword=req.body.newPassword;

  try{
    User.findById(id,(err,updateInfo)=>
    {
      if(User)
      {  
        updateInfo.password=newPassword;
        updateInfo.save();
        res.send(updateInfo);
      }
      else 
      {
        res.status(401).json({message:'can not find user'});
      }
    })
  }catch(err)
  {
    res.send(err)
  }
})

>>>>>>> Stashed changes
app.get('/userinformation', async (req,res)=>
{
  User.find({},(err,result)=>
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

app.delete('/deleteuser/:id',async(req,res)=>
{
  const id=req.params.id;
  
  await User.findByIdAndRemove(id).exec();
  res.send('deleted');
})
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