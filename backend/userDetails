const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        isModerators: {type:String ,default:'false'},
        isAdmin: {type:String,default:'false'}
    },
    {
        collection:'Usertbl'
    }
);

mongoose.model('Usertbl',userDetailsSchema);