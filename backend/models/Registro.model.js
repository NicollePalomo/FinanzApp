const mongoose = require("mongoose");
const { Schema } = mongoose;

let RegistroSchema = new Schema(
  {
    tipoRegistro: { type: String },
    fechaISO: { type: Date },
    monto: { type: Number, default: 0 },
    categoria: { type: String },
    notas: { type: String },
  },
  {
    collection: "registros",
  },
  {
    timestamps: true,
  }
);
RegistroSchema.virtual("fecha")
  .set(function (fechaIngresada) {
    // El formato esperado es 'yyyy-mm-dd' que es el devuelto por el campo input
    // el valor recibido se almacenará en el campo fecha_nacimiento_iso de nuestro documento
    this.fechaISO = fechaIngresada;
  })
  .get(function () {
    // el valor devuelto será un string en formato 'yyyy-mm-dd'
    return this.fechaISO.toISOString().substring(0, 10);
  });
module.exports = mongoose.model("Registro", RegistroSchema);
