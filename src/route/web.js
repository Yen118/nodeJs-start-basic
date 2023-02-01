import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/detail/user/:userId', homeController.getDetailPage);

    router.post('/create-new-user', homeController.createNewUser);

    router.post('/delete-user', homeController.deleteUser);

    router.get('/edit-user/:userId', homeController.editUser);

    router.post('/update-user', homeController.postUpdateUser);

    router.get('/about', (req, res) => {
        res.send(`I am Yen`)
    })

    return app.use('/', router)
    
}


export default initWebRoute;