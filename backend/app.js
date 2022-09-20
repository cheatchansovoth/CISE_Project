const express =require('express')
const app= express();
const {MongoClient} = require('mongodb');


async function main()
{
    const connection="mongodb+srv://chansovoth:FMpO0En5ytbaKsi1@cluster0.n1ovkfy.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(connection);
    try{
        await client.connect();
        
        console.log('DB is connected')

    }
    catch(e)
    {
        console.error(e);
    }
    finally
    {
        await client.close();
    }
}
main().catch(console.error);

app.get('/',(req,res,next)=>
{
    res.send('<h1>Running at port 5000</h1>')
})
app.listen(5000,function()
{
    console.log('Running at port 5000');
})