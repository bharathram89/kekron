export const login = async (payload) => {
  try {
    const response = await fetch("https://api.goloadout.com/login", {
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

export const signup = async (payload) => {
  try {
    const response = await fetch("https://api.goloadout.com/register", {
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

export const facebookAuth = async (payload) => {
  try {
    const response = await fetch("https://api.goloadout.com/auth/facebook", {
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

export const googleAuth = async (payload) => {
  try {
    const response = await fetch("https://api.goloadout.com/auth/facebook", {
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
