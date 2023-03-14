const express = require('express');
const router = express.Router();
const {
  authenticateUser,
  authorizePermissions,
} = require('../middleware/authentication');

const {createProject}=require('../controllers/Projectcontroller');

router.route('/').post(createProject);