var Seguro = require("../../models/seguro");

export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const {
        title,
        description,
        salesPhrase,
        pageName,
        pins,
        icon,
        coverage,
        assistance,
        questions,
      } = req.body; // Desestruturar a body da requisição

      const seguro = await Seguro.create({
        title,
        description,
        salesPhrase,
        pageName,
        pins,
        coverage,
        assistance,
        questions,
        icon,
      }); // Irá criar um novo dado com o body da requisição e também com o 'userId' informado na requisição também

      await seguro.save(); // '.save()' para as alterações do project serem salvas no DB

      return res.send({ errorcode: "none", seguro });
    } catch (error) {
      return res.status(400).send({ error, errorcode: "seguro_create_error" });
    }
  } else if (req.method == "GET") {
    try {
      const seguros = await Seguro.find(); // 'find()' é utilizado para pesquisar um certo dado no Scheme 'Project', já que está vazio ele vai retornar todos os dados; o 'populate()' é usado para fazer duas requisições em uma única query, já que está preenchido com 'user', ele vai retornar os dados do usuário no campo 'user'

      return res.send({ errorcode: "none", seguros }); // Retornará todos os dados
    } catch (error) {
      return res.status(400).send({ error, errorcode: "seguros_list_error" });
    }
  }
}
