import { StatusCodes } from "http-status-codes";
import User from '../models/UserModel.js';
import Job from "../models/jobModels.js";

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({_id: req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({userWithoutPassword})
}

export const getApplicationStats = async (req, res) => {
    const users = await User.countDocuments();
    const jobs = await Job.countDocuments();
    res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
    const object ={...req.body};
    delete object.password;
    const updatedUser = await User.findByIdAndUpdate(req.user.userId, object);
    res.status(StatusCodes.OK).json({msg:'update user'})
}