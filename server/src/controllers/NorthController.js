const { North } = require('../models')


module.exports = {
    //get all user
    async index(req, res) {
        try {
            const norths = await North.findAll()
            res.send(norths)
        } catch (err) {
            res.status(500).send({
                error: 'information was incorrect'
            })
        }
    },

    // create user
    async create(req, res) {
        try {
            const north = await North.create(req.body)
            res.send(north.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create incorrect'
            })
        }
    },

    // edit user, suspend, active
    async put(req, res) {
        try {
            await North.update(req.body, {
                where: {
                    id: req.params.northId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update incorrect'
            })
        }
    },

    // delete 
    async remove(req, res) {
        try {
            const north = await North.findOne({
                where: {
                    id: req.params.northId
                }
            })
            if (!north) {
                return res.status(403).send({
                    error: 'The information was incorrect'
                })
            }
            await north.destroy()
            res.send(north)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },

    // get user by id
    async show(req, res) {
        try {
            const north = await North.findByPk(req.params.northId)
            res.send(north)
        } catch (err) {
            res.status(500).send({
                error: 'The information was incorrect'
            })
        }
    },
}