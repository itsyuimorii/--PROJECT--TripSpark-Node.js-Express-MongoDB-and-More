/**
 * @module       models/userModel
 * @requires     module:crypto
 * @requires     module:mongoose
 * @requires     module:validator
 * @requires     module:bcryptjs
 * @exports      module:userModel
 * @version      1.0.0
 * 
 */
const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  photo: {
    type: String,
    default: 'default.jpg'
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same!'
    }
  },
  //for password reset
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  //for deactivating user, not deleting from db
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});


//----------------**MIDDLEWARE: ENCRYPT PASSWORD**----------------
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

//----------------**MIDDLEWARE: SET PASSWORD CHANGED AT**----------------
userSchema.pre('save', function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password') || this.isNew) return next();
  // Set passwordChangedAt to the current time minus 1 second
  this.passwordChangedAt = Date.now() - 1000;
  next();
});
//----------------**MIDDLEWARE: FILTER OUT INACTIVE USERS**----------------
userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});


//----------------**INSTANCE METHOD: COMPARE PASSWORD**----------------
/**
 * @param {string} candidatePassword 
 * @param {string} userPassword 
 * @returns  {boolean}
 */
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
//----------------**INSTANCE METHOD: CHECK IF PASSWORD CHANGED AFTER JWT ISSUED**----------------
/**
 * @param {number} JWTTimestamp 
 * @returns {boolean}
 */
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    //Convert password change times to timestamps
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // If the JWT timestamp is earlier than the password change timestamp, the password has been changed after the JWT was issued
    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

//----------------**INSTANCE METHOD: CREATE PASSWORD RESET TOKEN**----------------
/**
 * @returns {string} resetToken
 */
userSchema.methods.createPasswordResetToken = function () {
  // Create a random token
  const resetToken = crypto.randomBytes(32).toString('hex');
  // Encrypt the token and store it in the database
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  // Set the token expiration date
  // console.log({ resetToken }, this.passwordResetToken);
  // 10 minutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};


const User = mongoose.model('User', userSchema);
module.exports = User;
