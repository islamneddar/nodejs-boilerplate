import {validationResult} from "express-validator";
import statusResponse from "../common/constant/status-response.js";

export const handleValidatorErrorArray = [
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(statusResponse.STATUS_UNPROCESSABLE_ENTITY).json({ errors: errors.array().map((error => ({
                    message: error.msg,
                }))) });
        }
        next();
    },
]