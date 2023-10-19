import express  from "express";
import { createUniversity, deleteUniversity,getUniversities, getUniversityBycity, updateUniversity } from "../controllers/university.js";
const router=express.Router();
router.get("/",getUniversities);
router.get("/:city",getUniversityBycity);
router.post("/",createUniversity);
router.put("/:_id",updateUniversity);
router.delete("/:_id",deleteUniversity);

export default router;