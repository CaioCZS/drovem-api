import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { deliverySchema, projectSchema } from "../schemas/projectSchema.js"
import {
  GetProjects,
  PostDelivery,
  PostProject,
} from "../controllers/projects.controllers.js"

const projectsRouter = Router()

projectsRouter.post("/projects", validateSchema(projectSchema), PostProject)
projectsRouter.get("/projects", GetProjects)
projectsRouter.post(
  "/projects/delivery",
  validateSchema(deliverySchema),
  PostDelivery
)

export default projectsRouter
