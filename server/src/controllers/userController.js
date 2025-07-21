import cloudinary from "../config/cloudinary.js";
import User from "../models/usermodel.js";
export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      const error = new Error("User Not Found  !! Login Again");
      Error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({
        message: `Welcome back ${currentUser.fullname}`,
        data: currentUser,
      });
  } catch (error) {
    next(error);
  }
};

export const UpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const {
      fullname,
      number,
      gender,
      occupation,
      state,
      district,
      city,
      representing,
    } = req.body;
    if (!currentUser) {
      const error = new Error("User Not Found  !! Login Again");
      Error.statusCode = 401;
      return next(error);
    }

    const photo = req.file;
    let picture;
    if (photo) {
      const b64 = Buffer.from(photo.buffer).toString("base64");
      const dataURI = `data:${photo.mimetype}; base64, ${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        folder: "eventPlannerPicture",
        width: 500,
        height: 500,
        crop: "fill",
      });
      picture = result.secure_url;
    }

    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        fullname,
        number,
        gender,
        occupation,
        state,
        district,
        city,
        representing,
        photo: picture || currentUser.photo,
      },
      { new: true }
    );

    res.status(200).json({ message: "Profile Updated", data: updatedUser });
  } catch (error) {
    next(error);
  }
};
