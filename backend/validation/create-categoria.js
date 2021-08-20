const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateCategoriaInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.categoria = !isEmpty(data.categoria) ? data.categoria : "";
  data.tipoRegistro = !isEmpty(data.tipoRegistro) ? data.tipoRegistro : "";

  // Categoria checks
  if (Validator.isEmpty(data.categoria)) {
    errors.categoria = "Categoria field is required";
  }
 
  // Categoria checks
  if (Validator.isEmpty(data.tipoRegistro)) {
    errors.tipoRegistro = "Tipo registro field is required";
  }
  
  return { errors, isValid: isEmpty(errors) };
};
