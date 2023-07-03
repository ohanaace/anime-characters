import joi from "joi";

const updateSchema = joi.object({
    name: joi.string(),
    anime: joi.string(),
    role: joi.string(),
    status: joi.string().valid('ALIVE', 'DECEASED')
});

export default updateSchema;