import express from "express";
import ZilaCtrl from "../../controllers/zila.controller";

const router = express.Router(); // eslint-disable-line new-cap

router
  .route("/")
  /** GET /api/zila - Get information about all Zilas */
  .get(ZilaCtrl.getAllZilas);

router
  .route("/:zilaName")
  /** GET /api/zila/:zilaName - Get Zila information */
  .get(ZilaCtrl.getZilaInfoByName);

export default router;
