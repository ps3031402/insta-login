const User = require("../models/user");


const getUsers = async (req, res) => {
  let usersObj = await User.find();
  return res.json({
    success : true,
    message : "user fetched",
    data : {
      users : usersObj
    }
  });
}

//  REGISTER || POST
const userRegister = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).send({
      success: false,
      message: "please fill all the fields",
    });
  }

 // console.log(req.body)


  let newUser = await User.create({ username, password });

  return res.status(200).send({
    success: true,
    message: "User registered successfully !",
    data: {
      user: newUser,
    },
  });
};

//  LOGIN || POST
// const userLogin = async (req, res) => {
//     console.log("testing>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
//     try{
//         const {email, password} = req.body;
//     if(!email || ! password){
//         return res.status(404).send({
//             success  : false,
//             message : "Email or password is invalid"
//         });
//     }

//     let userObj = await User.findOne({email});
//     if(!userObj){
//         return res.status(404).send({
//             success : false,
//             message : "Email is not registered"
//         });
//     }
//     const token = await jwt.sign({ id : userObj._id}, process.env.JWT_SECRET);
//     return res.status(200).send({
//         success : true,
//         message : "User logged in successfully",
//         data : {
//             user : userObj,
//             token : token
//         }
//     })
//     }catch(err){
//         console.log(err);
//         return res.status(500).send({
//             success : false,
//             message : err.message
//         })
//     }

// };


module.exports = {userRegister,getUsers}