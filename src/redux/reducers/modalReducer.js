import { SHOW_MODAL, HIDE_MODAL } from "../types/modalType";
const initialState = {
    show: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true
      };

    case HIDE_MODAL:
      return {
        show: false
      };

    // Add more cases for other authentication-related actions if needed

    default:
      return state;
  }
};

export default authReducer;
