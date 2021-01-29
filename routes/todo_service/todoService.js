const Todo = require('../../models/Todo');

exports.addTodo = async(req,res)=>{
    try{
        const {name,status} = req.body;
        let result = await new Todo({
            name,
            status
        }).save();
        if(result){
            res.status(200).json({success:true,result:result._id});
        }
    }catch(e){
        res.status(500).json({success:false,error:e.message});
    }
}

exports.getTodos = async(req,res)=>{
    try{
        let result = await Todo.find({}).lean();
        res.status(200).json({success:true,result:result});
    }catch(e){
        res.status(500).json({success:false,error:e});
    }
}

exports.getTodosByStatus = async(req,res)=>{
    const {status} = req.params;
    try{
        let result = await Todo.find({status}).lean();
        res.status(200).json({success:true,result:result});
    }catch(e){
        res.status(500).json({success:false,error:e});
    }
}