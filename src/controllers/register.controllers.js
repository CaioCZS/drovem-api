import { dbRegisterStudent } from "../repository/dbRegisterStudent.js"

export async function registerStudent(req, res) {
  try {
    await dbRegisterStudent(req.body)
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
    res.status(500).send(err.message)
  }
}
