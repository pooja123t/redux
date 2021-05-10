var Titorial=require('../module/tutorials');
exports.createTitorial=function(req,res,next)
{
	var titorialOb=new Titorial({
		Title:req.body.Title,
		description:req.body.description
	})
	titorialOb.save(function(err){
	if(err)
 		{
 			console.log(err);
 			res.json({error:"cont save"})
 		}
 		else{
 			console.log('succes');
 			res.json({msg:"author saved"});
 		}
 	})
}
exports.getTitorial=function(req,res,next)
{
	Titorial.find(function(err,titorials_list){
		res.json(titorials_list)
	})
}
exports.getTitorials=function(req,res,next)
{
	console.log(req.param);
	Titorial.findOne({"Title":req.params.Title},function(err,titorials_list){
		res.json(titorials_list);
	})
}
exports.deleteTutorial=function(req,res,next)
{
	console.log(req.params);
	Titorial.deleteMany(req.params.id,function(err)
		{if(err)
		res.json(err.toString());
		res.json({status:1,msg:"successfully delete author with id" +req.params.id})
	})
}
exports.updateTutorial=function(req,res,next)
{
	console.log(req.body);
	Titorial.findByIdAndUpdate(req.params.id,req.body,function(err)
		{
			if(err)
		res.json(err.toString());
		res.json({status:1,msg:"successfully edited author with id" +req.params.id})
	})
}

