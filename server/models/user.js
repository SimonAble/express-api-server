var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   title: { type: String, required : true, minlength: [3, "Please enter a name of 3 characters or more."]},
   description: { type: String, required : true, minlength: [3, "Please enter a name of 3 characters or more."]},
   completed:{type:Boolean}
   },{timestamps: true})
   
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'