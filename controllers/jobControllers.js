import Job from "../models/jobModels.js";
import {StatusCodes} from 'http-status-codes';

import { nanoid } from "nanoid";

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

export const getAllJobs = async (req, res) => {
    console.log(req.user);
    const jobs = await Job.find({ createdBy: req.user.userId });
    res.status(StatusCodes.OK).json({ jobs });
  };

export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({jobs});
  };

export const getJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json({job});
};

export const updateJob = async (req, res) => {
    const updateJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    });

    res.status(StatusCodes.OK).json({msg: 'job modified', job: updateJob});
};

export const deleteJob = async (req, res) => {
    const removeJob = await Job.findByIdAndDelete(req.params.id);
    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
};

