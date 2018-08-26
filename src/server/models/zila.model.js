import mongoose from "mongoose";

/**
 * Zila Schema
 */
const ZilaSchema = new mongoose.Schema(
  {},//Pulls the schema from the collection
  { collection: "zila_data" }
);

export default mongoose.model("zila_data", ZilaSchema);
