import {Router} from 'express';
import { getApplicationStatus, getCurrentUser, updateUser } from '../controllers/userControllers.js';
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js';
const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStatus);
router.patch('/update-user', validateUpdateUserInput, updateUser);

export default router;