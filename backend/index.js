const stripe = require("stripe")(
	"sk_test_51KX4oBCsVqOvnzIBTcNdsMJ5Sm9CTDrVtIii18MXDgCT3rnKPIZuaTGpziiZLkKjGVlye4I78aDRA9WvLp1FHfAG00nAZvh4Mi"
);
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));

const DOMAIN = "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: [
			{
				price_data: {
					currency: "usd",
					product_data: {
						name: "T-shirt"
					},
					unit_amount: 2000
				},
				quantity: 1
			}
		],
		mode: "payment",
		success_url: `${DOMAIN}/success.html`,
		cancel_url: `${DOMAIN}/cancel.html`
	});
	res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
