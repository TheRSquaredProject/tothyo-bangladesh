import express from "express";
import UpazilaCtrl from "../../controllers/upazila.controller"

const router = express.Router(); // eslint-disable-line new-cap

router
	.route("/")
	.get(UpazilaCtrl.getAllUpazilas);

router
  .route("/:UpazilaName")
  /** GET /api/zila/:zilaName - Get Zila information */
  .get(UpazilaCtrl.getUpazilaInfoByName);


export default router;
