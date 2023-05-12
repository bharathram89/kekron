import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import Login from "../container/login-register/login";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { authLoginFacebook } from "../service/auth";
import { Route } from "react-router-dom";

const FAQPage = ({ data, location, pageContext }) => {
  const responseFacebook = async (response) => {
    await authLoginFacebook(response);
    window.location.href = "/userprofile/";
  };

  const responseGoogle = (response) => {
    console.log(response);
    window.location.href = "/userprofile/";
  };

  const globalContent = normalizedData(data?.allGeneral?.nodes || []);
  const content = normalizedData(data?.page.content || []);
  if (localStorage.getItem("token")) {
    window.location.href = "/userprofile";
  }
  return (
    <Layout
      data={{
        ...globalContent["menu"],
        ...globalContent["footer"],
      }}
    >
      <SEO title="Login Page" pathname="/" />
      <PageBreadcrumb
        pageContext={pageContext}
        location={location}
        title="Login"
      />
      <Login data={content["login-section"]} />
      <p className="text-center mt-2">OR</p>
      <hr className="horizone-align-section" />
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          paddingTop: "50px",
        }}
        className="text-center mt-3"
      >
        <ReactFacebookLogin
          appId="" //APP ID NOT CREATED YET
          fields="name,email,picture"
          callback={responseFacebook}
          buttonStyle={{
            width: "100%",
            borderRadius: "50px",
            padding: "17px",
          }}
        />
        <br />
        <br />
        <GoogleLogin
          clientId=""
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              style={{
                borderRadius: "50px",
                backgroundColor: "red",
                width: "100%",
                padding: "17px",
                fontFamily: "Helvetica,sans-serif",
                fontWeight: "700",
                fontSize: "19px",
              }}
            >
              LOGIN WITH GOOGLE
            </button>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </Layout>
  );
};

FAQPage.propTypes = {
  location: PropTypes.object,
  pageContext: PropTypes.object,
  data: PropTypes.shape({
    allGeneral: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({})),
    }),
    page: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

export const query = graphql`
  query LoginPageQuery {
    allGeneral {
      nodes {
        section
        id
        menu {
          ...Menu
        }
        footer {
          ...Footer
        }
      }
    }
    page(title: { eq: "loginPage" }, pageType: { eq: innerpage }) {
      content {
        ...PageContentAll
      }
    }
  }
`;

export default FAQPage;
