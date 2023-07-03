import httpStatus from "http-status";
import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.type === 'NotFoundError') return res.status(httpStatus.NOT_FOUND).send(err.message);
    if(err.type === 'NoMatchingError') return res.status(httpStatus.BAD_REQUEST).send(err.message);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: 'An unexpected error happened'});
};

export default errorHandler;