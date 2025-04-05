import 'dotenv/config'
import express from 'express';
import routes from "./src/routes/routes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";


const app = express();
const port = process.env.PORT;

// mongo setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/crbd', {
    useNewUrlParser: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

routes(app);
