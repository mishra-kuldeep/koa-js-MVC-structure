
const UserModel = require('../models/UserModel')

class UserController {

    static async login(ctx) {
      try {
        let users = await UserModel.findOne({"email" : "vainsidd@gmail.com"});
        ctx.body = { message: 'Login successful', data:users};
        
      } catch (error) {
        ctx.status = 500; // Internal Server Error
        console.log(error)
        ctx.body = { message: 'Failed to fetch users', error: error.message };
      }
    }
  }
  
  module.exports = UserController;