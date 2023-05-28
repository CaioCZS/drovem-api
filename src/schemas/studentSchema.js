import joi from "joi"

export const studentSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  cpf: joi.string().regex(/^\d+$/).length(11).required(),
  picture: joi.string().uri().required(),
  classId: joi.number().integer().required(),
  startDate: joi.date().required(),
})
