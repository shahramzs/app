import { SERVERURL } from "./server";
const axios = require("axios");

export default class ApiService {
  //Sign up
  static async SignUp(username, email, mobile, password, callback) {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);

    try {
      const response = await axios
        .post(SERVERURL + "register/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          callback(res);
        });
    } catch (error) {
      console.error("Error Register An User:", error);
    }
  }

  //Sign In
  static async SignIn(email, mobile, password, callback) {
    const formData = new FormData();

    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);

    try {
      const response = await axios
        .post(SERVERURL + "signin/", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          callback(res);
        });
    } catch (e) {
      console.error("error onSignIn", e);
    }
  }

  //Video Upload
  static async UploadingVideo(
    title,
    description,
    category,
    tag,
    saveInList,
    commentSettings,
    file,
    image,
    waterMark,
    subtitle,
    publishTime,
    token,
    jwtToken,
    callback
  ) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("tag", tag);
    formData.append("saveInList", saveInList);
    formData.append("commentSettings", commentSettings);
    formData.append("videoUrl", file);
    formData.append("thumbImageUrl", image);
    formData.append("waterMark", waterMark);
    formData.append("subtitleUrl", subtitle);
    formData.append("publishTime", publishTime);
    formData.append("token", token);
    try {
      const response = await axios
        .post(SERVERURL + "uploadVideo/", formData, {
          headers: {
            Authorization: jwtToken,
          },
        })
        .then((res) => {
          callback(res);
        });
    } catch (e) {
      console.error("error onSignIn", e);
    }
  }
}
