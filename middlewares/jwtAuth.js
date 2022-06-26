const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
 return res.status(401).json({ error: {
    message: 'Token não informado (campo não pode estar vazio)',
  } }); 
}

  try {
    const decoded = jwt.verify(authorization, process.env.SECRET);
    const { data, admin } = decoded;
    req.decoded = { data, admin };
    next();
  } catch (e) {
    const { name, message } = e;
    return res.status(403).json({
      error: `${name} - ${message}`,
    });
  }
};
