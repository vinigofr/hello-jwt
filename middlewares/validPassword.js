module.exports = (req, res, next) => {
  const { password } = req.body;

  const isValid = password.length >= 5 && typeof password === 'string';

  if (!isValid) {
    return res.status(400).json({
      message: 'Verifique se o campo de senha seque os padrões',
      required: 'Min 5 caracteres',
    });
  }
  next();
};
