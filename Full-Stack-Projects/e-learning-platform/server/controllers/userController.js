const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

exports.register = async (req, res) => {
    const user = await User.create(req.body);
    res.json({ token: generateToken(user._id) });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: "Invalid credentials" });

    res.json({ token: generateToken(user._id) });
};