import {
  dbGetExperiencesStudent,
  dbGetStudentById,
  dbRegisterStudent,
} from "../repository/dbStudents.js"

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

export async function getStudentsByClass(req, res) {
  res.send("getStudentsByClass")
}

export async function getStudentsById(req, res) {
  const { id } = req.params

  try {
    const { rows: student } = await dbGetStudentById(id)

    if (student.length === 0) {
      return res.sendStatus(404)
    }
    const { rows: experiences } = await dbGetExperiencesStudent(id)

    res.send({ ...student[0], experiences: { ...experiences } })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
