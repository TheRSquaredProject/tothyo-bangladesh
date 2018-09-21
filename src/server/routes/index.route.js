import express from "express";
import zilaRoutes from "./zila/zila.routes";
import upazilaRoutes from "./upazila/upazila.routes";

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// define api routes
router.use("/zila", zilaRoutes);
router.use("/upazila", upazilaRoutes);

export default router;
