import express from "express";
import musics from "../controller/music.controller.js";

const router = express.Router();

router.post("/", musics.createMusic);
router.get("/", musics.getAllMusic);
router.get("/:id", musics.getMusic);


export default router;
