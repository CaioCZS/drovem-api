import joi from "joi"

export const projectSchema = joi.object({
  name: joi.string().required(),
})
