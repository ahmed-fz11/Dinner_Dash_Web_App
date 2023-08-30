import jwt from 'jsonwebtoken';

export const authenticateJWT = (req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1];
    // console.log("token after : ",token)
    if(!token){
        return res.status(401).json({error: 'unauthorized'})
    }

    try{
        const decodedToken = jwt.verify(token,'Random string') //decoded token has token payload containing _id,email,fullname
        req.user = decodedToken //attaching user info to req object //makes it convenient to access this information without repeatedly decoding the JWT token in every route handler
        next()
    }
    catch(error){
        return res.status(401).json({error: 'unauthorized'})
    }
}