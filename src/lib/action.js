"use server";

import { logging } from "../../next.config";
import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDB } from "./utils";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }
  try {
    connectToDB();

    const user = User.findOne({ username });

    if (user) {
      return "Username already exists";
    }

    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};
