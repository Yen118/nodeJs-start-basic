import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
//import connection from './configs/connectDB';
require ('dotenv').config();



const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//setup view engine
configViewEngine(app);

//set up web route
initWebRoute(app);

// set up api route
initAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})