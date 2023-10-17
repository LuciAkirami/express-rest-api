import mongoose from 'mongoose';
let University_schema=mongoose.Schema({
    id:{
        unique:true
    },
    name:{
      type:String,
      unique:true,
      require:true
    },
    location:{
        city:{
            type:String, 
            require:true
        },
        country:{
            type:String, 
            require:true
        },
    },
    programs:[
        {
            type:String
        }
    ]
  });

const university_modal = new mongoose.model('Univerties',University_schema);
export default university_modal;