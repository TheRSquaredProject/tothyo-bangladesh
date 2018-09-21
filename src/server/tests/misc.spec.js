import request from "supertest";
import httpStatus from "http-status";
import app from "../../index";
import logger from "morgan";

describe("## Misc", () => {
  describe("# GET /api/health-check", () => {
    it("should return OK", () => {
      return request(app)
        .get("/api/health-check")
        .expect(httpStatus.OK)
        .then(response => {
          expect(response.text).toEqual("OK");
        });
    });
  });

  describe("# GET /api/404", () => {
    it("should return 404 status", () => {
      return request(app)
        .get("/api/404")
        .expect(httpStatus.NOT_FOUND)
        .then(res => {
          expect(res.body.message).toBe("Not Found");
        });
    });
  });
});
