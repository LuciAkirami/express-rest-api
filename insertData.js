// Run this file to insert Sample Data
import university_modal from "./modals/university.js";
import data from "./data.js";
import connect_db from "./utils/connect_db.js";

connect_db();

// Insert Data into the Database
university_modal
  .insertMany(data)
  .then(() => {
    console.log("Student data inserted");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
    process.exit(1);
  });
