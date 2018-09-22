import mongoose from "mongoose";

/**
 * Upazila Schema
 */
const UpazilaSchema = new mongoose.Schema(
  {},//Pulls the schema from the collection
  { collection: "AllUpazilaData" }
);

export default mongoose.model("AllUpazilaData", UpazilaSchema);
