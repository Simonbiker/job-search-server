import {StatusCodes} from 'http-status-codes';
import User from '../models/UserModel.js';
import { comparePassword, hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';
import { createJWT } from '../utils/tokenUtils.js';


export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};

export const login = async (req, res) => {
  const user = await User.findOne({email:req.body.email});

  const isValidUser = user && await comparePassword(
    req.body.password, 
    user.password
  )

  if(!isValidUser) throw new UnauthenticatedError('invalid credentials');

  const token = createJWT({userId: user._id, role: user.role});

  res.send({token});
}