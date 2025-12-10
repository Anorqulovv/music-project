import Joi from "joi";

class MusicValidator{
    create(data){
        const music = Joi.object({
            title: Joi.string().max(50).required(),
            artist: Joi.string().optional(),
            url: Joi.string().required(),
            albom: Joi.string().required() 
        });
        return music.validate(data);
    }

    update(data){
        const music = Joi.object({
            title: Joi.string().max(50).optional(),
            artist: Joi.string().optional(),
            url: Joi.string().optional(),
            albom: Joi.string().optional()  
        });
        return music.validate(data);
    }
}

export default new MusicValidator();