import express from "express";
import {
  getTeachers,
  getTeacherById,
  createTeacher,
  UpdateTeacher,
  DeleteTeacher,
} from "../controllers/TeacherController.js";

const router = express.Router();

router.get("/teachers", getTeachers);
router.get("/teachers/:id", getTeacherById);
router.post("/teachers", createTeacher);
router.patch("/teachers/:id", UpdateTeacher);
router.delete("/teachers/:id", DeleteTeacher);

export default router;
