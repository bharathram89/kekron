import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../../components/title";
import LoginForm from "../../../components/forms/login-form";
import RegisterForm from "../../../components/forms/register-form";
import "../../../assets/css/swiper.css";

const Login = ({ data }) => {
  return (
    <section className="login-section">
      <div className="container">
        <div className="grid gap-10 md:gap-8 lg:gap-15 grid-cols-1 md:grid-cols-2 items-center">
          <div className="image border-section">
            <SectionTitle heading={"REGISTER"} />
            <RegisterForm />
          </div>
          <div className="form-warp mt-4">
            {data?.section_title && (
              <SectionTitle
                heading={data?.section_title.heading}
                {...data.section_title}
              />
            )}
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};
Login.propTypes = {
  data: PropTypes.shape({
    section_title: PropTypes.shape({
      heading: PropTypes.string,
    }),
  }),
};
export default Login;
