import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { projectSchema } from "../schemas/projectSchema.js"
import {
  GetProjects,
  PostProject,
} from "../controllers/projects.controllers.js"

const projectsRouter = Router()

projectsRouter.post("/projects", validateSchema(projectSchema), PostProject)
projectsRouter.get("/projects", GetProjects)

export default projectsRouter
