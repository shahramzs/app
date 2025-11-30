import { SERVERURL } from "./server";
const axios = require("axios");

export default class ApiService {
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

  static async UploadingVideo(
    title,
    description,
    category,
    tag,
    saveInList,
    commentSetting,
    videoUrl,
    thumbImageUrl,
    waterMark,
    subtitleUrl,
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
    formData.append("commentSetting", commentSetting);
    formData.append("videoUrl", videoUrl);
    formData.append("thumbImageUrl", thumbImageUrl);
    formData.append("waterMark", waterMark);
    formData.append("subtitleUrl", subtitleUrl);
    formData.append("publishTime", publishTime);
    formData.append("token", token);
    try {
      const response = await axios
        .post(SERVERURL + "uploadVideo/", formData, {
          headers: {
            Authorization: "Bearer " + jwtToken,
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
