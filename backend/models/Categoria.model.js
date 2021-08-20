const mongoose = require("mongoose");
const { Schema } = mongoose;

let CategoriaSchema = new Schema(
  {
    tipoRegistro: { type: String },
    categoria: { type: String },
  },
  {
    collection: "categorias",
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categoria", CategoriaSchema);

