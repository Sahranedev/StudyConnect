import React from 'react'

import { useCurrentUserContext } from "@/context/UserContext";

const HomePage = () => {
  const { user } = useCurrentUserContext()
  
  return (
    <div>
      HomePage
      <p>{user.firstname}</p>
      <div>
        <button type="button" onClick={()=> console.log("data user:", user)}>CONSOLE MOI</button>
      </div>
    </div>
  )
}

export default HomePage