import { db } from "../database/db.connection.js"

export function dbRegisterStudent(body) {
  const { name, cpf, email, picture } = body

  return db.query(
    `INSERT INTO students (name,cpf,email,picture) VALUES ($1,$2,$3,$4)`,
    [name, cpf, email, picture]
  )
}

export function dbAddStudentToClass(id, classId, startDate) {
  return db.query(
    `INSERT INTO experiences ("studentId","classId","startDate") VALUES ($1,$2,$3)`,
    [id, classId, startDate]
  )
}

export function dbGetStudentByCpf(cpf) {
  return db.query(`SELECT * FROM students WHERE cpf=$1;`, [cpf])
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
    `SELECT experiences.*,students.name,students.picture FROM experiences 
  JOIN students ON students.id = experiences."studentId"
  WHERE experiences."classId" =$1 AND experiences."endDate" is null
  ;`,
    [id]
  )
}

export function dbEditStudent(body, id) {
  const { name, email, cpf, picture } = body

  return db.query(
    `
  UPDATE students SET name=$1,cpf=$2,email=$3,picture=$4
    WHERE id=$5;
  `,
    [name, cpf, email, picture, id]
  )
}
