import mongoose from 'mongoose';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../index';
import upazila from "../models/upazila.model";
import { isArray } from 'util';

afterAll(done => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092;
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
  });

  const url = "localhost:4040";

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
            });
        });

        describe("/api/upazila/:upazilaName" ,() => {
            it("should return info about the upazila inquired" , () => {
                let upazilaName = "DHAKA";
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
  