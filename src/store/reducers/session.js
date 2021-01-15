// Actions: what we can do to our statue
const LOGIN = "session/LOGIN"
const LOGOUT = "session/LOGOUT"

const DEFAULT_STATE = { isLoggedIn: false }

// Reducer
const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }
  }
  return status
}



export default sessionReducer

// Action creators
export const loginUser = () => {
  return { type: LOGIN }
}

export const logoutUser = () => {
  return { type: LOGOUT }
}


