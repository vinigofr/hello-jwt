const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  try {
    const { username, password } = req.body;

    const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

    const payload = {
      data: username,
      admin: !!(username === 'admin' && password === 'senhasegura'),
    };

    const token = jwt.sign(payload, process.env.SECRET, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};
