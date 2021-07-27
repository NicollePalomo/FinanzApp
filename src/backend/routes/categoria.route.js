let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
// Modelo categoria
let categoriaSchema = require("../models/Categoria.model");
// Crear categoria   puede cambiarse por el codigo de la semana 4. utilizando save, then y catch
router.route('/add-categoria').post((req, res) => {
  // let categ = new categoriaSchema(req.body);
  // categ
  //   .save()
  //   .then((categ) => {
  //     res.status(200).json({ 'categ': 'categoria added successfully' });
  //   })
  //   .catch((err) => {
  //     res.status(400).send("adding new categ failed");
  //   });
  categoriaSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// Read categoria
router.route('/').get((req, res) => {
  categoriaSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Single categoria
router.route("/edit-categoria/:id").get((req, res) => {
  console.log("buscando id")
  // let iden=mongoose.Types.ObjectId(req.params.id)
  categoriaSchema.findById(req.params.id, ( data) => {
    res.json(data);
  });
});
// Update categoria   -> Posible modificación en crud con persistencia.
router.route("/update-categoria/:id").put((req, res, next) => {
  categoriaSchema.findByIdAndUpdate(
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
        console.log("Categoria actualizada exitosamente !");
      }
    }
  );
});
// Delete categoria
router.route("/delete-categoria/:id").delete((req, res, next) => {
  categoriaSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
