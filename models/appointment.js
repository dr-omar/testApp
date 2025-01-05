import mongoose from "mongoose"

//mongoose.connect('mongodb://localhost:27017/doctor_appointment') // connection of dbms
mongoose.connect('mongodb+srv://omar:1234@cluster0.2llmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/doctor_appointment')

// -------------------- Schema for User Table --------------------//
const appointment_table = new mongoose.Schema({
    pname: String,
    dname: String,
    age: String,
    disease: String,
    Phone: String,
    pat_id: String,
    doc_id: String,
    spec: String,
    status: String,
});

export default mongoose.model("appointment", appointment_table);

