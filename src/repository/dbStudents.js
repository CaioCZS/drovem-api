import { db } from "../database/db.connection.js"

export function dbRegisterStudent(body) {
  const { name, cpf, email, picture } = body

  return db.query(
    `INSERT INTO students (name,cpf,email,picture) VALUES ($1,$2,$3,$4)`,
    [name, cpf, email, picture]
  )
}

export function dbGetStudentById(id) {
  return db.query(`SELECT * FROM students WHERE id=$1;`, [id])
}

export function dbGetExperiencesStudent(id) {
  return db.query(
    `SELECT experiences.*,classes.name AS "className" FROM experiences
  JOIN classes ON classes.id = experiences."classId"
  WHERE experiences."studentId" =$1
  ;`,
    [id]
  )
}

export function dbGetStudentsByClass(id) {
  return db.query(
    `SELECT experiences.*,students.name FROM experiences 
  JOIN students ON students.id = experiences."studentId"
  WHERE experiences."classId" =$1 AND experiences."endDate" is null
  ;`,
    [id]
  )
}
