const sequelize = require('sequelize');
const { Course } = require('../models')

//CREATE, READ, UPDATE, DELETE

module.exports = {
    async index(req, res){
        try{
            const courses = await Course.findAll({});
            res.status(200).send({
                message: courses
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Pri snahe zobrazit kurzy nastala chyba, Skuste to znova neskor."
            })
        }
    },

    async post(req, res){
        try{
            const NewCourses = await Course.create(req.body);
            res.status(201).send({
                message: NewCourses
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Pri snahe vytvorit kurz nastala chyba, Skuste to znova neskor."
            })
        }
    },

    async put(req, res){
        try{
            const UpdateCourse = await Course.update({
                name: req.body.name,
                description: req.body.description,
                duration: req.body.duration
            },
                {returning: true, where: {id: req.body.id}}
        );

            if(!UpdateCourse){
                return res.status(404).send({
                    error: "Kurz so zadanym ID sa nenasiel."
                })
            }

            res.status(200).send({
                message: "Kurz bol upspesne aktualizovany."
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Pri snahe aktualizovat kurz nastala chyba, Skuste to znova neskor."
            })
        }
    },

    async delete(req, res){
        try{
            const DeleteCourses = await Course.destroy({
                where: {
                    id: req.body.id
                }
            });

            if(!DeleteCourses){
                return res.status(404).send({
                    error: "Kurz sa nenasiel."
                })
            }
            res.status(200).send({
                message: "Kurz bol uspesne odstraneny"
            })
        }
        catch (err) {
            console.log(err);
            res.status(500).send({
                error: "Pri snahe zobrazit kurzy nastala chyba, Skuste to znova neskor."
            })
        }
    },
}
