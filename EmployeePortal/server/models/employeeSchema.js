import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    employeeCode: String,
    department:String,
    designation: String,
    division: String,
    phoneNumber:Number,
    dob:Date,
    email:String,
    password:{
        type: String,
        default: 'Welcome123',
    },
    dependance:Object,
    hobbies :[String],
    otherSkills : [String],
    dietPath:String,  
    disableInd:{
        type: String,
        default: 'N',
    }
});

const employeeDetails = mongoose.model('employeeDetails', employeeSchema);

export default employeeDetails;


