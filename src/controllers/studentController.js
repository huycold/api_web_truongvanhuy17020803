var studentModel = require("./../model/studentModel")

let getAll = (req,res)=>{
    studentModel.find().then(data=>{
        if(data){
           
            // res.render("master",{
            //     student :data
            // })
            res.json(data)
        }
    })
}
let getOne = (req,res)=>{
    var id = req.params.id
   
    studentModel.find({_id:id}).then(data=>{
        if(data){
            res.json(data)
        }
    })
}
module.exports ={
    getAllStudent:getAll,
    getOneStudent :getOne
}