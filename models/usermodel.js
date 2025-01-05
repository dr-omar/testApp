import mongoose from "mongoose"

//mongoose.connect('mongodb://localhost:27017/doctor_appointment') // connection of dbms
mongoose.connect('mongodb+srv://omar:1234@cluster0.2llmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/doctor_appointment');

// -------------------- Schema for User Table --------------------//
const user_table = new mongoose.Schema({
    name: String,
    pass: String
});

export default mongoose.model("user", user_table);

