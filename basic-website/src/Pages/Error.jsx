import React from 'react'
import { useNavigate } from 'react-router'
function Error() {
    let navigate = useNavigate();
     setInterval(() => {
        navigate(-1);
    }, 2000);
  return (
    <h1>
      404 Not Found
    </h1>
   
  )
}

export default Error
