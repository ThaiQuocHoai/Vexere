const express = require("express");
const path = require("path");
const { root } = require("./routers");
const { sequelize } = require("./models");
const Fingerprint = require("express-fingerprint");
// const swaggerUi = require("swagger-ui-express");
// const swaggerJSDoc = require("swagger-jsdoc");
const cors = require("cors");

const app = express();

app.use(cors());

//cai dat fingerprint 
app.use(Fingerprint());

// cai ung dung kieu json
app.use(express.json());

// cài static file
const publicPathDirectory = path.join(__dirname, "./public");
app.use("/public",express.static(publicPathDirectory));

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//       description: "A simple Express Library API",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000/api/v1",
//       },
//     ],
//   },
//   apis: ["./routers/*.js"],
// };

// const specs = swaggerJSDoc(options);

// dùng router
app.use("/api/v1", root);

// lắng nghe sự kiện kết nối
const port = 3000;
app.listen(port, async () => {
  console.log(`App running on http://localhost:${port}/api/v1`);
  try {
    await sequelize.authenticate();
    console.log("kết nối thành công");
  } catch (error) {
    console.log(error);
  }
});
