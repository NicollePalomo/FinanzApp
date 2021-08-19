const mongoose = require("mongoose");
const { Schema } = mongoose;

let RegistroSchema = new Schema(
  {
    tipoRegistro: { type: String },
    fecha_iso: { type: Date },
    monto: { type: Number },
    categoria: { type: String },
    notas: { type: String },
  },
  {
    collection: "registros",
  }
);
RegistroSchema.virtual("fecha")
  .set(function (fecha) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_iso de nuestro documento
    this.fecha_iso = new Date(fecha);
  })
  .get(function () {
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fecha_iso.toISOString().substring(0, 10);
  });

module.exports = mongoose.model("Registro", RegistroSchema);
