import { db } from "../database/db.connection.js"

export async function registerStudent(req, res) {
  const { name, cpf, email, picture } = req.body

  try {
    await db.query(
      `INSERT INTO students (name,cpf,email,picture) VALUES ($1,$2,$3,$4)`,
      [name, cpf, email, picture]
    )
    res.sendStatus(201)
  } catch (err) {
    if (err.code === "23505") {
      if (err.constraint === "students_cpf_key") {
        return res.status(409).send("CPF já cadastrado")
      }

      if (err.constraint === "students_email_key") {
        return res.status(409).send("E-mail já cadastrado")
      }
    }
    res.status(500).send(err)
  }
}
