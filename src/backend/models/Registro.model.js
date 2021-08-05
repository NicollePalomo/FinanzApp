const mongoose = require("mongoose");
const { Schema } = mongoose;

let RegistroSchema = new Schema(
  {
    tipoRegistro: { type: String },
    fecha: { type: Date },
    monto: { type: Number },
    categoria: { type: String },
    notas: { type: String },
  },
  {
    collection: "registros",
  }
);

module.exports = mongoose.model("Registro", RegistroSchema);
