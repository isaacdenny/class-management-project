import express from "express";
import { login, register } from "../controllers/student/auth.js";
import { search } from "../controllers/student/search.js";
import { getClass, getClasses } from "../controllers/student/class.js";

const router = express.Router();

router.get("/auth/login", login);
router.post("/auth/register", register);
router.get("/search", search);
router.get("/class/:id", getClass);
router.get("/dashboard", getClasses);

export default router;
