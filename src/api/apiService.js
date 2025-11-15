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
}
