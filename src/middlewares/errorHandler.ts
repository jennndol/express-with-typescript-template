'use strict';
import logger from '../utils/logger';

const errorHandler = (err: any, req: any, res: any, done: any) => {
    logger.error(err.stack)
    res.status(500).json({
        message: 'Something broke!'
    });
    done();
}

export default errorHandler;