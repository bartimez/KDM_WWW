import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, GET_USER } from "./types";

const KDM_API = require("KDM_API");

export function newUser(data) {
  return function(dispatch) {
    axios({
      method: "post",
      url: `${KDM_API}/new/user`,
      data: data
    })
      .then(res => {
        console.log("created new user", res);
        localStorage.setItem("access_token", res.data.Authorization.access_token);
        localStorage.setItem("userId", res.data.user._id.$oid);
        dispatch({ type: AUTH_USER });
        browserHistory.push(`/settlements/create`);
      })
      .catch(err => {
        alert("Unable to create account");
        console.log("err", err);
      });
  };
}
