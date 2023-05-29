import { db } from "../database/db.connection.js"

export function dbAddProject(name) {
  return db.query(`INSERT INTO projects (name) VALUES ($1)`, [name])
}

export function dbGetProjects() {
  return db.query(`SELECT * FROM projects`)
}

export function dbPostDelivery(body) {
  const { projectId, studentId, classId, projectLink } = body
  return db.query(
    `INSERT INTO "projectsExperiences" ("projectId","studentId","classId","projectLink")
  VALUES ($1,$2,$3,$4)
  `,
    [projectId, studentId, classId, projectLink]
  )
}
