import { Request, Response, NextFunction } from 'express';
import { TaskModel } from '../models/Task';

export const pagination = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.query);

    const page: string = req.query.page as string;
    const perPage: string = req.query.limit as string;
    const options = {
      page: parseInt(page, 10) || 1,
      limit: parseInt(perPage, 10) || 4,
    };
    const tasks = await TaskModel.paginate({}, options);
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchKw: string = req.query.keyword as string;
    const regex = new RegExp(`.*${searchKw}.*`, 'i'); // 'i' là để tìm kiếm không phân biệt hoa thường

    const tasks = await TaskModel.find({ task: { $regex: regex } }).exec();
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};

export const searchAndPaginate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchKw: string = req.query.keyword as string;
    const regex = new RegExp(`.*${searchKw}.*`, 'i'); // 'i' là để tìm kiếm không phân biệt hoa thường
    const page: string = req.query.page as string;
    const perPage: string = req.query.limit as string;
    const options = {
      page: parseInt(page, 10) || 0,
      limit: parseInt(perPage, 10) || 4,
    };

    const tasks = await TaskModel.find({ task: { $regex: regex } })
      .limit(options.limit)
      .skip(options.limit * options.page)
      .exec();
    return res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
};
