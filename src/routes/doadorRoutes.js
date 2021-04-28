const { Router, request } = require('express');
const serviceDoador = require('../service/serviceDoador');
const { validate } = require('../validations/validations');
const { doadorValidationsRules } = require('../validations/doadorValidations');


const routes = Router();


routes.post('/', doadorValidationsRules(), validate, (request, response) => {

    const { name, nameinstituicao, valorDoacao, cpf  } = request.body;
    const novoDoador = {name, nameinstituicao, valorDoacao, cpf };
    const DoadorRetorno = serviceDoador.regrasCredito(novoDoador);
   return response.status(201).json({ DoadorRetorno });

    });


    module.exports = routes;