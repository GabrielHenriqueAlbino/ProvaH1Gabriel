module.exports.insereDoador = async function(novoDoador){

        const DoadorRetorno = doadorRepositorio.buscaDoador(novoDoador.cpf);
          if (DoadorRetorno.length == 0) {
        
            return null;
        
          }}
          