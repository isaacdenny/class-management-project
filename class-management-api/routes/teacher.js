import express from "express";
import { login, register } from "../controllers/teacher/auth.js";
import { search } from "../controllers/teacher/search.js";
import { createClass, getClass, getClasses, modifyClass } from "../controllers/teacher/class.js";

const router = express.Router();

router.post("/auth/login", login);
router.post("/auth/register", register);
router.get("/search", search);
router.get("/class/:id", getClass);
router.get("/dashboard", getClasses);
router.post("/create-class", createClass);
router.patch("/modify-class", modifyClass);

export default router;
