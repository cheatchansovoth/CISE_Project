const mongoose=require('mongoose');

const removeDetailsSchema= new mongoose.Schema(
    {
        title: String,
        authors: String,
        source: String,
        pubyear: Date,
        doi: String,
        claim: String,
        evidence: String,
    },
    {
        collection:'RemoveArticle'
    }
);

mongoose.model('RemoveArticle',removeDetailsSchema);