import joi from "joi";

const creationSchema = joi.object({
    name: joi.string().required(),
    anime: joi.string().required(),
    role: joi.string().required(),
    status: joi.string().valid('ALIVE', 'DECEASED').required()
});

export default creationSchema;