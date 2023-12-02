import {body, validationResult} from "express-validator"
import {handleValidatorErrorArray} from "../validator.js";

export const userCreationBodyValidator = [
    body('email').isEmail().withMessage('Invalid email'),
    body('name')
        .isString().withMessage('Name must be a string').bail()
        .isLength({min: 3}).withMessage('Name must be at least 3 characters long'),
    ...handleValidatorErrorArray
]