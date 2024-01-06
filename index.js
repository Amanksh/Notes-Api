const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./db/index");

dotenv.config();

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`\nServer running on port: ${port}\n`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
