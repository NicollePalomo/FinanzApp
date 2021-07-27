const mongoose = require("mongoose");
const { Schema } = mongoose;

let CategoriaSchema = new Schema(
  {
    tipoRegistro: { type: String , required: true },
    categoria: { type: String , required: true },
  },  
  {
    collection: 'categorias',
  }
);

module.exports = mongoose.model('Categoria', CategoriaSchema);
