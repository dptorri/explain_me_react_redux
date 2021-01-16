import React from "react"
import { useSelector } from "react-redux"

const LoginStatus = () => {

const isLoggedIn = useSelector(store => store.session.isLoggedIn)
const session = useSelector(store => store.session)
return(
  <div>
    <div>{isLoggedIn ? "USER LOGGED IN" : "USER LOGGED OUT"}</div>
    <pre>{JSON.stringify(session, null, 2)}</pre>
  </div>
  ) 
}

export default LoginStatus