const categoriaCtrl = {};

const categoriaSchema = require("../models/Categoria.model");

categoriaCtrl.getCategorias = async (req, res) => {
  const categorias = await categoriaSchema.find();
  res.json(categorias);
};

categoriaCtrl.createCategoria = async (req, res) => {

  const { categoria, tipoRegistro } = req.body;
  const newCategoria = new categoriaSchema({
    categoria,
    tipoRegistro,
  });
  
  await newCategoria.save();
  
  res.json("New categoria added");
};

categoriaCtrl.getCategoria = async (req, res) => {
  const categoria = await categoriaSchema.findById(req.params.id);
  res.json(categoria);
};

categoriaCtrl.deleteCategoria = async (req, res) => {
  await categoriaSchema.findByIdAndDelete(req.params.id);
  res.json("Categoria Deleted");
};

// categoriaCtrl.updateCategoria = async (req, res) => {
//   const { categoria, tipoRegistro } = req.body;
//   await categoriaSchema.findByIdAndUpdate(req.params.id, {
//     categoria,
//     tipoRegistro,
//   });
//   res.json("Categoria Updated");
// };

module.exports = categoriaCtrl;
