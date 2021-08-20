let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const db = require("./config/keys").mongoURI;

// Express Route
const categoriaRoute = require("./routes/categoria.route");
const registroRoute = require("./routes/registro.route");
const passport = require("passport");
const users = require("./routes/api/users");
// Connecting mongoDB Database
// mongoose.Promise = global.Promise;
mongoose
  .connect(db, {
    useNewUrlParser: true, useFindAndModify: false ,
  })
  .then(() => console.log("Database sucessfully connected!"))
  .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use("/categorias", categoriaRoute);
app.use("/registros", registroRoute);

// Passport middleware 
app.use(passport.initialize()); 
// Passport config 
require("./config/passport")(passport); // Routes 
app.use("/users", users);
// PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Connected to port " + port);
});
// 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
