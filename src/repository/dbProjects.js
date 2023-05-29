import { db } from "../database/db.connection.js"

export function dbAddProject(name) {
  return db.query(`INSERT INTO projects (name) VALUES ($1)`, [name])
}

export function dbGetProjects() {
  return db.query(`SELECT * FROM projects`)
}
