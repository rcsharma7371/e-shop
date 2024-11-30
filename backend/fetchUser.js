var jwt = require('jsonwebtoken');

const JWT_SECRET = "MSD_07";

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    console.log("token ",token)
    if(!token){
        res.status(401).send({error: "Please authenticate using a valid token"})
    
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        console.log("User Id ",data)
        req.user = data.id;
        // console.log("User id",req.user)
        next();
        
    } catch (error) {
        console.log(error)
        res.status(401).send({error: "Please authenticate using a valid token"})
    
    }
}

module.exports = fetchUser;