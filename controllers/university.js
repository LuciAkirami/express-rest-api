import university_modal from '../modals/university.js';


async function getUniversities(req,res){
    try {
        let data = await university_modal.find();
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`eeror:${error.message}`);
      }
}

async function getUniversityBycity(req,res){
    try {
        let { city } = req.body;
        let data = await university_modal.findOne({city});
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`eeror:${error.message}`);
      }
}


async function createUniversity(req,res){
    try {
      let data = await university_modal.create(req.body);
        console.log("data inserted");
        res.end();
      } catch (error) {
        console.log("error:", error.message);
        res.send(`eeror:${error.message}`);
      }
}

async function updateUniversity(req,res){
    try {
        let { _id } = req.params;
        let data = await university_modal.updateOne({ _id }, { $set: req.body });
        res.end();
      } catch (error) {
        console.log("error:", error.message);
        res.send(`eeror:${error.message}`);
      }
}
  

async function deleteUniversity(req,res){
    try {
        let { _id } = req.params;
        let data2 = await university_modal.deleteOne({ _id }, { $set: req.body });
        res.end();
      } catch (error) {
        console.log("error:", error.message);
        res.send(`eeror:${error.message}`);
      }
}
  
export {getUniversities,getUniversityBycity,createUniversity,updateUniversity,deleteUniversity};
