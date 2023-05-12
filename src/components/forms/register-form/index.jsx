import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import { authRegister } from "../../../service/auth";

const RegisterForm = () => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[2].value === e.target[3].value) {
      const registerData = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      };
      authRegister(registerData)
        .then((res) => {
          localStorage.setItem("token", res.token);
          window.location.href = "/userprofile/";
        })
        .catch((res) => {
          setError(res.message);
        });
    } else {
      setError("Password and confirm password are not same");
    }
  };
  return (
    <form className="form-login mt-10" action="#" onSubmit={handleSubmit}>
      <div className="single-fild">
        <input
          name="name"
          className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="single-fild">
        <input
          name="email"
          className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div className="single-fild">
        <input
          name="password"
          className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="single-fild">
        <input
          name="confirmpass"
          className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
          type="password"
          placeholder="Retype Password"
        />
      </div>
      <div className="text-center text-red mb-3">
        <a href="#">{error}</a>
      </div>
      <div className="button text-center">
        <Button type={"Submit"} className="text-white">
          Register
          <StaticImage
            className="align-middle ml-3 transition-all group-hover:ml-5"
            src="../../../data/images/icons/arrrow-icon.webp"
            alt=""
          />
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
