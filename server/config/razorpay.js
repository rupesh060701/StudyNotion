const Razorpay=require("razorpay");
require("dotenv").config();

exports.instance=new Razorpay({
    key_id:"rzp_test_yvIevsJC0SaqPK",
    key_secret:process.env.RAZORPAY_SECRET,
});