import { db } from "../database/db.connection.js"

export function dbGetClasses() {
  const classes = db.query(`SELECT * FROM classes`)
  return classes
}
