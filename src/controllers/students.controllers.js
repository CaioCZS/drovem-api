import {
  dbGetExperiencesStudent,
  dbGetStudentById,
  dbGetStudentsByClass,
  dbRegisterStudent,
  dbGetStudentByCpf,
  dbAddStudentToClass,
} from "../repository/dbStudents.js"

export async function registerStudent(req, res) {
  const { cpf, classId } = req.body

  try {
    await dbRegisterStudent(req.body)
    const { rows: student } = await dbGetStudentByCpf(cpf)

    await dbAddStudentToClass(student[0].id, classId)
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
  const { classId } = req.params

  try {
    const { rows: result } = await dbGetStudentsByClass(classId)
    if (result.length === 0) {
      return res.status(404).send("Turma não encontrada")
    }
    res.send(result)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

export async function getStudentsById(req, res) {
  const { id } = req.params

  try {
    const { rows: student } = await dbGetStudentById(id)

    if (student.length === 0) {
      return res.send(404).send("Aluno não encontrado")
    }
    const { rows: experiences } = await dbGetExperiencesStudent(id)

    res.send({ ...student[0], experiences: { ...experiences } })
  } catch (err) {
    res.status(500).send(err.message)
  }
}
