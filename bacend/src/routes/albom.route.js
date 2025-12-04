import express from "express";
import alboms from "../controller/albom.controller.js";

const router = express.Router();

router.post("/", alboms.create);
router.get("/", alboms.getAllAlbom);
router.get("/:id", alboms.getAlbom);

export default router;