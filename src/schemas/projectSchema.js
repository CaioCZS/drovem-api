import joi from "joi"

export const projectSchema = joi.object({
  name: joi.string().required(),
})

export const deliverySchema = joi.object({
  projectId: joi.number().integer().required(),
  studentId: joi.number().integer().required(),
  classId: joi.number().integer().required(),
  projectLink: joi.string().uri().required(),
})
