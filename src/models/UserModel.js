const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
      },
      email: {
        type: String,
        required: [true, 'Email is required']
      },
      password: {
        type: String,
      },
      candidateId: {
        type: mongoose.Types.ObjectId,
        ref: 'Candidate'
      },
      employerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Employer'
      },
      jobs: [
        {
          jobId: {
            type: mongoose.Types.ObjectId,
            ref: 'Job'
          },
          date: { type: Date, required: true }
        }
      ],
      shortListedJobs: [
        {
          jobId: {
            type: mongoose.Types.ObjectId,
            ref: 'Job'
          },
          date: { type: Date, required: true }
        }
      ],
      rejectedJobs: [
        {
          jobId: {
            type: mongoose.Types.ObjectId,
            ref: 'Job'
          },
          date: { type: Date, required: true }
        }
      ],
      userType: {
        type: mongoose.Types.ObjectId, ref: 'UserType'
      },
      user_otp: {
        type: Number
      },
      user_verified: {
        type: Boolean,
        default: false
      },
      oauth: {
        type: String,
        default: "email"
      },
      isBlocked: {
        type: Boolean,
        default: false
      }
    }, { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;