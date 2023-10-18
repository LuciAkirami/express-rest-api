import mongoose from "mongoose";
let University_schema = mongoose.Schema({
  id: {
    type:String
  },
  name: {
    type: String
  },
  location: {
    city: {
      type: String,
    },
    country: {
      type: String,
    },
  },
  programs: [String],
});

const university_modal = new mongoose.model("Universties", University_schema);
export default university_modal;
