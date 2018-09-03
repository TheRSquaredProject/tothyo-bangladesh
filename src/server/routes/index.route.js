import express from "express";
import zilaRoutes from "./zila/zila.routes";

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

// define api routes
router.use("/zila", zilaRoutes);

export default router;
