import { prepareHeaders } from "../utils/functions";

export const login = async (payload) => {
  console.log("_________________>>>")
  console.log(process.env.API_URL)

  try {
    const response = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers:  prepareHeaders(),
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const signup = async (payload) => {
  try {
    const response = await fetch(`${process.env.API_URL}/register`, {
      method: "POST",
      headers:  prepareHeaders(),
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const facebookAuth = async (payload) => {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/facebook`, {
      method: "POST",
      headers:  prepareHeaders(),
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
export const resetPassword = async (payload) => {
  try {
    const response = await fetch(`${process.env.API_URL}/reset_password`, {
      method: "POST",
      headers: prepareHeaders(),
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const googleAuth = async (payload) => {
  try {
    const response = await fetch(`${process.env.API_URL}/auth/facebook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
