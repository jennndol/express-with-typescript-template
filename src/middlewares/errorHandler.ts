"use strict";

import logger from "../utils/logger";

const errorHandler = (err: any, _req: any, res: any, done: any): void => {
	logger.error(err.stack);
	res.status(500).json({
		message: "Something broke!"
	});
	done();
};

export default errorHandler;