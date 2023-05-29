import { Router } from "express"
import { getClasses, postClasses } from "../controllers/classes.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { classesSchema } from "../schemas/classesSchema.js"

const classesRouter = Router()

classesRouter.get("/classes", getClasses)
classesRouter.post("/classes", validateSchema(classesSchema), postClasses)

export default classesRouter
