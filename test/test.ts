"use strict";
import { assert, request, use } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

use(chaiHttp);

describe("Testing", () => {
	it("should return true", (done) => {
		assert.equal(1, 1);
		done();
	});

	it("should get Hello world message", () => {
		request(app)
			.get("/")
			.end((e, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.message, "Hello world");
			});
	});
});
