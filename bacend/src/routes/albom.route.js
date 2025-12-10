import express from "express";
import alboms from "../controller/albom.controller.js";
import { validator } from "../middleware/validation-handle.js";
import albomValidation from "../validation/albom.validation.js";

const router = express.Router();

router
    .post("/", validator(albomValidation.create),alboms.create)
    .get("/", alboms.getAll)
    .get("/:id", alboms.get)
    .patch('/:id', validator(albomValidation.update ),alboms.update)
    .delete('/:id', alboms.remove)

    
export default router;