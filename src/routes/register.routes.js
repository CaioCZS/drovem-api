import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { registerStudent } from "../controllers/register.controllers.js"
import { studentSchema } from "../schemas/studentSchema.js"

const registerRouter = Router()

registerRouter.post("/register", validateSchema(studentSchema), registerStudent)

export default registerRouter
