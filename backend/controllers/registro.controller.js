const registroCtrl = {};

const registroSchema = require("../models/Registro.model");
// const validateCategoriaInput = require("../validation/create-categoria");

registroCtrl.getRegistros = async (req, res) => {
  const registros = await registroSchema.find();
  // console.log(registros)
  res.json(registros);
};

registroCtrl.createRegistro = async (req, res) => {
  const { tipoRegistro, fecha, monto, categoria, notas } = req.body;
  console.log(req.body);
  const newRegistro = new registroSchema({
    tipoRegistro,
    fecha,
    monto,
    categoria,
    notas,
  });
  console.log(newRegistro);

  await newRegistro.save();

  res.json("New registro added");
};

registroCtrl.getRegistro = async (req, res, next) => {
  const registroId = req.params.id;
  if (!registroId) {
    return res.status(400).json({
      error: "No id",
    });
  }
  const registro = await registroSchema
    .findById(registroId)
    .exec((err, registro) => {
      if (err) {
        return res.status(500).json({
          error: "Server error: " + err.message,
        });
      }
      if (!registro) {
        return res.status(400).json({
          err: "No regsitro found with id: " + req.params.id,
        });
      }
      // creamos el objeto que enviaremos al front
      let reg = {};
      reg._id = registro._id; // llenamos los campos que deseamos enviar
      reg.tipoRegistro = registro.tipoRegistro;
      reg.categoria = registro.categoria;
      reg.monto = registro.monto;
      reg.notas = registro.notas;
      reg.fecha = registro.fecha; // <= Aqui estamos usando el campo virtual
      console.log(reg);
      return res.status(200).json(reg); // <= enviamos 'reg' al front
    });

  // let reg = {};
  // req.res.json(registro);
};

registroCtrl.deleteRegistro = async (req, res) => {
  await registroSchema.findByIdAndDelete(req.params.id);
  res.json("Registro Deleted");
};

registroCtrl.updateRegistro = async (req, res) => {
  const { tipoRegistro, fecha, monto, categoria, notas } = req.body;
  await registroSchema.findByIdAndUpdate(req.params.id, {
    tipoRegistro,
    fecha,
    monto,
    categoria,
    notas,
  });
  res.json("Registro Updated");
};

module.exports = registroCtrl;
