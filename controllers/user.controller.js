const { User, sequelize } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");

const register = async (req, res) => {
  const data = req.body;
  try {
    //tao avatar mac dinh
    const avatarUrl = gravatar.url(data.email);
    //tao ra 1 chuoi ngau nhien
    const salt = bcryptjs.genSaltSync(15);
    //ma hoa chuoi ngau nhien salt + password
    data.password = bcryptjs.hashSync(data.password, salt);
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      numberPhone: data.numberPhone,
      avatar: avatarUrl,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  //b1: tim ra user dang dang nhap dua tren email
  //b2: kiem tra mat khau co dung hay khong
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    const isAuth = bcryptjs.compareSync(password, user.password);

    if (isAuth) {
      const token = jwt.sign(
        {
          email: user.email,
          type: user.type,
        },
        "private_key",
        {
          expiresIn: 60 * 60,
        }
      );
      res.status(200).send({ message: "Đăng nhập thành công!!!", token });
    } else
      res
        .status(500)
        .send({ message: "Tài khoản hoặc mật khẩu không đúng!!!" });
  } else res.status(404).send({ message: "Không tìm thấy email phù hợp!!!" });
};

const uploadAvatar = async (req, res) => {
  const { user, file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const userFound = await User.findOne({
    email: user.email,
  });
  userFound.avatar = urlImage;
  await userFound.save();
  res.send(userFound);
};

const getAllTrip = async (req, res) => {
  const [ results ] = await sequelize.query(
    `select users.name as username , fromSta.name as from_station , toSta.name as to_station
    from users
    inner join tikets on users.id = tikets.user_id
    inner join trips on tikets.trip_id = trips.id
    inner join stations as fromSta on fromSta.id = trips.fromStation
    inner join stations as toSta on toSta.id = trips.toStation;`
  );
  res.send(results);
};

module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
