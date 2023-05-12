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

const UserProfile = ({ data, location, pageContext }) => {
  const responseFacebook = async (response) => {
    await authLoginFacebook(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
  const globalContent = normalizedData(data?.allGeneral?.nodes || []);
  const content = normalizedData(data?.page.content || []);
  return (
    <Layout
      data={
        {
          // ...globalContent["menu"],
          // ...globalContent["footer"],
        }
      }
    >
      <SEO title="User Profile" pathname="/userprofile" />
      <PageBreadcrumb
        pageContext={pageContext}
        location={location}
        title="User Profile"
      />
      <h1>User Profile</h1>
    </Layout>
  );
};

UserProfile.propTypes = {
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

// export const query = graphql`
//   query LoginPageQuery {
//     allGeneral {
//       nodes {
//         section
//         id
//         menu {
//           ...Menu
//         }
//         footer {
//           ...Footer
//         }
//       }
//     }
//     page(title: { eq: "loginPage" }, pageType: { eq: innerpage }) {
//       content {
//         ...PageContentAll
//       }
//     }
//   }
// `;

export default UserProfile;
