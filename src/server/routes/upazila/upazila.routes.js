<<<<<<< HEAD
import express from "express";
import UpazilaCtrl from "../../controllers/upazila.controller"

const router = express.Router(); // eslint-disable-line new-cap

router
	.route("/")
	/** GET /api/upazila - Get info about all Upazilas */
	.get(UpazilaCtrl.getAllUpazilas);

router
  .route("/:upazilaName")
  /** GET /api/upazila/:upazilaName - Get specific Upazila information */
  .get(UpazilaCtrl.getUpazilaInfoByName);


export default router;
