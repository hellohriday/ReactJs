import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  promise;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAcc = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );
      if (userAcc) {
        this.login({ email, password });
        return userAcc;
      } else return userAcc;
    } catch (error) {
      console.log("Error during Account creatation", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Unable to login", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Unable to get user", error);
    }
    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Unable to logout", error);
    }
    return null;
  }
}

const authService = new AuthService();

export default authService;
