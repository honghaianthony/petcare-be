module.exports = {
  checkUserAdmin: (req, res, next) => {
    if (
      req.user.role === 2 ||
      req.user.role === 3 ||
      req.user.role === 4 ||
      req.user.role === 5
    ) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  },
};
