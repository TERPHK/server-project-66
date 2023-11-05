
const NorthController = require('./controllers/NorthController')
module.exports = (app) => {
    /* RESFUL Api for users management */

    // //อุทยาน
   

    app.get('/norths', NorthController.index)

    app.post('/north', NorthController.create)

    app.put('/north/:northId', NorthController.put)

    app.delete('/north/:northId', NorthController.remove)

    app.get('/north/:northId', NorthController.show)

}