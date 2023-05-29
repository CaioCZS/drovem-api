import { dbAddProject } from "../repository/dbProjects.js"

export async function PostProject(req, res) {
  const { name } = req.body

  try {
    await dbAddProject(name)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
