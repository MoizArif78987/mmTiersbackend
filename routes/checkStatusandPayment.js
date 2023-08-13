const express = require("express");
const router = express.Router();
const { Customer } = require("../models/schema");
const { db } = require("../database/sql");
const stripe = require("stripe")(
  "sk_test_51NeEeXCiqOu9DHUvf6RDqho0fg7c4JwOgmflnkxmD34QT2FkGdFIxW1Qgh3XU20p7jdqjyhuGjcM0M0MViprGtMq00eBJDTUGV"
);

router.post("/", async (req, res) => {
  const _id = req.body._id;
  const type = req.body.type;
  const totalPayable = req.body.totalPayable;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "pkr",
            product_data: {
              name: type,
            },
            unit_amount: totalPayable * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      // success_url: 'http://localhost:4000/?session_id={CHECKOUT_SESSION_ID}',
      success_url: "http://localhost:3000/rooms",
      cancel_url: "http://localhost:4000",
    });

    const url = session.url;

    // Update payment status
    Customer.updateOne({ _id: _id }, { PaymentStatus: "Paid" })
      .exec()
      .then((result) => {
        if (result) {
          console.log("Updated Successfully");
        } else {
          console.log("Error While Updating");
        }
      });

    // Redirect to the payment page
    res.json({ url });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
