const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://shahinshakilinadan:oRR1Y4wjnQK4gkrb@bookfolio.uofqvpw.mongodb.net/")
.then(()=>{
console.log('dB connected')
})
.catch(()=>{
    console.log('not connected')
})



const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=mongoose.model("collection",newSchema)

module.exports=collection


