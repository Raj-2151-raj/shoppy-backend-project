import express from 'express';
import { register, login , getAllUsers, } from '../controllers/authController.js';

const router = express.Router();


router.post('/users/register', register);
router.post('/user/login', login);
router.get('/users', getAllUsers);



export default router;