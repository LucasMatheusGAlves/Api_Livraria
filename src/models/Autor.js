import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {
      type: String,
      required: [true, "O nome do(a) autor(a) é obrigatório"]
    },
    nacionalidade: {type: String},
    bibliografia: {
      type: String,
      validate: {
        validator: (valor) => {
          return valor.length >= 50 && valor.length <= 300;
        },
        message: "O número de caracteres deve estar entre 50 e 300. Valor fornecido: {VALUE}"
      }
    },
  }, { versionKey: false }
);

const autores = mongoose.model("autores", autorSchema);

export default autores;