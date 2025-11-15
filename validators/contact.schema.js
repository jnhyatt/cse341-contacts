import Joi from "joi";

const contactSchema = Joi.object({
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
    email: Joi.string().email().required(),
    favoriteColor: Joi.string().optional(),
    birthday: Joi.date().optional(),
});

export default contactSchema;
