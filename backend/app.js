const express =require('express')
const cors=require('cors');
const mongoose= require('mongoose');
require('dotenv').config()
const jwt=require('jsonwebtoken');
const nodemailer = require("nodemailer");
const path=require('path')
const app=express();
app.use(express.json());
app.use(cors());

const JWT_SECRET=process.env.JWT_SECRET
const mongoUrl=process.env.MongooseURL;
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('DB is conntected');
}).catch((e)=>console.log(e));
const port=5000;


require('./model/userDetails');
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
              const secret=JWT_SECRET;

              const payload={
                email:user.email,
                id:user._id,
              }
              const token=jwt.sign(payload,secret,{expiresIn:'15m'})

              return res.status(200).json({user:token,isAdmin:user.isAdmin,isModerators:user.isModerators,isLogging:'true'});
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
  const sendEmail=(link,userEmail)=>
{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.Username,
      pass: process.env.Password
    }
  });
  
  var mailOptions = {
    from: 'cheatchansovoth@gmail.com',
    to: `${userEmail}`,
    subject: 'Reset Password',
    html:`<h1>Your token is here do not share it</h1> <br/>
      ${link}
    `
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
})
}
app.get('/admin/finduser/:id',async (req,res)=>
{
  const id=req.params.id;
  User.findById(id, function (err, result) {
    if (err){
      res.json({message:'not find user'});
    }
    else{
      res.send({User:result});
    }
})
})
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

    const link=`http://128.199.126.239:5000/resetpassword/newpassword/${oldUser._id}`;
    res.status(200).json({result:link});
    sendEmail(link,oldUser.email);
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
app.put('/admin/updateUser',async(req,res)=>
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
app.get('/admin/userinformation', async (req,res)=>
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

app.delete('/admin/deleteuser/:id',async(req,res)=>
{
  const id=req.params.id;
  
  await User.findByIdAndRemove(id).exec();
  res.send('deleted');
})
app.get('/mod/bookdetails/:id',async (req,res)=>
{
  const id=req.params.id;
  BookDetails.findById(id, function (err, result) {
    if (err){
      res.json({message:'not find book'});
    }
    else{
      res.send({BookDetails:result});
    }
})
})
app.delete('/mod/deleteBook/:id',async(req,res)=>
{
  const id=req.params.id;
  
  await BookDetails.findByIdAndRemove(id).exec();
  res.send('deleted');
})
app.put('/mod/updateStatus',async(req,res)=>
{
  const id=req.body.id;

  try{
    BookDetails.findById(id,(err,updateInfo)=>
    {
      updateInfo.pending='false';
      updateInfo.save();
      res.send(updateInfo);
    })
  }catch(err)
  {
    res.send(err)
  }
})
require('./model/BookDetails');
const BookDetails=mongoose.model('BookDetails');
app.get("/BookDetailsFind",async(req,res) =>{
  const q = req.query.q;
  const keys=['title','authors']
let data = await BookDetails.find(
  {'pending': {$ne : "true"},
    "$or":[
    {title:{$regex: q,  '$options' : 'i'}},
    {authors:{$regex: q,'$options' : 'i'}},
    {source:{$regex: q,'$options' : 'i'}},
]}
  
  )
res.send(data);
});
app.get('/mod/pendinglist', async (req,res)=>
{
  BookDetails.find({'pending': {$ne : "false"}},(err,result)=>
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
app.post('/post-article',async(req,res)=>
  {
    const title=req.body.title
    const authors=req.body.authors
    const source=req.body.source
    const pubyear=req.body.pubyear
    const doi=req.body.doi
    const claim=req.body.claim
    const evidence=req.body.evidence  
    const newBookDetails= new BookDetails({title:title,authors:authors,source:source,pubyear:pubyear,doi:doi,claim:claim,evidence:evidence});
    try
    {
      await newBookDetails.save();
      res.send({status:"ok"});
    }
    catch(err)
    {
      res.send({status:"error"});
    }
  });
require('./model/RemoveArticle');
const RemoveArticle= mongoose.model('RemoveArticle');

app.post('/mod/removearticle',async(req,res)=>
{
  const title=req.body.title
  const authors=req.body.authors
  const source=req.body.source
  const pubyear=req.body.pubyear
  const doi=req.body.doi
  const claim=req.body.claim
  const evidence=req.body.evidence  
  const remove= new RemoveArticle({title:title,authors:authors,source:source,pubyear:pubyear,doi:doi,claim:claim,evidence:evidence});
  try
  {
    await remove.save();
    res.send({status:"ok"});
  }
  catch(err)
  {
    res.send({status:"error"});
  }
})

if(process.env.NODE_ENV==='production')
{
    app.use(express.static(path.join(__dirname,'/client/build')));
    
    app.get('*',(req,res)=>
    {
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    })
}

app.listen(process.env.PORT || 8080,(req,res)=>
{
    console.log(`App is running at port ${process.env.PORT}`);
})