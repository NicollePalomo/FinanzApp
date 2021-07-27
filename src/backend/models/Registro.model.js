const mongoose = require("mongoose");
const { Schema } = mongoose;

let RegistroSchema = new Schema(
  {
    tipoRegistro: { type: String, required: true },
    fecha: { type: Date, required: true },
    monto: { type: Number, required: true },
    categoria: { type: String, required: true },
    notas: { type: String },
  },
  {
    collection: "registros",
  }
);

module.exports = mongoose.model("Registro", RegistroSchema);
