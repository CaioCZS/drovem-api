import joi from "joi"

export const classesSchema = joi.object({
  name: joi.string().required(),
  startDate: joi.date().required(),
  endDate: joi.date().required(),
})
