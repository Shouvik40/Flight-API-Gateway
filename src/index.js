const express = require("express");
const { rateLimit } = require("express-rate-limit");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const { TableHints } = require("sequelize");
const { createProxyMiddleware } = require("http-proxy-middleware");
const serverConfig = require("./config/server-config");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
console.log("Start");
app.use("/api", apiRoutes);

app.use(
  "/flightsService",
  createProxyMiddleware({
    target: ServerConfig.FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/flightsService": "/" },
  })
);
app.use("/bookingService", createProxyMiddleware({ target: serverConfig.BOOKING_SERVICE, changeOrigin: true }));

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});

// "http://localhost:4000/api/v1/flights/"
// "http://localhost:4002/flightservice/api/v1/flights/"

// "http://localhost:4000/api/v1/airplanes/"

// "http://localhost:4000/api/v1/bookings/payments"
// "http://localhost:4002/bookingservice/api/v1/bookings/payments"
//
