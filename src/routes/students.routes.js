import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import {
  editStudent,
  getStudentsByClass,
  getStudentsById,
  registerStudent,
} from "../controllers/students.controllers.js"
import { studentSchema, studentSchemaEdit } from "../schemas/studentSchema.js"

const studentsRouter = Router()

studentsRouter.get("/students/:id", getStudentsById)
studentsRouter.get("/students/class/:classId", getStudentsByClass)
studentsRouter.post("/register", validateSchema(studentSchema), registerStudent)
studentsRouter.put(
  "/students/:id",
  validateSchema(studentSchemaEdit),
  editStudent
)

export default studentsRouter
