import { db } from "../database/db.connection.js"

export function dbRegisterStudent(body) {
  const { name, cpf, email, picture } = body

  return db.query(
    `INSERT INTO students (name,cpf,email,picture) VALUES ($1,$2,$3,$4)`,
    [name, cpf, email, picture]
  )
}
