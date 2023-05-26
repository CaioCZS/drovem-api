import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import {
  getStudentsByClass,
  getStudentsById,
  registerStudent,
} from "../controllers/students.controllers.js"
import { studentSchema } from "../schemas/studentSchema.js"

const studentsRouter = Router()

studentsRouter.post("/register", validateSchema(studentSchema), registerStudent)
studentsRouter.get("/students/:id", getStudentsById)
studentsRouter.get("/students/class/:classId", getStudentsByClass)

export default studentsRouter
