const express=require('express');
const router=express.Router();
const {
    getAllProjects,getAProject,CreateAProject,UpdateAProject,DeleteAProject
}=require('../controllers/Projects');

router.route('/').get(getAllProjects).post(CreateAProject);
router.route('/:id').get(getAProject).patch(UpdateAProject).delete(DeleteAProject);
module.exports=router;