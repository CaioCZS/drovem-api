import { Router } from "express"
import registerRouter from "./register.routes.js"

const router = Router()

router.use(registerRouter)

export default router
