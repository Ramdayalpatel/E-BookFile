import express from "express";
import routes from "./routes/index";
import bodyParser from "body-parser";

let app = express()

app.use(bodyParser.json())

app.use(routes)


app.listen(8080, () => {
    console.log('server');
})