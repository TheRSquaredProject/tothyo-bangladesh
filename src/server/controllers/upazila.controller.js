import Upazila from "../models/upazila.model";
import APIError from "../helpers/APIError";
import httpStatus from "http-status";

/**
 * Get Upazila info by name
 * @returns {} JS Object containing information about the Upazila
 */
function getUpazilaInfoByName(req, res) {
  const UpazilaName = req.params.UpazilaName.toUpperCase();
  Upazila.findOne({ 'location_data.upazila': UpazilaName })
    .lean()
    .exec()
    .then(result => {
      if (result) {
        return res.json(result);
      } else {
        const error = new APIError(
          "No such Upazila exists!",
          httpStatus.NOT_FOUND
        );
        return res.json(error);
      }
    })
    .catch();
}

/**
 * Get info about all Upazilas
 * @returns {} JS Object containing information about all the Upazila
 */
function getAllUpazilas(req, res) {
  Upazila.find()
    .lean()
    .exec()
    .then(result => {
    if (result) {
      res.json(result);
    } else {
      const error = new APIError("No info available about Upazilas!", httpStatus.NOT_FOUND);
      return res.json(error);
    }
    })
    .catch();
}

export default { getUpazilaInfoByName, getAllUpazilas };
