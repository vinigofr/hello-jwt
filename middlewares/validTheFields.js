module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({
      message: 'É necessário um nome de usuário de senha para efetuar login',
    });
  }
  next();
};
