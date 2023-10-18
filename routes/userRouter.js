import {Router} from 'express';
import { getApplicationStatus, getCurrentUser, updateUser } from '../controllers/userControllers.js';
const router = Router();

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStatus);
router.patch('/update-user', updateUser);

export default router;