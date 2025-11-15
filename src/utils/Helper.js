import {
  getCookie,
  getCookies,
  setCookie,
  deleteCookie,
  hasCookie,
  useGetCookies,
  useSetCookie,
  useHasCookie,
  useDeleteCookie,
  useGetCookie,
} from "cookies-next/client";
import { Cryptography } from "./Cryptography";



export class Helper {
  static password = "jksd%lfjdkfjd984903*8940dft(pp-)254545=$-=-a678o+%";

  static async setStorage(key, value) {
    const encryptedValue = await Cryptography.Encrypt(value, this.password);
    setCookie(key, encryptedValue);
  }

  // static async setStorages(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     console.log("key = " + array[i], "value = " + array[i + 1]);
  //     setCookie(array[i], array[i + 1]);
  //     i += 1;
  //   }
  //   return "ok";
  // }

  static async setStorages(array) {
    for (let i = 0; i < array.length; i += 2) {
      const key = array[i];
      const value = array[i + 1];
      const encryptedValue = await Cryptography.Encrypt(value, this.password);
      setCookie(key, encryptedValue);
      console.log("key =", key, "value =", encryptedValue);
    }
    return "ok";
  }

  static async getStorage(name) {
    const encryptedValue = getCookie(name);
    if (!encryptedValue) return null;
    try {
      return await Cryptography.Decrypt(encryptedValue, this.password);
    } catch (e) {
      console.error("Decryption failed", e);
      return null;
    }
  }

  static getAllStorage = () => {
    return getCookies();
  };

  static checkStorage = (name) => {
    return hasCookie(name);
  };

  static deletStorage = (name) => {
    deleteCookie(name);
  };
  static deleteAllStorage = () => {
    const array = [
      "token",
      "username",
      "fname",
      "lname",
      "email",
      "last_joined",
      "last_login",
    ];
    for (let i = 0; i < array.length; i++) {
      deleteCookie(array[i]);
    }
    return "delete";
  };
}
