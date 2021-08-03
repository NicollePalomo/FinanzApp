const { Router } = require("express");
const router = Router();
const { check, validationResult } = require("express-validator");
const registroSchema = require("../models/Registro.model");

const {
  getRegistros,
  getRegistro,
  createRegistro,
  deleteRegistro,
} = require("../controllers/registro.controller");

router.route("/").get(getRegistros);
router.route("/:id").get(getRegistro);
router.route("/:id").delete(deleteRegistro);
router.post(
  "/",
  [
    check("categoria")
      .notEmpty()
      .withMessage("La categoría no puede estar vacía")
      .isLength({ min: 3 })
      .withMessage("Categoria debe tener por lo menos 3 caracteres"),
    check("tipoRegistro")
      .notEmpty()
      .withMessage("El tipo de registro no puede estar vacío"),
    check("monto").isEmpty().withMessage("El monto no puede estar vacio"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { tipoRegistro, fecha, monto, categoria, notas } = req.body;
    const newRegistro = new registroSchema({
      tipoRegistro,
      fecha,
      monto,
      categoria,
      notas,
    });

    await newRegistro.save();

    res.json("New registro added");
  }
);
// router.route("/").post(createRegistro);
router.put(
  "/:id",
  [
    check("categoria")
      .notEmpty()
      .withMessage("La categoría no puede estar vacía")
      .isLength({ min: 3 })
      .withMessage("Categoria debe tener por lo menos 3 caracteres"),
    check("tipoRegistro")
      .notEmpty()
      .withMessage("El tipo de registro no puede estar vacío"),
    check("monto")
      .isEmpty()
      .withMessage("El monto no puede estar vacio")
      .isNumeric()
      .withMessage("El monto debe ser un valor numerico"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { tipoRegistro, fecha, monto, categoria, notas } = req.body;
    await registroSchema.findByIdAndUpdate(req.params.id, {
      tipoRegistro,
      fecha,
      monto,
      categoria,
      notas,
    });
    res.json("Registro Updated");
  }
);

module.exports = router;

// let mongoose = require("mongoose"),
//   express = require("express"),
//   router = express.Router();
// // Modelo categoria
// let registroSchema = require("../models/Registro.model");

// // Crear registro   puede cambiarse por el codigo de la semana 4. utilizando save, then y catch

// router.route("/add-registro").post( (req, res) => {
//   //Form validation
//   let reg = new registroSchema(req.body);
//   reg
//     .save()
//     .then((reg) => {
//       res.status(200).json({ reg : "Registro added successfully" });
//     //   console.log(req.body.id)
//     })
//     .catch((err) => {
//       res.status(400).send("adding new registro failed");
//     });
// });

// // Leer registros

// router.route("/").get((req, res) => {
//   registroSchema.find((error, data) => {
//     if (error) {
//       return (error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Get Single registro
// router.route("/:id").get((req, res) => {
//   console.log(req.params.id);
//   registroSchema.findById(req.params._id, (data) => {
//     res.json(data);
//   });
// });
// // Update categoria   -> Posible modificación en crud con persistencia.
// router.route("/update-registro/:id").put((req, res, next) => {
//     registroSchema.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Registro actualizado exitosamente !");
//       }
//     }
//   );
// });
// // Delete categoria
// router.route("/delete-registro/:id").delete((req, res, next) => {
//     registroSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });
// module.exports = router;
