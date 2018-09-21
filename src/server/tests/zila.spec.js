import mongoose from 'mongoose';
import request from 'supertest';
import httpStatus from 'http-status';
import app from '../../index';
import Zila from "../models/zila.model";
import { isArray } from 'util';

afterAll(done => {
    // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092;
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
  });

  const url = "localhost:4040";

  describe("Zila Controller tests", () => {
        describe("/api/zila", () => {
            it("should return an array of results of length 64", () => {
                const NUM_OF_ZILAS = 64;
                return request(app)
                    .get(`/api/zila`)
                    .expect(httpStatus.OK)
                    .then(res => {
                        let result = res.body;
                        expect(isArray(result)).toBe(true);
                        expect(result.length).toBe(NUM_OF_ZILAS);
                    });
            });
        });

        describe("/api/zila/:zilaName" ,() => {
            it("should return info about the zila inquired" , () => {
                let zilaName = "DHAKA";
                return request(app)
                    .get(`/api/zila/${zilaName}`)
                    .expect(httpStatus.OK)
                    .then(res => {
                        let returnedZilaName = res.body.location_data.zila;
                        expect(returnedZilaName).toBe(zilaName);
                    });
            });

            it("should return a 404 error if zila not found", () => {
                return request(app)
                    .get(`/api/zila/gotham`)
                    .then(res => {
                        expect(res.body.status).toBe(404);
                    });
            });
        });
  });
