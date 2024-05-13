"use server";

import { signIn, signOut } from "./auth";
import { User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt";

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }
  try {
    connectToDB();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "User already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "something went wrong" };
  }
};
