import mongoose from 'mongoose';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../index';
import { isArray } from 'util';

afterAll(done => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092;
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
  });

  describe("Upazila Controller tests", () => {
        describe("/api/upazila", () => {
            it("should return an array of results of length 544", () => {
                const NUM_OF_UPAZILAS = 544;
                return request(app)
                    .get(`/api/upazila`)
                    .expect(httpStatus.OK)
                    .then(res => {
                        let result = res.body;
                        expect(isArray(result)).toBe(true);
                        expect(result.length).toBe(NUM_OF_UPAZILAS);
                    });
            }, 20000);
        });

        describe("/api/upazila/:upazilaName" ,() => {
            it("should return info about the upazila inquired" , () => {
                let upazilaName = "BHANDARIA";
                return request(app)
                    .get(`/api/upazila/${upazilaName}`)
                    .expect(httpStatus.OK)
                    .then(res => {
                        let returnedUpazilaName = res.body.location_data.upazila;
                        expect(returnedUpazilaName).toBe(upazilaName);
                    });
            });

            it("should return a 404 error if upazila not found", () => {    
                return request(app)
                    .get(`/api/upazila/gotham`)
                    .then(res => {
                        expect(res.body.status).toBe(404);
                    });
            });
        });
  });
  