import { dbGetClasses } from "../repository/dbClasses.js"

export async function getClasses(req, res) {
  try {
    const { rows: result } = await dbGetClasses()

    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}
