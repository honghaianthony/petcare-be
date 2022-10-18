module.exports = {
  checkUserAdmin: (req, res, next) => {
    if (req.user.role === 2) {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  },
};
