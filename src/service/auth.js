var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const authLogin = async (loginData) => {
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(loginData),
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.goloadout.com/login",
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const authRegister = async (registerData) => {
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(registerData),
    redirect: "follow",
  };
  try {
    const response = await fetch(
      "https://api.goloadout.com/register",
      requestOptions
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const authLoginFacebook = async (facebookData) => {
  try {
    const response = await fetch("https://api.goloadout.com/auth/facebook", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(facebookData),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
