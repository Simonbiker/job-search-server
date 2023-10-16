import Job from "../models/jobModels.js";
import {StatusCodes} from 'http-status-codes';
import { NotFoundError } from "../errors/customErrors.js";

import { nanoid } from "nanoid";

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(StatusCodes.OK).json({jobs});
};

export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({jobs});
  };

export const getJob = async (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id);

    if (!job) throw new NotFoundError(`no job with id : ${id}`);

    res.status(StatusCodes.OK).json({jobs});
};

export const updateJob = async (req, res) => {
    const {id} = req.params;
    const updateJob = await Job.findByIdAndUpdate(id, req.body, {
        new:true
    });

    if (!updateJob) throw new NotFoundError(`no job with id : ${id}`);

    res.status(StatusCodes.OK).json({msg: 'job modified', job: updateJob});
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removeJob = await Job.findByIdAndDelete(id);

    if (!removeJob) throw new NotFoundError(`no job with id : ${id}`);
    
  
    res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removeJob });
};

