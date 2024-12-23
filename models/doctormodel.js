import mongoose from "mongoose"

mongoose.connect('mongodb://localhost:27017/doctor_appointment') // connection of dbms

// -------------------- Schema for User Table --------------------//
const doctor_table = new mongoose.Schema({
    name: String,
    pass: String,
    doc_name: String,
    exp: String,
    about: String,
    speciality: String
});

export default mongoose.model("doctor", doctor_table);

