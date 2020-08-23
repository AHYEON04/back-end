const { User}  = require("../../models");

const register = async (req, res) => {
    const{ name, userId, password} = req.body;
    try{
     await User.create({
           name,
           userId,
           password,
       });

       res.status(200).json({
           message : "성공"
       });
    }catch(e){
        res.status(409).json({
           massage : "중복된 유저 아이디",
           error: e.message
        });  
    }
};

module.exports = {
    register, 
}