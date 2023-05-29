import { db } from "../database/db.connection.js"

export function dbGetClasses() {
  const classes = db.query(`SELECT * FROM classes`)
  return classes
}

export function dbPostClasses(body) {
  const { name, startDate, endDate } = body
  return db.query(
    `INSERT INTO classes (name,"startDate","endDate") VALUES ($1,$2,$3)`,
    [name, startDate, endDate]
  )
}
