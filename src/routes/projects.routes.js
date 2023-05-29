import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { projectSchema } from "../schemas/projectSchema.js"
import { PostProject } from "../controllers/projects.controllers.js"

const projectsRouter = Router()

projectsRouter.post("/projects", validateSchema(projectSchema), PostProject)

export default projectsRouter
