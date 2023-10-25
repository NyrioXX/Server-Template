//Na assinatura eu decidi usar uma senha criptografada
//Basicamente eu defino a senha e criptografo p usar em outras entidades da API
const bcrypt = require("bcrypt");
const senha = "sua-senha-aqui";
const assinatura = async () => {
  try {
    const criptografar = await bcrypt.hash(senha, 10);
    return criptografar;
  } catch (error) {
    console.error(error);
  }
};

module.exports = assinaturaJwt;
