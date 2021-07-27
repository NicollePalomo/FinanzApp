let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Modelo categoria
let registroSchema = require("../models/Registro.model");

// Crear registro   puede cambiarse por el codigo de la semana 4. utilizando save, then y catch

router.route("/add-registro").post((req, res) => {
  let reg = new registroSchema(req.body);
  reg
    .save()
    .then((reg) => {
      res.status(200).json({ reg : "Registro added successfully" });
    //   console.log(req.body.id)
    })
    .catch((err) => {
      res.status(400).send("adding new registro failed");
    });
});

// Leer registros

router.route("/").get((req, res) => {
  registroSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single registro
router.route("/:id").get((req, res) => {
  console.log(req.params.id);
  registroSchema.findById(req.params._id, (data) => {
    res.json(data);
  });
});
// Update categoria   -> Posible modificación en crud con persistencia.
router.route("/update-registro/:id").put((req, res, next) => {
    registroSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Registro actualizado exitosamente !");
      }
    }
  );
});
// Delete categoria
router.route("/delete-registro/:id").delete((req, res, next) => {
    registroSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
