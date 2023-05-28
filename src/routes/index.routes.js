import { Router } from "express"
import studentsRouter from "./students.routes.js"
import classesRouter from "./classes.routes.js"

const router = Router()

router.use(studentsRouter)
router.use(classesRouter)

export default router
