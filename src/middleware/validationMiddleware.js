import { body, validationResult } from 'express-validator';

export const addSchoolValidation = [

    body('name').isString().notEmpty().withMessage('Name is required and must be a valid string'),
    body('address').isString().notEmpty().withMessage('Address is required and must be a valid string address'),
    body('latitude').isFloat({min: -90, max: 90}).withMessage('Latitude must be a float between -90 and 90'),
    body('longitude').isFloat({min: -180, max: 180}).withMessage('longitude must be a float between -180 and 180'),

    async (req, res, next) => {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()){
            return res.status(400).json({
                errors: validationErrors.array()
            })
        }
        next();
    }
]