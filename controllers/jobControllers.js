import Job from "../models/jobModels.js";
import {StatusCode} from 'http-status-codes';

import { nanoid } from "nanoid";

let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];

export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(StatusCode.OK).json({jobs});
};

export const createJob = async (req, res) => {
    const job = await Job.create(req.body);
    res.status(StatusCode.CREATED).json({jobs});
  };

export const getJob = async (req, res) => {
    const {id} = req.params;
    const job = await Job.findById(id);

    if(!job) {
        return res.status(404).json({msg: `no job with id ${id}`});
    }

    res.status(StatusCode.OK).json({jobs});
};

export const updateJob = async (req, res) => {
    const {id} = req.params;
    const updateJob = await Job.findByIdAndUpdate(id, req.body, {
        new:true
    });

    if (!updateJob) {
        return res.status(404).json({msg: `no job with id ${id}`});
    }

    res.status(StatusCode.OK).json({msg: 'job modified', job: updateJob});
};

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    const removeJob = await Job.findByIdAndDelete(id);

    if (!removeJob) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    }
    
  
    res.status(StatusCode.OK).json({ msg: 'job deleted', job: removeJob });
};

