const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NeEeXCiqOu9DHUvf6RDqho0fg7c4JwOgmflnkxmD34QT2FkGdFIxW1Qgh3XU20p7jdqjyhuGjcM0M0MViprGtMq00eBJDTUGV');

router.get('/',(req,response)=>{
    async function checkout() {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'pkr',
                        product_data: {
                            name: type
                        },
                        unit_amount: totalPayable * 100,
                    },
                    quantity: 1,
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:4000/?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:4000'
        });
        return session.url;
    }

    try {
        const url = checkout();
        res.redirect(url);
    } catch (error) {
        console.log(error);
    }

    Customer.updateOne({_id:_id},{
        "PaymentStatus":"Paid"
    }).exec().then((result)=>{
        if(result){
            console.log("Updated Successfully")
        }
        else{
            console.log("Error While Updating")
        }
    })
});

module.exports = router;
