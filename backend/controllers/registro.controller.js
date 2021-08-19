const registroCtrl = {};

const registroSchema = require("../models/Registro.model");
// const validateCategoriaInput = require("../validation/create-categoria");

registroCtrl.getRegistros = async (req, res) => {
  const registros = await registroSchema.find();
  res.json(registros);
};

// crea el registro 
registroCtrl.createRegistro = async (req, res) => {

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
};

// actualiza el registro
registroCtrl.getRegistro = async (req, res) => {
  const registro = await registroSchema.findById(req.params.id);
  res.json(registro);
};
// borra el registro
registroCtrl.deleteRegistro = async (req, res) => {
  await registroSchema.findByIdAndDelete(req.params.id);
  res.json("Registro Deleted");
};

// registroCtrl.updateRegistro = async (req, res) => {
//   const { tipoRegistro, fecha, monto, categoria, notas } = req.body;
//   await registroSchema.findByIdAndUpdate(req.params.id, {
//     tipoRegistro,
//     fecha,
//     monto,
//     categoria,
//     notas,
//   });
//   res.json("Registro Updated");
// };

module.exports = registroCtrl;
