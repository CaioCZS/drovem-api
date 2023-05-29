import { dbGetClasses, dbPostClasses } from "../repository/dbClasses.js"

export async function getClasses(req, res) {
  try {
    const { rows: result } = await dbGetClasses()

    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function postClasses(req, res) {
  try {
    await dbPostClasses(req.body)
    res.sendStatus(201)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
