import React, { useReducer, useContext } from "react";
import axios from "axios";
import reducer from "./reducers";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGOUT_USER,
  // LOGIN_USER_BEGIN,
  // LOGIN_USER_ERROR,
  // LOGIN_USER_SUCCESS,
  // REGISTER_USER_BEGIN,
  // REGISTER_USER_ERROR,
  // REGISTER_USER_SUCCESS,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  TOGGLE_SIDEBAR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
  showSiber: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //? axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;
  const authFetch = axios.create({
    baseURL: "/api/v1",
    // headers: {
    //   Authorization: `Bearer ${state.token}`,
    // },
  });
  //? Request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  //? Response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log("AUTH ERROR");
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };
  const removeUserToLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  // const registerUser = async (currentUser) => {
  //   dispatch({ type: REGISTER_USER_BEGIN });
  //   try {
  //     const response = await axios.post("/api/v1/auth/register", currentUser);
  //     console.log(response);
  //     const { user, token, location } = response.data;
  //     dispatch({
  //       type: REGISTER_USER_SUCCESS,
  //       payload: { user, token, location },
  //     });
  //     //todo local stroage later
  //     addUserToLocalStorage({ user, token, location });
  //   } catch (error) {
  //     console.log(error.response);
  //     dispatch({ type: REGISTER_USER_ERROR, payload: { msg: error.response } });
  //   }
  //   clearAlert();
  // };

  // const loginUser = async (currentUser) => {
  //   dispatch({ type: LOGIN_USER_BEGIN });
  //   try {
  //     const response = await axios.post("/api/v1/auth/login", currentUser);

  //     const { user, token, location } = response.data;
  //     dispatch({
  //       type: LOGIN_USER_SUCCESS,
  //       payload: { user, token, location },
  //     });
  //     //todo local stroage later
  //     addUserToLocalStorage({ user, token, location });
  //   } catch (error) {
  //     dispatch({
  //       type: LOGIN_USER_ERROR,
  //       payload: { msg: error.response.data.msg },
  //     });
  //   }
  //   clearAlert();
  // };

  const setUpUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const response = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );

      const { user, token, location } = response.data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      //todo local stroage later
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSideBar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    console.log("dispatch end");
    removeUserToLocalStorage();
  };

  const updateUser = async (currentUser) => {
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { data: tours } = await axios.get(
        "https://course-api.com/react-tours-project"
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setUpUser,
        toggleSideBar,
        logoutUser,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
