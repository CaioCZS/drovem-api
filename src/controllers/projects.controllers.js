import { dbAddProject, dbGetProjects } from "../repository/dbProjects.js"

export async function PostProject(req, res) {
  const { name } = req.body

  try {
    await dbAddProject(name)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function GetProjects(req, res) {
  try {
    const { rows: result } = await dbGetProjects()

    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
