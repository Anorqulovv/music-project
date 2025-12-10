import express from "express";
import musics from "../controller/music.controller.js";
import { validator } from "../middleware/validation-handle.js";
import musicValidation from "../validation/music.validation.js";

const router = express.Router();

router
    .post("/",validator(musicValidation.create), musics.create)
    .get("/", musics.getAll)
    .get("/:id", musics.get)
    .patch('/:id',validator(musicValidation.update), musics.update)
    .delete('/:id', musics.remove)


export default router;
