const UserModel= require("../Module/userModule");


const userSave=async(req, res)=>{
    const {name,  email, password } = req.body;
      
    try {
         const User= await UserModel.create({
            name:name,
            email:email,
            password:password
         })

         res.status(200).send("user succesfully registered!");
    } catch (error) {
          console.log(error);
    }
}

const userLogin=async(req, res)=>{
  const { email, password}=req.body;
  try {
       const User=await  UserModel.findOne({email:email});
       if (!User)
       {
         res.status(400).send({msg:"Email not found!"});
       }
       if (User.password!=password)
       {
        res.status(400).send({msg:"Password dose not match!"});
       }
       
       res.status(200).send(User);
  } catch (error) {
     console.log(error);
  }
}


const userDetail=async(req, res)=>{
  const {id} = req.body;
   try {
       const User= await UserModel.findById(id);
       console.log(User);
       res.status(200).send(User)
   } catch (error) {
      console.log(error);
   }
}

module.exports={
    userSave,
    userLogin,
    userDetail
}