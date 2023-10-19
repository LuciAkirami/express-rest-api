import university_modal from '../modals/university';

//to fetch the data of all universtities.
//route: public
async function getUniversities(req,res){
    try {
        let data = await university_modal.find();
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
//to fetch the data of universtities available in specific city.
//route: public
async function getUnivercityByCity(req,res){
    try {
        let { city } = req.body;
        let data = await university_modal.find({city});
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
//to fetch the data of specific universtity.
//route: public
async function getUnivercityByName(req,res){
    try {
        let { name } = req.body;
        let data = await university_modal.find({name});
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
//to add university in db.
//route: public currently. can be done private by adding validations later on.
async function createUniversity(req,res){
    try {
      let data = await university_modal.create(req.body);
        console.log("data inserted");
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
//to update specific university in db.
//route: public currently. can be done private by adding validations later on.
async function updateUniversity(req,res){
    try {
        let { _id } = req.params;
        let data = await university_modal.updateOne({ _id }, { $set: req.body });
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
  
//to delete specific university in db.
//route: public currently. can be done private by adding validations later on.
async function deleteUniversity(req,res){
    try {
        let { _id } = req.params;
        let data = await university_modal.deleteOne({ _id }, { $set: req.body });
        res.send(data);
      } catch (error) {
        console.log("error:", error.message);
        res.send(`error:${error.message}`);
      }
}
  
export {getUniversities,getUnivercity,createUniversity,updateUniversity,deleteUniversity};
