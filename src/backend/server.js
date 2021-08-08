let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
//let dbConfig = require("./database/db");

// Express Route
const categoriaRoute = require("./routes/categoria.route");
const registroRoute = require("./routes/registro.route");

// // Connecting mongoDB Database
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(dbConfig.db, {
//     useNewUrlParser: true,
//   })
//   .then(
//     () => {
//       console.log("Database sucessfully connected!");
//     },
//     (error) => {
//       console.log("Could not connect to database : " + error);
//     }
//   );

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Conectado a MongoDB con éxito."))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use(".routes/api/users", users);


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/categorias", categoriaRoute);
app.use("/registros", registroRoute);

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// const port = process.env.PORT || 4000;
// const server = app.listen(port, () => {
//   console.log("Connected to port " + port);
// });
// 404 Error
// app.use((req, res, next) => {
//   next(createError(404));
// });
// app.use(function (err, req, res, next) {
//   console.error(err.message);
//   if (!err.statusCode) err.statusCode = 500;
//   res.status(err.statusCode).send(err.message);
// });

