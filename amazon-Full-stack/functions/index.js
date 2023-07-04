/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const functions = require("firebase-functions");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY); // secret key

//app config
const app = express();
//middlewares
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("payment Request Recived for this amount>>>", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "USD",
	});
	//ok-created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});
app.listen(10000, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("listenig 10000");
	}
});

// listen command
// exports.api = functions.https.onRequest(app);
// run firebase emulators:start

//http://127.0.0.1:5001/clone-54cab/us-central1/api
