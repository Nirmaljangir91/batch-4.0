import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
      name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone : {
    type : Number 
  },
  passwordHash: {
    type: String,
  },
  accountTypes : {
    type : String,
    enum : ['REGISTERD', 'GUEST'],
    default : 'REGISTERD'
  },
  role : {
    type : String ,
    enum : ['customer' , 'admin'],
    default : 'customer'
  },
  isActive: {
    type: Boolean,
  },
  totalSpend : {
    type : Number 
  },
  totalOrders : {
    type : Number
  },
  loyalPoints : {
    type : Number 
  },
  refreshToken: {
    type: String,
  },
  refreshTokenExpiryTime: {
    type: Date,
  },
  lastlogin: {
    type: Date,
    default : Date.now()
  }
},{ timestamps: true });

// export const User = mongoose.model("User", userSchema);

const User = mongoose.model("User", userSchema)
export default User;