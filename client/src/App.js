import React, { useEffect, useState } from "react";

function App(){
  
  const [backendData, setBackendData] = useState({})

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return(
    <div>
      {(typeof backendData.users === 'undefined') ? <p>Loading...</p>
      : backendData.users.map((user, key) => (<p key={key}>{user}</p>))}
    </div>
  )
  
}

export default App;