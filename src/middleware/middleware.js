import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import {mainRouter} from "../router/router.js";
import statusResponse from "../common/constant/status-response.js";

const setHeader = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization,Origin, X-Requested-With, Content-Type, Accept"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
};

export const middleware = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(helmet());
    app.use((req, res, next) => {
        setHeader(req, res, next);
    });

    app.use("/v1", (req, res, next) => {
        mainRouter(req, res, next)
    });

    app.use((req, res, next) => {
        return res.status(statusResponse.NOT_FOUND).send({ error: "not found" });
    });

    app.use((err, req, res, next) =>{
        console.error(err);
        return res.status(statusResponse.STATUS_SERVER_ERROR).send({
            error: "Server Crash",
        });
    });
};