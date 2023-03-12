
// const User = require('../models/User');
// const { StatusCodes } = require('http-status-codes');
// const { BadRequestError } = require('../errors');
// const { UnauthenticatedError } = require('../errors');

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         throw new BadRequestError('please provide email and password');


//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//         throw new UnauthenticatedError('invalid credenetials');
//     }
//     const isPasswordCorrect = await user.comparePassword(password);
//     if (!isPasswordCorrect) {
//         throw new UnauthenticatedError('invalid credenetials');
//     }

//     const token = user.createJWT();
//     res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
// }
// const register = async (req, res) => {
//     const user = await User.create({ ...req.body });
//     const token = user.createJWT();

//     res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });

// }
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const { UnauthenticatedError } = require('../errors');
const { ForbiddenError } = require('../errors');

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('please provide email and password');
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError('invalid credentials');
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('invalid credentials');
    }

    const token = user.createJWT();
    res.cookie("jwtoken",token,{
        expires:new Date(Data.now()+25892000000),
        httpOnly:true});
    res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const logout = async (req, res) => {
    const { user } = req;
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        throw new UnauthenticatedErro('Invalid authorization header');
    }

    const token = authorization.split(' ')[1];

    if (user) {
        user.blacklistToken(token);
      }

    res.status(StatusCodes.OK).json({ message: 'Logout successful' });
};

module.exports = { login, register, logout };

