import React from "react"
import { useDispatch } from "react-redux"

import { loginUser, logoutUser } from "../../../store/reducers/session"
const Action = () => {
  const dispatch = useDispatch()

return(
  <div>
    <button onClick={ () => dispatch(loginUser())}>LOG IN</button>
    <button onClick={ () => dispatch(logoutUser())}>LOG OUT</button>
  </div>
  ) 
}

export default Action