import Joi from 'joi';

export const NameFieldSchema = Joi.string().required();
export const DescriptionFieldSchema = Joi.string().required();

export const EmailFieldSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.required': 'required',
    'string.empty': 'required',
    'string.email': 'not valid',
  });

export const TelephoneFieldSchema = Joi.string()
  .pattern(/^[0-9]+$/)
  .length(11)
  .required()
  .messages({
    'string.pattern.base': 'invalid phone number',
    'string.length': 'invalid phone number',
    'any.required': 'required',
  });

export const ContactSchema = Joi.object({
  name: NameFieldSchema,
  email: EmailFieldSchema,
  phone: TelephoneFieldSchema,
  subject: DescriptionFieldSchema,
  comment: DescriptionFieldSchema,
});
