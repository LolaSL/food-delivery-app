import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        return res.json({success: false, message:"Not autorized, please login again"})
    }
    try {
        const token_decoded = jwt.verify(token, proccesJWT_SECRET_KEY);
    } catch (error) {
        
    }

};

export default authMiddleware;