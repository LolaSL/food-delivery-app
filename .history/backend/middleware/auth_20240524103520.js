import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        return res.json({success: false, message:"Not autorized, please login again"})
    }
    try {
        const token
    } catch (error) {
        
    }

};

export default authMiddleware;