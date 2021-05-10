var mongoose=require('mongoose');

var TitorialSchema=new mongoose.Schema({
Title:{type:String,required:true,max:100},
description:{type:String,required:true,max:100}
})
module.exports=mongoose.model('Titorials',TitorialSchema);
//'author' it is collection name