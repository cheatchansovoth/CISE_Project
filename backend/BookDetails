const mongoose=require('mongoose');

const userDetailsSchema= new mongoose.Schema(
    {
        title: String,
        authors: String,
        source: String,
        pubyear: Date,
        doi: String,
        claim: String,
        evidence: String,
        pending: {type:String,default:'true'}
    },
    {
        collection:'BookDetails'
    }
);

mongoose.model('BookDetails',userDetailsSchema);