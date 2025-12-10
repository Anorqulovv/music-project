import Joi from "joi";

class AlbomValidator{
    create(data){
        const albom = Joi.object({
            name: Joi.string().max(50).required(),
            artist: Joi.string().optional() 
        });
        return albom.validate(data);
    }

    update(data){
        const albom = Joi.object({
            name: Joi.string().max(50).optional(),
            artist: Joi.string().optional() 
        });
        return albom.validate(data);
    }
}

export default new AlbomValidator();