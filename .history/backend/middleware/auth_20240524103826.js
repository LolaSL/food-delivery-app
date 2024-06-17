import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        return res.json({success: false, message:"Not autorized, please login again"})
    }
    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.body.userId = token_decoded.id;
        next();
    
    } catch (error) {
        console.log(error)
        res
    }

};

export default authMiddleware;