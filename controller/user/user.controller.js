const User = require('../../model/user/user.model');

const get = async (req, res) => {
  try {
    var userdata = await User.find();
    res.status(200).json({
      msg: 'Data Fetch Successfully',
      users: userdata,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

const create = async (req, res) => {
  try {
    const { name, dob, salary, joining, relieving, contact, status } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name is mandatory' });
    }

    const newData = new User({
      name,
      dob,
      salary,
      joining,
      relieving,
      contact,
      status,
    });

    const savedUser = await newData.save();

    res.status(201).json({
      user: savedUser,
      message: 'added successfully',
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Internal Server Error', er: error.message });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, dob, salary, joining, relieving, contact, status } = req.body;
    const userData = await User.findById(id);
    if (!userData) {
      return res.status(400).json({ message: 'User not found' });
    }
    if (!name) {
      return res.status(400).json({ message: 'Name is mandatory' });
    }
    userData.name = name;
    userData.dob = dob;
    userData.salary = salary;
    userData.joining = joining;
    userData.relieving = relieving;
    userData.contact = contact;
    userData.status = status;
    await userData.save();
    res.status(200).json({
      msg: 'Data Updated Successfully',
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  create,
  edit,
  get,
  deleteUser,
};
