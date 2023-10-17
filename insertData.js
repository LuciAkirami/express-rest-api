//function to insert data from sample data file
import university_modal from './modals/university.js';
import data from './data.js';
connect_db(); //enter your url in this file
const insertData = ()=> {
    university_modal.insertMany(data).then(()=>
    console.log("student data enserted"));
}
export default insertData;
