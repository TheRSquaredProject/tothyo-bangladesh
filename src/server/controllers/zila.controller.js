import Zila from "../models/zila.model";
import APIError from "../helpers/APIError";
import httpStatus from "http-status";

/**
 * Get Zila info by name
 * @returns {} JS Object containing information about the zila
 */
function getZilaInfoByName(req, res) {
  const zilaName = req.params.zilaName.toUpperCase();
  Zila.findOne({ zila_name: zilaName })
    .lean()
    .exec()
    .then(result => {
      if (result) {
        return res.json(result);
      } else {
        const error = new APIError(
          "No such zila exists!",
          httpStatus.NOT_FOUND
        );
        return res.json(error);
      }
    })
    .catch();
}

/**
 * Get info about all zilas
 * @returns {} JS Object containing information about all the zila
 */
function getAllZilas(req, res) {
  Zila.find()
    .lean()
    .exec()
    .then(result => {
    if (result) {
      res.json(result);
    } else {
      const error = new APIError("No info available about zilas!", httpStatus.NOT_FOUND);
      return res.json(error);
    }
    })
    .catch();
}

export default { getZilaInfoByName, getAllZilas };
