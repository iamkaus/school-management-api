import { Router } from "express";
import { addSchool, listSchools } from "../controller/schoolController.js";
import { addSchoolValidation } from "../middleware/validationMiddleware.js";

const schoolRouter = Router();

schoolRouter.post('/addSchool', addSchoolValidation, addSchool);
schoolRouter.get('/listSchools', listSchools);

export default schoolRouter;