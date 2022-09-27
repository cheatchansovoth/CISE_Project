const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
    },
    {
        collection:'UserInformation'
    }
);

mongoose.model('UserInformation',userDetailsSchema);