"use strict";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import { json, urlencoded } from "body-parser";
import errorHandler from "./src/middlewares/errorHandler";
import {stream} from "./src/utils/logger";

dotenv.config();

const app = express();

app.use(morgan("combined", {stream}));
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(helmet({
	dnsPrefetchControl: true,
	frameguard: true,
	hidePoweredBy: true,
	hsts: true,
	ieNoOpen: true,
	noSniff: true,
	xssFilter: true
}));

app.get("/", (_req, res): void => {
	res.status(200).json({ message: "Hello world" });
});

app.use(errorHandler);

app.listen(process.env.PORT, (): void => {
	console.log("The system is run on port", process.env.PORT);
});

export default app;