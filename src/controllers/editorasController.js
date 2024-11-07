import NaoEncontrado from "../erros/NaoEncontrado.js";
import { editoras } from "../models/index.js";

class EditoraController {
  static listarEditoras = async (req, res, next) => {
    try {
      const editorasResultado = editoras.find();

      req.resultado = editorasResultado;

      next();
    } catch (erro) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarEditoraPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const editoraResultado = await editoras.findById(id);

      if (editoraResultado !== null) {
        res.status(200).send(editoraResultado);
      } else {
        next(new NaoEncontrado("ID da Editora não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarEditora = async (req, res, next) => {
    try {
      let editora = new editoras(req.body);

      const editoraResultado = await editora.save();

      res.status(201).send(editoraResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarEditora = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      const editoraResultado = await editoras.findByIdAndUpdate(id, {$set: req.body});

      if (editoraResultado !== null) {
        res.status(200).send({message: "Editora atualizada com sucesso"});
      } else {
        next(new NaoEncontrado("ID da Editora não localizado."));
      }

    } catch (erro) {
      next(erro);
    }
  };

  static excluirEditora = async (req, res, next) => {
    try {
      const id = req.params.id;

      const editoraResultado = await editoras.findByIdAndDelete(id);


      if (editoraResultado !== null) {
        res.status(200).send({message: "Editora removida com sucesso"});
      } else {
        next(new NaoEncontrado("ID da Editora não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default EditoraController;