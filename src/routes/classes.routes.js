import { Router } from "express"
import { getClasses } from "../controllers/classes.controllers.js"

const classesRouter = Router()

classesRouter.get("/classes", getClasses)

export default classesRouter
