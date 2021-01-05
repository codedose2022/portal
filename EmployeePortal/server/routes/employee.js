import express from 'express';

import {getEmployees,createEmployee,login,getProfile,editProfile} from '../controllers/employee.js';

const router = express.Router();


router.get('/getDetails',getEmployees);
router.post('/createEmployee',createEmployee);
router.post('/login',login);
router.post('/profile',getProfile);
router.post('/editProfile',editProfile);



export default router;