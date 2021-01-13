import {push} from "connected-react-router";

import {isAuthenticated} from './jwtUtil';

export function verifyToken() {
  return (dispatch) => {
    if (isAuthenticated()) {
      debugger;
      const segmentURL = window.location.pathname;
      if (segmentURL === '/login') {
        debugger;
        dispatch(push('/dashboard'));
        debugger;
      }
    }
  };
}