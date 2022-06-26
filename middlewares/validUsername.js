module.exports = (req, res, next) => {
  const { username } = req.body;
  const alphanumericRegex = /[0-9a-z]/gm;
  const isValid = username.length >= 5
    && alphanumericRegex.test(username);

  if (!isValid) {
 return res.status(400).json({
      message: 'Verifique se o campo de usuário atende aos padrões',
      required: 'MIN 5 CARACTERES E INCLUIR SOMENTE [0-9] E [a-z]',
    }); 
}

  next();
};