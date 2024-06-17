import express from 'express';
import {getMenu, addMenuItem} from "../controllers/menuController.js"
import multer from 'multer';


const menuRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
})

const upload = multer({ storage: storage });

menuRouter.get('/',  getMenu);


menuRouter.post('/addMenu', addMenuItem);

export default menuRouter;
