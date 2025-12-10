import express from "express";
import albomRouter from './albom.route.js'
import musicRouter from './music.route.js'

const router = express.Router();

router.use("/albom", albomRouter);
router.use("/musics", musicRouter);


export default router;