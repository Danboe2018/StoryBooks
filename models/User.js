const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

// Create Schema
const UserSchema = new Scheme({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  image: {
    type: String
  }
});

// Create collection and add schema
mongoose.model('users', UserSchema);