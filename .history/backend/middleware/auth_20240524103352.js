import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const { token } = req.headers;
    if (!token) {
        return res.json({suc})
    }

};

export default authMiddleware;