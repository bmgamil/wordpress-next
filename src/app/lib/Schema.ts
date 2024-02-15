import Joi from 'joi';

export const NameFieldSchema = Joi.string().required().min(3).max(15).messages({
  'any.required': 'name field required',
  'string.empty': 'name field required',
  'string.min': 'too short',
  'string.max': 'too long',
});
export const DescriptionFieldSchema = Joi.string()
  .required()
  .min(8)
  .max(50)
  .messages({
    'any.required': 'required',
    'string.empty': 'required',
    'string.min': 'too short',
    'string.max': 'too long',
  });

export const EmailFieldSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.required': 'required',
    'string.empty': 'required',
    'string.email': 'not valid',
  });

export const TelephoneFieldSchema = Joi.string()
  .required()
  .invalid('-')
  .min(11)
  .messages({
    'any.required': 'required',
    'base.empty': 'required',
    'any.invalid': 'invalid phone number',
    'string.min': 'invalid phone number',
  });

export const ContactSchema = Joi.object({
  name: NameFieldSchema,
  email: EmailFieldSchema,
  phone: TelephoneFieldSchema,
  subject: DescriptionFieldSchema,
  comment: DescriptionFieldSchema,
});
