module.exports = (req, res, next) => {
  if (req.decoded.admin) {
    return next();
  }

  return res.status(403).json({
    error: { message: 'Restricted access' },
  });
};
