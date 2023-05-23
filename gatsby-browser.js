/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/assets/css/global.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      {element}
    </Provider>
  );
};
