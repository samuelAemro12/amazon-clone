const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
// a backend framework for Node.js
const cors = require("cors");
// a middleware that enables CORS with various options
const dotenv = require("dotenv");
// intsalled to use the .env file
dotenv.config();
// loads environment variables from a .env file into process.env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// used stripe to make payments, and the secret key is in the .env file
const app = express();
app.use(cors({origin:true}));

app.use(express.json());

