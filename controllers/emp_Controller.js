const Employee =require('../models/Emp_models');

const getUser= async (req,res)=>{
    try {
      const emp =  await Employee.find();
        res.send(emp); 
    } catch (err) {
        console.log(err);
    }
}


const addEmployee =async (req,res)=>{
    try{
    const emp = new Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        address:req.body.address
    })

   await emp.save(()=>{
        res.status(200).json(emp);
    })
    }catch(err){
        console.log(err)
    }
}

   
    const updateEmployee= async (req,res)=>{
        try{
        const emp = {
         name:req.body.name,
         email:req.body.email,
         phone:req.body.phone,
         salary:req.body.salary,
         address:req.body.address
        }
        await Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},()=>{
            res.status(200).json(emp)
        })
    }catch(err){
        console.log(err)
    }
    }

    const deleteEmployee = async (req,res)=>{
        try{
           const deluser = await Employee.findByIdAndDelete(req.params.id,(err,data)=>{
            res.send(data).json(deluser);
        })
    }catch(err){
        console.log(err);
    }
}  
        

const searchEmployee=  async (req,res)=>{
    try {
        const regex = RegExp(req.params.name)
        const searchEmployee= await Employee.find({name:{$regex:'name'}}).pretty()
    } catch (err) {
        console.log(err);
    }
}

const paginatedResults= async (req, res) => {
    try {
        // Adding Pagination
        const {page,size} = req.query;
        if(!page) {
            page = 1;
        }
        if(!size) {
            size = 10;
        }
        const limit = parseInt(size);
        const skip = (page - 1)*size;
        const posts = await Employee.find().limit(limit).skip(skip);
        res.status(200).send(posts);
    } catch (err) {
        console.log(err);
    }
}

            
     
module.exports = {getUser,addEmployee,updateEmployee,deleteEmployee,searchEmployee,paginatedResults}