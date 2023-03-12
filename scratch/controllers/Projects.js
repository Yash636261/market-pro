const Project = require('../models/Projects');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllProjects = async (req, res) => {

    const project = await Project.find({ createdBy: req.user.userId }).sort('createdAt');

    res.status(StatusCodes.OK).json({ project, count: project.length });
}
const getAProject = async (req, res) => {
    const { user: { userId }, params: { id: ProjectId } } = req;
    const project = await Project.findOne({
        _id: ProjectId, createdBy: userId
    })

    if (!project) {
        throw new NotFoundError(`NO project found with id ${ProjectId}`);
    }
    res.status(StatusCodes.OK).json({ project });
}
const CreateAProject = async (req, res) => {
    req.body.createdBy = req.user.userId;

    const project = await Project.create(req.body);
    res.status(StatusCodes.OK).json({ project });
}
const UpdateAProject = async (req, res) => {
    const {
        body: { rating, projectname, price },
        user: { userId },
        params: { id: ProjectId }
    } = req;


    if (rating == '' || projectname === '' || price == '') {
        throw new BadRequestError('fields cannot be empty');
    }


    const project = await Project.findByIdAndUpdate({ _id: ProjectId, createdBy: userId }, req.body, {
        new: true, runValidators: true
    })
    res.status(StatusCodes.OK).json({ project });

}
const DeleteAProject = async (req, res) => {
    const { user: { userId }, params: { id: ProjectId } } = req;
    const project = await Project.findByIdAndRemove({
        _id: ProjectId,
        createdBy: userId,
    });
    if (!project) {
        throw new NotFoundError('No project with id ${ProjectId}');
    }

    res.status(StatusCodes.OK).send();
}

module.exports = {
    getAllProjects, getAProject, CreateAProject, UpdateAProject, DeleteAProject
}