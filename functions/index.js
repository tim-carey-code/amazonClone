const functions = require("firebase-functions");
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQhNMCxo5yTcPVLyM8JomFebk5wcVU1UZCjLI5w7uDG4WjVijGIOYlIiuaCiJM17glHYSO0Vi3SMHxr339G2JKf00P3qTuWK0"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received BOOM!!!", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/challenge-e302f/us-central1/api
