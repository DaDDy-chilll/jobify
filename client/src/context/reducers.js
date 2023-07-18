import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  } else if (action.type === CLEAR_ALERT) {
    return { ...state, showAlert: false, alertText: "", alertType: "" };
    // } else if (action.type === REGISTER_USER_BEGIN) {
    //   return { ...state, isLoading: true };
    // } else if (action.type === REGISTER_USER_SUCCESS) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     token: action.payload.token,
    //     user: action.payload.user,
    //     userLocation: action.payload.userLocation,
    //     jobLocation: action.payload.jobLocation,
    //     showAlert: true,
    //     alertType: "success",
    //     alertText: "User Created! Redirecting",
    //   };
    // } else if (action.type === REGISTER_USER_ERROR) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     showAlert: true,
    //     alertType: "danger",
    //     alertText: action.payload.msg,
    //   };
    // } else if (action.type === LOGIN_USER_BEGIN) {
    //   return { ...state, isLoading: true };
    // } else if (action.type === LOGIN_USER_SUCCESS) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     token: action.payload.token,
    //     user: action.payload.user,
    //     userLocation: action.payload.userLocation,
    //     jobLocation: action.payload.jobLocation,
    //     showAlert: true,
    //     alertType: "success",
    //     alertText: "Login Successful! Redirecting",
    //   };
    // } else if (action.type === LOGIN_USER_ERROR) {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     showAlert: true,
    //     alertType: "danger",
    //     alertText: action.payload.msg,
    //   };
  } else if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  } else if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
      jobLocation: action.payload.jobLocation,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  } else if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  } else if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  } else if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      jobLocation: "",
      userLocation: "",
    };
  }
  throw new Error(`no such action: ${action.type}`);
};
export default reducer;
