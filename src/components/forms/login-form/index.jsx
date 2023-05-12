import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import { Link } from "gatsby";
import { authLogin } from "../../../service/auth";
import Modal from "../../modal";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    authLogin(loginData)
      .then((res) => {
        localStorage.setItem("token", res.token);
        window.location.href = "/userprofile/";
      })
      .catch((res) => {
        setError(res.message);
      });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        isOpen={showModal}
        className="main-modal-section"
        onRequestClose={handleClose}
      >
        <h1 className="forgot-password-heading text-white">Forgot Password</h1>
        <form
          className="form-login mt-10 forgot-password-section"
          action="#"
          onSubmit={"handleSubmit"}
        >
          <div className="single-fild">
            <input
              name="email"
              className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className="button text-center">
            <Button type={"submit"} className="text-white">
              Submit
              <StaticImage
                className="align-middle ml-3 transition-all group-hover:ml-5"
                src="../../../data/images/icons/arrrow-icon.webp"
                alt=""
              />
            </Button>
          </div>
        </form>
      </Modal>
      <form className="form-login mt-10" action="#" onSubmit={handleSubmit}>
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
        <div className="text-right">
          <a
            href="#"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Forgot Password
          </a>
        </div>
        <div className="text-center text-red mb-3">
          <a href="#">{error.message}</a>
        </div>
        <div className="button text-center">
          <Button type={"submit"} className="text-white">
            Login
            <StaticImage
              className="align-middle ml-3 transition-all group-hover:ml-5"
              src="../../../data/images/icons/arrrow-icon.webp"
              alt=""
            />
          </Button>
        </div>
        {/* <div className="account-text mt-5 text-center">
                <p>
                    Do not have any account,{" "}
                    <Link
                        to="/register"
                        className="text-yellow-400 font-semibold"
                    >
                        Signup here
                    </Link>
                </p>
            </div> */}
      </form>
    </>
  );
};

export default LoginForm;
