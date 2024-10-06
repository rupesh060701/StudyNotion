// resetpaswordToken
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt=require("bcrypt");
const crypto=require("crypto");

exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const email = req.body.email;

    //check user from this email,emmail verification
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        success: false,
        message: "Your email is not registered with us",
      });
    }
    //generate token
    const token = crypto.randomBytes(20).toString("hex");
    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    ); //new:true return updated details
    console.log("DETAILS",updatedDetails);
    //create url

    const url = `http://localhost:3000/update-password/${token}`;
    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link: ${url}`
    );

    //return respomse

    return res.json({
      success: true,
      message:
        "Email sent successfully, please check email and change password",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while sending reset password mail",
    });
  }
};

// ResetPassword

exports.resetPassword = async (req, res) => {
  try {
    //data fetch
    const { password, confirmPassword, token } = req.body;

    //validation
    if (password != confirmPassword) {
      return req.json({
        successtrue,
        message: "Password not matching",
      });
    }
    //get userdetail through token

    const userDetails = await User.findOne({ token: token });
    //if no entry - invalid token
    if (!userDetails) {
      return res.json({
        success: false,
        messsage: "Token is Invalid",
      });
    }
    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token is expire,Please regenerate your token",
      });
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    //password update
    await User.findOneAndUpdate(
      { token: token },
      { password: hashedPassword },
      { new: true }
    );
    

    return res.status(200).json({
      success: true,
      message: "Password reset successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while reseting password",
    });
  }
};
