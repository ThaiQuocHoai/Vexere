const express = require('express');
const { register, login, uploadAvatar, getAllTrip } = require('../controllers/user.controller');
const authenticate = require('../middlewares/auth/authenticate');
const uploadImage = require('../middlewares/upload/upload-image');
const userRoot = express.Router();


userRoot.post("/register", register);
userRoot.post("/login", login);
userRoot.get("/all-trip", getAllTrip);




userRoot.post('/upload-avatar', authenticate, uploadImage("avatars"), uploadAvatar)

module.exports = userRoot;