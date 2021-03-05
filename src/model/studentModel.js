const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
  mssv :String,
  name :String,
  age:Number,
  email:String,
  sdt : String
});
const studentModel = mongoose.model('studentModel', studentSchema);
// studentModel.create({
//   mssv :"17020777",
//   name :"Hoang",
//   age:23,
//   email :"17020777@vnu.edu.vn",
//   sdt:"456"
// }).then(data=>{
//   console.log(data)
// })
module.exports = studentModel