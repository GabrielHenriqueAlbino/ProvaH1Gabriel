const { body, validationResult } = require("express-validator");
const { validarCPF } = require("../validations/cpfValidations");

const doadorValidationRules = () => {
  return [
    body("doacao").notEmpty().withMessage("INFORME O VALOR DA DOAÇÃO:"),
    body("doacao").isFloat({min:10,max:Infinity}).withMessage("VALOR INVALIDO DE DOAÇÃO"),
    body("cpf").notEmpty().withMessage("CPF obrigatório"),
    body("cpf")
    .custom((value) => {
      if (!validarCPF(value)) throw new Error("CPF É inválido!");
      return true;
    })
    .withMessage("CPF inválido"),
    body("nome").notEmpty().withMessage("OBRIGATORIO INSERIR NOME"),
    body("nomeInstituicao").notEmpty().withMessage("INFORME O NOME DA INSTITUIÇÃO"),
  ];
};

module.exports = {
  doadorValidationRules,
};