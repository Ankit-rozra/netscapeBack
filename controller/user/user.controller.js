const User = require('../../model/user/user.model');

const create = async (req, res) => {
  try {
    var { userId, name, email, password } = req.body;

    var newData = new User({
      // Assuming your model name is 'User'
      userId: userId,
      name: name,
      email: email,
      password: password,
    });

    const savedUser = await newData.save();

    res.status(200).send({
      success: true,
      msg: 'Data Submitted Successfully',
      data: savedUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
};

const findAll = async (req, res) => {
  try {
    var data = await User.find({});
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'error',
      err,
    });
  }
};

const findbyID = async (req, res) => {
  const { _id } = req.params;

  try {
    var data = await User.findOne({ _id: _id });
    if (!data) {
      return res.status(404).json({ msg: 'User not found' });
    }
    return res.status(201).json(data);
  } catch (err) {
    return res.status(500).json({
      message: 'error',
      err,
    });
  }
};

module.exports = {
  create,
  findAll,
  findbyID,
};
