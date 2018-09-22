import mongoose from "mongoose";

/**
 * Zila Schema
 */
const ZilaSchema = new mongoose.Schema(
  {},//Pulls the schema from the collection
  { collection: "AllZilaData" }
);

export default mongoose.model("AllZilaData", ZilaSchema);
