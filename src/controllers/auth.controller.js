const registerController = (req, res) => {
  const { username, email, password } = req.body || {};

  return res.status(200).json({
    message: "User registered successfully",
  });
};

module.exports = {
  registerController,
};
